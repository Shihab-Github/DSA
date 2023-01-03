const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

var maxAreaOfIsland = function (grid) {
  let maxArea = 0;
  let seen = {};
  let rows = grid.length;
  let columns = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      maxArea = Math.max(maxArea, calculateArea(i, j, grid));
    }
  }
};

var calculateArea = function (i, j, grid) {
  if (grid[i][j] === 0) return 0;

  return (
    1 +
    calculateArea(i + 1, j, grid) +
    calculateArea(i - 1, j, grid) +
    calculateArea(i, j + 1, grid) +
    calculateArea(i, j - 1, grid)
  );
};
