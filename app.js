// Step 1: Create an array to represent the game board
let board = [null, null, null, null, null, null, null, null, null];

// Step 2: Create a variable to keep track of the current player
let currentPlayer = "X";

// Step 3: Add event listeners to the game tiles
let tiles = document.querySelectorAll(".tile");
let winnerMessage = HTMLElement;

tiles.forEach((tile, index) => {
  tile.addEventListener("click", () => {
    // Step 4: Check if the clicked tile is already marked
    if (board[index] !== null) {
      return;
    }

    // Mark the tile with the current player's symbol
    tile.textContent = currentPlayer;
    board[index] = currentPlayer;
    
    // Add class to tile based on current player
    tile.classList.add(`tile-${currentPlayer.toLowerCase()}`);

    // Step 5: Check for a win condition
    if (
      // Check horizontal rows
      (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) ||
      (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) ||
      (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) ||
      // Check vertical columns
      (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) ||
      (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) ||
      (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) ||
      // Check diagonals
      (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) ||
      (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer)
    ) {
        winnerMessage = document.createElement("div");
        winnerMessage.classList.add("winner-message");
        winnerMessage.textContent = `${currentPlayer} wins!`;

        document.getElementById("board").appendChild(winnerMessage);
        // Add this code after displaying the win message

        addSparkles(50);
  
      // Step 6: End the game if a win condition is met
      setTimeout(resetGame, 2000);
      return;
    }

    // Step 7: Check for a tie
    if (board.every((tile) => tile !== null)) {
        // End the game in a tie
        winnerMessage = document.createElement("div");
        winnerMessage.innerHTML = "Tie game!";
        winnerMessage.classList.add("tie");
        document.getElementById("board").appendChild(winnerMessage);
        setTimeout(resetGame, 2000);
        return;
        }

    // Switch to the other player
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
  });
});

function resetGame() {
  // Reset the board and current player
  board = [null, null, null, null, null, null, null, null, null];
  currentPlayer = "X";

  // Clear the tile contents and classes
  tiles.forEach((tile) => {
    tile.textContent = "";
    tile.classList.remove("tile-x");
    tile.classList.remove("tile-o");
  });
  winnerMessage.style.display = "none";
  winnerMessage.textContent = "";
}


function addSparkles(sparkles) {
    const gameEl = document.querySelector("body");
  
    // add each sparkle
    for (let i = 0; i < sparkles; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
  
      // set random position and size
      const x = Math.floor(Math.random() * gameEl.offsetWidth);
      const y = Math.floor(Math.random() * gameEl.offsetHeight);
      const size = Math.floor(Math.random() * 10) + 5;
      sparkle.style.left = x + "px";
      sparkle.style.top = y + "px";
      sparkle.style.width = size + "px";
      sparkle.style.height = size + "px";
  
      // add the sparkle to the page
      gameEl.appendChild(sparkle);
      setTimeout(() => {
        document.querySelectorAll(".sparkle").forEach((sparkle) => {
            sparkle.classList.remove("sparkle");
          });
      }, 2000);
    }
  }
  