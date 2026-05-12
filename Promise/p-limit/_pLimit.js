/**
 * 并发控制
 *
 * @param {number} concurrency 并发数量
 * @return {Promise<void>}
 */
const _pLimit = (concurrency) => {
    if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
        throw new TypeError('Expected `concurrency` to be a number from 1 and up');
    }

    /**
     * 任务队列
     *
     * @type {Function[]}
     */
    const queue = []

    // 任务数量
    let activeCount = 0

    // 执行一下个任务
    const next = () => {
        activeCount--
        if (queue.length) {
            queue.shift()()
        }
    }

    /**
     * 执行任务
     *
     * @param {Function} fn
     * @param {Function} resolve
     * @param {*[]} args
     * @return {Promise<void>}
     */
    const run = async (fn, resolve, ...args) => {
        const result = (async () => fn(...args))()

        resolve(result)
        activeCount++

        try {
            await result
        } catch (e) {

        }

        next()
    }

    /**
     * 任务入队
     *
     * @param {Function} fn
     * @param {Function} resolve
     * @param {*[]} args
     */
    const enqueue = (fn, resolve, ...args) => {
        queue.push(run.bind(null, fn, resolve, ...args))

        ;(async () => {
            await Promise.resolve()
            if (activeCount < concurrency && queue.length) {
                queue.shift()()
            }
        })()
    }

    /**
     * 添加任务
     *
     * @param {Function} fn
     * @param {*[]} args
     * @return {Promise<void>}
     */
    const generator = (fn, ...args) => new Promise(resolve => {
        enqueue(fn, resolve, ...args)
    })

    Object.defineProperties(generator, {
        activeCount: {
            get: () => activeCount
        },
        pendingCount: {
            get: () => queue.length
        },
        clearQueue: {
            value: () => {
                queue.length = 0
            }
        }
    })

    return generator
}
