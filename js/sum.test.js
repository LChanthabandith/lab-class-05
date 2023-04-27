const sum = require('./sum');

test('sum function returns correct result', () => {
  const result = sum(4, 7);
  expect(result).toEqual([11, 'The sum of 4 and 7 is 11.']);
});
