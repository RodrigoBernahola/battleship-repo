import { Ship } from "./Ship.js";
import { Gameboard } from "./Gameboard.js";

const gameBoardInstance = new Gameboard();
console.log(gameBoardInstance);
const shipInstanceOne = new Ship(4);
gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
console.log(gameBoardInstance);
// console.log(gameBoardInstance);
const shipInstanceTwo = new Ship(5);
gameBoardInstance.placeShip(2, 5, shipInstanceTwo, "vertical");
console.log(gameBoardInstance);

// console.log("Componente 0 del array");
// console.log(gameBoardInstance.board[0][0]);
// console.log(gameBoardInstance.board[0][1]);
// console.log(gameBoardInstance.board[0][2]);
// console.log(gameBoardInstance.board[0][3]);
// console.log(gameBoardInstance.board[0][4]);

// console.log("Componente 6 del array en la posición 0");
// console.log(gameBoardInstance.board[0][5]);
