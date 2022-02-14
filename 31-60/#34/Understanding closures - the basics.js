function buildFun(n){
    let result = []

    for (let i = 0; i < n; i++) {
        result[i] = function () {
            return i
        };
    }
    return result
}