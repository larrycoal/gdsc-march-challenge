const getFactor = require("./getFactors");

test("Get Factors", () => {
  expect(getFactor(12)).toMatchObject([
    [2, 6],
    [3, 4],
    [2, 2, 3],
  ]);
});
test("Get Factors", () => {
  expect(getFactor(120)).toMatchObject([
    [2, 60],
    [3, 40],
    [3, 5, 8],
    [4, 30],
    [4, 5, 6],
    [5, 24],
    [6, 20],
    [8, 15],
    [10, 12],
    [2, 3, 4, 5],
    [2, 6, 10],
    [2, 2, 2, 15],
    [2, 2, 2, 3, 5],
  ]);
});
