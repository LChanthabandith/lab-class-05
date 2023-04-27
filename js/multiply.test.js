const multiply = require('../multiply');

test('multiply function returns correct result', () => {
  const result = multiply(5, 9);
  expect(result).toEqual([45, 'The product of 5 and 9 is 45.']);
});
