function sum(num1, num2) {
    const sum = num1 + num2;
    const string = `The sum of ${num1} and ${num2} is ${sum}.`;
    return [sum, string];
  }
  
  module.exports = sum;
  
