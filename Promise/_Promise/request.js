/**
 * 使用 MyPromise 模拟 Http 请求
 * - 如果 url 不是以 '.json' 结尾，则 reject
 * 
 * @param {string} url
 * @return {MyPromise}
 */
function request(url) {
    const start = new Date()
    return new MyPromise((resolve, reject) => {
        const action = url.slice(-5) === '.json' ? resolve : reject
        setTimeout(() => {
            action({
                    url,
                    start,
                    end: new Date()
                }
            )
        }, Math.random() * 1000 + 1000 | 0)
    })
}
