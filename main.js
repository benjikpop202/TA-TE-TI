import {Prandom, preguntas} from './preguntas.js'
let board = ["", "", "", "", "", "", "", "", ""];
export const gameState = {
  currentPlayer: "✖"
};

const cells = document.querySelectorAll(".col");

  cells.forEach((cell, index) => {
    cell.addEventListener("click", ()=>{
      if(board[index] == ""){
        Prandom(preguntas, cell, index)
      }
      
    });
  });
  
 export function handleClick(cell, index) {
  board[index] = gameState.currentPlayer;
  cell.textContent = gameState.currentPlayer;
  
    if (checkWin()) {
      setTimeout(() => {
        alert(`${gameState.currentPlayer} ha ganado!`);
        location.reload()
      }, 100);
      return;
    }
  
    if (board.every(cell => cell !== "")) {
      setTimeout(() => {
        alert("Empate!");
       location.reload()
      }, 100);
      return;
    }
  
    gameState.currentPlayer = gameState.currentPlayer == "✖" ? "⭕" : "✖";  
  }
  
  function checkWin() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], 
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], 
      [0, 4, 8],
      [2, 4, 6], 
    ];
  
    return winConditions.some(condition => 
      condition.every(index => board[index] === currentPlayer)
    );
  }
  


console.log(cells);
