import "./styles.css";
import { Player } from "./domain/Player.js";
import { Ship } from "./domain/Ship.js";
import { GameController } from "./application/GameController.js";

//Crear todos los objetos necesarios en forma de Mockup y simular una partida
//Utilizar solo los metodos de domain, a través de GameController, SIN utilizar el DOM.
const playerOne = new Player("Human");
const playerTwo = new Player("CPU");

//Poner 9 barcos en cada tablero de cada jugador

//Barcos del jugador "Humano"
const shipOnePlayerOne = new Ship(5);
const shipTwoPlayerOne = new Ship(4);
const shipThreePlayerOne = new Ship(3);
const shipFourPlayerOne = new Ship(2);
const shipFivePlayerOne = new Ship(2);
const shipSixPlayerOne = new Ship(1);
const shipSevenPlayerOne = new Ship(1);
const shipEightPlayerOne = new Ship(1);
const shipNinePlayerOne = new Ship(1);

playerOne.gameBoard.placeShip(8, 4, shipOnePlayerOne, "horizontal");
playerOne.gameBoard.placeShip(0, 0, shipTwoPlayerOne, "horizontal");
playerOne.gameBoard.placeShip(4, 2, shipThreePlayerOne, "vertical");
playerOne.gameBoard.placeShip(2, 0, shipFourPlayerOne, "horizontal");
playerOne.gameBoard.placeShip(8, 0, shipFivePlayerOne, "horizontal");
playerOne.gameBoard.placeShip(3, 7, shipSixPlayerOne, "vertical");
playerOne.gameBoard.placeShip(2, 4, shipSevenPlayerOne, "horizontal");
playerOne.gameBoard.placeShip(1, 7, shipEightPlayerOne, "horizontal");
playerOne.gameBoard.placeShip(6, 6, shipNinePlayerOne, "horizontal");

//Barcos del jugador "CPU"

const shipOnePlayerTwo = new Ship(5);
const shipTwoPlayerTwo = new Ship(4);
const shipThreePlayerTwo = new Ship(3);
const shipFourPlayerTwo = new Ship(2);
const shipFivePlayerTwo = new Ship(2);
const shipSixPlayerTwo = new Ship(1);
const shipSevenPlayerTwo = new Ship(1);
const shipEightPlayerTwo = new Ship(1);
const shipNinePlayerTwo = new Ship(1);

playerTwo.gameBoard.placeShip(6, 2, shipOnePlayerTwo, "horizontal");
playerTwo.gameBoard.placeShip(1, 8, shipTwoPlayerTwo, "vertical");
playerTwo.gameBoard.placeShip(1, 1, shipThreePlayerTwo, "horizontal");
playerTwo.gameBoard.placeShip(3, 2, shipFourPlayerTwo, "horizontal");
playerTwo.gameBoard.placeShip(8, 2, shipFivePlayerTwo, "horizontal");
playerTwo.gameBoard.placeShip(8, 8, shipSixPlayerTwo, "horizontal");
playerTwo.gameBoard.placeShip(2, 6, shipSevenPlayerTwo, "horizontal");
playerTwo.gameBoard.placeShip(4, 5, shipEightPlayerTwo, "horizontal");
playerTwo.gameBoard.placeShip(8, 5, shipNinePlayerTwo, "horizontal");

//Iniciar la partida con los barcos en su posición
const gameControllerInstance = new GameController(playerOne, playerTwo);

//Iniciar juego
gameControllerInstance.startGame();

//Procesar los ataques dadas unas coordenadas recibidas, mockeando el DOM (o UI)
console.log(gameControllerInstance);

while (!gameControllerInstance.gameOver) {
  if (gameControllerInstance.currentPlayerTurn === playerOne) {
    let x = parseInt(window.prompt("Ingresa la coordenada X a atacar: "));
    let y = parseInt(window.prompt("Ingresa la coordenada Y a atacar: "));
    //¿Usar otro try catch si la coordenada ingresada no es valida?
    let resultOfPlayerAttack = gameControllerInstance.handlePlayerAttack(x, y);
    if (resultOfPlayerAttack === "miss") {
      gameControllerInstance.switchTurns();
    }
  } else {
    let resultOfCPUAttack = gameControllerInstance.handleCPUAttack();
    if (resultOfCPUAttack === "miss") {
      gameControllerInstance.switchTurns();
    }
  }
}

//agregar validacion extra para re intentar ataque al atacar una celda ya atacada antes o fuera del limite
//agregar getCurrentGameState()
console.log(gameControllerInstance);
