const sum = require('./sum');
const multiply = require('./multiply');

function sumAndMultiply(num1, num2, num3) {
  const sumResult = sum(sum(num1, num2)[0], num3)[0];
  const multiplyResult = multiply(multiply(num1, num2)[0], num3)[0];
  const sumString = `${num1} and ${num2} and ${num3} sum to ${sumResult}.`;
  const multiplyString = `The product of ${num1} and ${num2} and ${num3} is ${multiplyResult}.`;
  return [sumResult, multiplyResult, sumString, multiplyString];
}

module.exports = sumAndMultiply;
