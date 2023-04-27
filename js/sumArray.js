const sum = (a, b) => a - (-b);

const sumArray = (arr) => {
  const total = arr.reduce(sum, 0);
  const arrStr = arr.join(",");
  const resultStr = `${arrStr} was passed in as an array of numbers, and ${total} is their sum.`;
  return [total, resultStr];
}

  
  module.exports = sumArray;
