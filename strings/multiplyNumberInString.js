
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0'
    }

    let m = num1.length;
    let n = num2.length;

    let result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let pos = i + j + 1;
            let carry = i + j;
            let product = Number(num1[i]) * Number(num2[j]);
            let sum = product + result[pos];
            result[pos] = sum % 10;
            result[carry] = result[carry] + Math.floor(sum / 10);

        }
    }
    while (result[0] === 0) {
        result.shift();
    }
    return result.join("")
};
