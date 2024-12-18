const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class _Promise {
    status = PENDING
    value
    reason
    fulfilledQueue = []
    rejectedQueue = []

    /**
     * @param {function} executor
     */
    constructor(executor) {
        try {
            executor((value) => this.resolve(value), (reason) => this.reject(reason))
        } catch (e) {
            this.reject(e)
        }
    }

    /**
     *
     * @param {*} value
     */
    resolve(value) {
        if (this.status !== PENDING) return

        this.status = FULFILLED
        this.value = value
        this.fulfilledQueue.forEach(callback => callback(value))
    }

    /**
     *
     * @param {*} reason
     */
    reject(reason) {
        if (this.status !== PENDING) return

        this.status = REJECTED
        this.reason = reason
        this.rejectedQueue.forEach(callback => callback(reason))
    }


    /**
     *
     * @param {function} onFulfilled 兑现回调
     * @param {function} [onRejected] 拒绝回调
     */
    then(onFulfilled, onRejected) {
        const p2 = new _Promise((resolve, reject) => {
            queueMicrotask(() => {
                onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => resolve(this.value)
                onRejected = typeof onRejected === 'function' ? onRejected : () => reject(this.reason)

                const resolveCallback = this.wrapCallback(p2, onFulfilled, resolve, reject)
                const rejectCallback = this.wrapCallback(p2, onRejected, resolve, reject)

                if (this.status === FULFILLED) {
                    resolveCallback(this.value)
                    return
                }

                if (this.status === REJECTED) {
                    rejectCallback(this.reason)
                    return;
                }

                this.fulfilledQueue.push(resolveCallback)
                this.rejectedQueue.push(rejectCallback)
            })
        })
        return p2
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }

    finally(fn) {
        return this.then(
            value => _Promise.resolve(fn()).then(() => value),
            error => _Promise.resolve(fn()).then(() => {
                throw error
            }))
    }

    wrapCallback(promise2, callback, resolve, reject) {
        return (arg) => queueMicrotask(() => {
            let x

            try {
                x = callback(arg)
            } catch (e) {
                reject(e)
                return
            }

            this.resolutionProcedure(promise2, x, resolve, reject)
        })
    }

    resolutionProcedure(promise2, x, resolve, reject) {
        if (promise2 === x) {
            reject(new TypeError('promise2 === x'))
            return
        }

        if (x instanceof _Promise) {
            x.then(
                value => this.resolutionProcedure(promise2, value, resolve, reject),
                reason => reject(reason)
            )
            return
        }

        if (x !== null && typeof x === 'object' || typeof x === 'function') {
            let then

            try {
                then = x.then
            } catch (e) {
                reject(e)
                return;
            }

            if (typeof then === 'function') {
                let isCalledResolve = false
                let isCalledReject = false

                const resolvePromise = (value) => {
                    if (isCalledResolve || isCalledReject) return
                    isCalledResolve = true
                    this.resolutionProcedure(promise2, value, resolve, reject)
                }
                const rejectPromise = (reason) => {
                    if (isCalledResolve || isCalledReject) return
                    isCalledReject = true
                    reject(reason)
                }

                try {
                    then.call(x, resolvePromise, rejectPromise)
                } catch (e) {
                    if (!isCalledResolve && !isCalledReject) {
                        reject(e)
                    }
                }
                return;
            }
        }

        resolve(x)
    }

    static resolve(value) {
        if (value instanceof _Promise) return value
        return new _Promise(resolve => resolve(value))
    }

    static reject(reason) {
        return new _Promise((_, reject) => reject(reason))
    }

    static race(promises) {
        return new _Promise((resolve, reject) => {
            if (promises.length === 0) return resolve()

            promises.forEach(p => {
                _Promise.resolve(p).then(res => {
                    return resolve(res)
                }, error => {
                    return reject(error)
                })
            })
        })
    }

    static all(promises) {
        return new _Promise((resolve, reject) => {
            const result = []
            const length = promises.length
            let count = 0

            if (length === 0) return resolve(result)

            promises.forEach((p, index) => {
                _Promise.resolve(p).then(value => {
                    count++
                    result[index] = value
                    if (count === length) {
                        resolve(result)
                    }
                }, error => {
                    reject(error)
                })
            })
        })
    }

    static allSettled(promises) {
        return new _Promise((resolve) => {
            const result = []
            const length = promises.length
            let count = 0

            if (length === 0) return resolve(result)

            for (let i = 0; i < length; i++) {
                _Promise.resolve(promises[i]).then(value => {
                    count++
                    result[i] = {
                        status: FULFILLED,
                        value
                    }
                    if (count === length) {
                        resolve(result)
                    }
                }, error => {
                    count++
                    result[i] = {
                        status: REJECTED,
                        reason: error
                    }
                    if (count === length) {
                        resolve(result)
                    }
                })
            }
        })
    }
}

