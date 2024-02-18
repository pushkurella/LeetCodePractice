/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // update borders from O to T
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] === "O" &&
        (i === 0 ||
          j === 0 ||
          i === board.length - 1 ||
          j === board[i].length - 1)
      ) {
        dfs(i, j);
      }
    }
  }
  console.log(board);
  // update everything which is O to X
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
  console.log(board);
  // Update T to O
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "T") {
        board[i][j] = "O";
      }
    }
  }
  console.log(board);

  function dfs(i, j) {
    if (
      i < 0 ||
      i === board.length ||
      j < 0 ||
      j === board[i].length ||
      board[i][j] === "T" ||
      board[i][j] === "X"
    ) {
      return;
    }

    board[i][j] = "T";
    //recursive calls
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
  }
};
