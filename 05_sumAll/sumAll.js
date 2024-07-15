const sumAll = function (num1, num2) {
    let arr = [];
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num2 > num1) {
        for (let i = 0; i < num2 - num1 + 1; i++) arr.push(num1 + i);
        return arr.reduce((prev, current) => prev + current)
    } else {
        for (let i = 0; i < num1 - num2 + 1; i++) arr.push(num2 + i);
        return arr.reduce((prev, current) => prev + current)
    }
}

console.log(sumAll([], 7))

// Do not edit below this line
module.exports = sumAll;
