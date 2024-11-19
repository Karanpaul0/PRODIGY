  // script.js

const board = Array(9).fill(null);
let currentPlayer = "X";
let gameActive = true;

const gameBoard = document.getElementById("game-board");
const statusDisplay = document.getElementById("status");
const resetButton = document.getElementById("reset-button");

// Initialize the game board
function initializeBoard() {
  gameBoard.innerHTML = "";
  board.forEach((_, index) => {
    const cell = document.createElement("div");
    cell.dataset.index = index;
    cell.addEventListener("click", handleCellClick);
    gameBoard.appendChild(cell);
  });
  updateStatus();
}

// Handle cell click
function handleCellClick(event) {
  const index = event.target.dataset.index;
  if (board[index] || !gameActive) return;

  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;
  event.target.classList.add("taken");

  if (checkWinner()) {
    statusDisplay.textContent = `Player ${currentPlayer} wins! 🎉`;
    gameActive = false;
  } else if (board.every(cell => cell)) {
    statusDisplay.textContent = "It's a draw! 🤝";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateStatus();
  }
}

// Check for a winner
function checkWinner() {
  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winningPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

// Update status
function updateStatus() {
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

// Reset the game
resetButton.addEventListener("click", () => {
  board.fill(null);
  currentPlayer = "X";
  gameActive = true;
  initializeBoard();
});

// Initialize the game on load
initializeBoard();
