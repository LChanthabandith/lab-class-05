const sumArray = require("./sumArray");

test('sumArray should return correct result', () => {
    expect(sumArray([2, 3, 4])).toEqual([9, '2,3,4 was passed in as an array of numbers, and 9 is their sum.']);
  });
