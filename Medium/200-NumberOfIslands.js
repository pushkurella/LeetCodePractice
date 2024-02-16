/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islandsCount = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        islandsCount += dfs(r, c);
      }
    }
  }
  function dfs(row, col) {
    // base case
    if (
      row < 0 ||
      row > grid.length - 1 ||
      col < 0 ||
      col > grid[row].length - 1 ||
      grid[row][col] === "0"
    ) {
      return;
    }
    grid[row][col] = "0";
    // recurse
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
    return 1;
  }
  return islandsCount;
};
