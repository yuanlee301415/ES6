// 状态
var PENDING = 'pending';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

/**
 * 敲定 Promise
 *
 * @param {MyPromise} promise
 * @param {object|function} x 中间返回值
 * @param {function} resolve
 * @param {function} reject
 * @return {*}
 */
function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) return reject(new TypeError('The promise and the return value are the same'))

    if (x instanceof MyPromise) {
        return x.then(function (y) {
            resolvePromise(promise, y, resolve, reject)
        }, reject)
    }

    if (typeof x === 'object' || typeof x === 'function') {
        if (x === null) return resolve(x)

        try {
            var then = x.then
        } catch (e) {
            return reject(e)
        }

        if (typeof then === 'function') {
            var called = false
            try {
                then.call(x, function (y) {
                    if (called) return
                    called = true
                    resolvePromise(promise, y, resolve, reject)
                }, function (r) {
                    if (called) return
                    called = true
                    reject(r)
                })
            } catch (e) {
                if (called) return
                reject(e)
            }
        } else {
            resolve(x)
        }
        return
    }

    resolve(x)
}

/**
 * MyPromise
 *
 * @param {function} fn executor
 * @constructor
 */
function MyPromise(fn) {
    var that = this

    this.status = PENDING // 初始状态为 pending
    this.value = null // 初始化 value
    this.reason = null // 初始化 reason
    this.onFulfilledCallbacks = [] // resolve 回调函数数组
    this.onRejectedCallbacks = [] // reject 回调函数数组

    /**
     * 兑现
     * @param {*} value 结果
     */
    function resolve(value) {
        if (that.status !== PENDING) return
        that.status = FULFILLED
        that.value = value
        that.onFulfilledCallbacks.forEach(callback => {
            callback(that.value)
        })
    }

    /**
     * 拒绝
     * @param {*} reason 原因
     */
    function reject(reason) {
        if (that.status !== PENDING) return
        that.status = REJECTED
        that.reason = reason
        that.onRejectedCallbacks.forEach(callback => {
            callback(that.reason)
        })
    }

    // 运行 executor
    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

/**
 * then
 *
 * @param {function} onFulfilled
 * @param {function} [onRejected]
 * @return {MyPromise}
 */
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var that = this
    var _onFulfilled = onFulfilled
    var _onRejected = onRejected
    var promise2

    if (typeof _onFulfilled !== 'function') {
        _onFulfilled = function (value) {
            return value
        }
    }

    if (typeof _onRejected !== 'function') {
        _onRejected = function (reason) {
            throw reason
        }
    }

    if (this.status === FULFILLED) {
        promise2 = new MyPromise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    if (typeof onFulfilled !== 'function') {
                        resolve(that.value)
                    } else {
                        var x = _onFulfilled(that.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            }, 0)
        })
        return promise2
    }

    if (this.status === REJECTED) {
        promise2 = new MyPromise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    if (typeof onRejected !== 'function') {
                        reject(that.reason)
                    } else {
                        var x = _onRejected(that.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            }, 0)
        })
        return promise2
    }

    if (this.status === PENDING) {
        promise2 = new MyPromise(function (resolve, reject) {
            that.onFulfilledCallbacks.push(function () {
                setTimeout(function () {
                    try {
                        if (typeof onFulfilled !== 'function') {
                            resolve(that.value)
                        } else {
                            var x = _onFulfilled(that.value)
                            resolvePromise(promise2, x, resolve, reject)
                        }
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            })

            that.onRejectedCallbacks.push(function () {
                setTimeout(function () {
                    try {
                        if (typeof onRejected !== 'function') {
                            reject(that.reason)
                        } else {
                            var x = _onRejected(that.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        }
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            })
        })
        return promise2
    }
}

/**
 * catch
 *
 * @param onRejected
 * @return {MyPromise}
 */
MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}

/**
 * finally  - 注册一个在 Promise 敲定时调用的函数
 *
 * @param {function} fn
 * @return {MyPromise}
 */
MyPromise.prototype.finally = function (fn) {
    return this.then(function (res) {
        return MyPromise.resolve(fn()).then(function () {
            return res
        })
    }, function (error) {
        return MyPromise.resolve(fn()).then(function () {
            throw error
        })
    })
}

/**
 * resolve - 返回一个已经兑现的 Promise 对象
 *
 * @param {*} [value]
 * @return {MyPromise}
 */
MyPromise.resolve = function (value) {
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => {
        resolve(value)
    })
}

/**
 * reject - 返回一个已经拒绝的 Promise 对象
 *
 * @param {*} [reason]
 * @return {MyPromise}
 */
MyPromise.reject = function (reason) {
    return new MyPromise((_, reject) => {
        reject(reason)
    })
}

/**
 * all
 * - 当所有输入的 Promise 全部兑现时，返回的 Promise 将被兑现，并带有一个包含所有兑现值的数组
 * - 如果输入的任何 Promise 被拒绝，返回的 Promise 将被拒绝，并带有一个被拒绝的原因
 *
 * @param {MyPromise[]} promises
 * @return {MyPromise}
 */
MyPromise.all = function (promises) {
    return new MyPromise((resolve, reject) => {
        var result = []
        var length = promises.length
        var count = 0

        if (length === 0) return resolve(result)

        promises.forEach((p, index) => {
            MyPromise.resolve(p).then(res => {
                count++
                result[index] = res
                if (count === length) {
                    resolve(result)
                }
            }, e => {
                reject(e)
            })
        })
    })
}

/**
 * race - 当所有输入的 Promise 有一个被敲定时，返回的 Promise 将被敲定
 *
 * @param {MyPromise[]} promises
 * @return {MyPromise}
 */
MyPromise.race = function (promises) {
    return new MyPromise((resolve, reject) => {
        if (promises.length === 0) return resolve()

        promises.forEach((p) => {
            MyPromise.resolve(p).then(res => {
                return resolve(res)
            }, e => {
                return reject(e)
            })
        })
    })
}

/**
 * allSettled - 当所有输入的 Promise 都敲定时，返回的 Promise 将被兑现，并带有描述每个 Promise 结果的对象数组
 *
 * @param {MyPromise[]} promises
 * @return {MyPromise}
 */
MyPromise.allSettled = function (promises) {
    return new MyPromise(function (resolve) {
        var result = []
        var length = promises.length
        var count = 0

        if (length === 0) return resolve(result)

        for (var i = 0; i < length; i++) {
            (function (i) {
                MyPromise.resolve(promises[i]).then(function (value) {
                    count++
                    result[i] = {
                        status: FULFILLED,
                        value
                    }
                    if (count === length) return resolve(result)
                }, function (e) {
                    count++
                    result[i] = {
                        status: REJECTED,
                        reason: e
                    }
                    if (count === length) return resolve(result)
                })

            })(i)
        }
    })
}
