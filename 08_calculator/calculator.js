const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;

};

const sum = function (arr) {
  if (!arr[0]) return 0;
  return eval(arr.join("+"));
};

const multiply = function (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2)
};

const factorial = function (num) {
  let i = num;
  if (num === 0) return 1;
  while (i > 1) {
    num = num * (i - 1);
    i--;
  }
  return num;
};

console.log(multiply([2, 4, 6, 8, 10, 12, 14]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
