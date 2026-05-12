/**
 * 使用 MyPromise 模拟 Http 请求
 * - 如果 url 不是以 '.json' 结尾，则 reject
 *
 * @param {string} url
 * @return {_Promise}
 */
function request(url) {
    const start = new Date()
    return new _Promise((resolve, reject) => {
        const action = url.slice(-5) === '.json' ? resolve : reject
        setTimeout(() => {
            action({
                    url,
                    start,
                    end: new Date()
                }
            )
        }, Math.random() * 2000 | 0)
    })
}
