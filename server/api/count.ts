const n = 1
export default () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n + 's后获取的异步数据')
        }, 1000 * n);
    })

}