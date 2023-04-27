const sumAndMultiply = require('./sumAndMultiply');

test('sumAndMultiply function returns correct results', () => {
  const result = sumAndMultiply(4, 7, 5);
  expect(result).toEqual([
    16,
    140,
    '4 and 7 and 5 sum to 16.',
    'The product of 4 and 7 and 5 is 140.'
  ]);
});
