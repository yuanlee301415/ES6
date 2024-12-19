/**
 * 使用 Promise 模拟 Http 请求
 * - 如果 url 不是以 '.json' 结尾，则 reject
 *
 * @param {string} url
 * @return {Promise}
 */
function request(url) {
    const start = new Date()
    console.log('request:', url, start)
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1000 + 2000 | 0
        let action, code
        if (url.slice(-5) === '.json') {
            action = resolve
            code = 200
        } else {
            action = reject
            code = 404
        }

        setTimeout(() => {
            action({
                    url,
                    code,
                    delay,
                    start,
                    end: new Date()
                }
            )
        }, delay)
    })
}
