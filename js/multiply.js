function multiply(num1, num2) {
    const product = num1 * num2;
    const string = `The product of ${num1} and ${num2} is ${product}.`;
    return [product, string];
  }
  
  module.exports = multiply;
  
