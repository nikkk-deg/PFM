arr = [2, -1, 2, 3, -9];

function getMaxSubSum(arr) {
    let sum = arrSum = 0;
    for (let arrElement of arr) {
        sum += arrElement;
        arrSum = Math.max(arrSum, sum);
        if(sum < 0)  sum = 0;
    }
    return arrSum;
}

console.log(getMaxSubSum(arr));