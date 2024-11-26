let player1 = "X";
let player2 = "O";
const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
const game = document.getElementsByClassName("container").innerHTML;
const restartbutton = document.getElementsByClassName("restart-button").innerHTML;
const cells = document.querySelectorAll(".player");
let board = Array(9).fill(null);
let currentPlayer = player1;


    

cells.forEach((cell, index) => { cell.addEventListener('click', () => handleClick(cell, index)); });

function handleClick (cell,index) {
    if(board[index] == null){
    board[index]=currentPlayer;
    cell.textContent = currentPlayer;
    currentPlayer = (currentPlayer === player1) ? player2 : player1;
    }
}

 
function checkResult() {
    const playerXWon = winningCombinations.some(combination => {
        return combination.every(index => board[index] === player1);
    });

    const playerOWon = winningCombinations.some(combination => {
        return combination.every(index => board[index] === player2);
    });

    if (playerXWon) {
        alert("Player X wins!");
        return 'X';  // Return 'X' if Player X wins
    } else if (playerOWon) {
        alert("Player O wins!");
        return 'O';  // Return 'O' if Player O wins    
    } 
    else if (board.every(cell => cell !==null)){
        alert("The match is draw");
        setTimeout(reset,5000);
        return "draw";
    }  
    else {
        console.log("No winner yet.");
        return null;  // Return null if neither player has won
    }
}
setInterval(checkResult,1000);

function reset(){
    document.querySelectorAll(".player").forEach (cell => {cell.textContent=""});
board = Array(9).fill(null);
}
restartbutton.addEventListener('click', reset);