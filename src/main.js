import { Gameboard } from "./domain/Gameboard.js";
import { Player } from "./domain/Player.js";
import { Ship } from "./domain/Ship.js";
import { GameController } from "./application/GameController.js";

//Crear todos los objetos necesarios en forma de Mockup y simular una partida
//Utilizar solo los metodos de domain, a través de GameController, SIN utilizar el DOM.
const playerOne = new Player("Human");
const playerTwo = new Player("CPU");

//Poner 9 barcos en cada tablero de cada jugador
const shipOnePlayerOne = new Ship(5);
const shipTwoPlayerOne = new Ship(4);
const shipThreePlayerOne = new Ship(3);
const shipFourPlayerOne = new Ship(2);
const shipFivePlayerOne = new Ship(2);
const shipSixPlayerOne = new Ship(1);
const shipSevenPlayerOne = new Ship(1);
const shipEightPlayerOne = new Ship(1);
const shipNinePlayerOne = new Ship(1);

const shipOnePlayerTwo = new Ship(5);
const shipTwoPlayerTwo = new Ship(4);
const shipThreePlayerTwo = new Ship(3);
const shipFourPlayerTwo = new Ship(2);
const shipFivePlayerTwo = new Ship(2);
const shipSixPlayerTwo = new Ship(1);
const shipSevenPlayerTwo = new Ship(1);
const shipEightPlayerTwo = new Ship(1);
const shipNinePlayerTwo = new Ship(1);

const gameControllerInstance = new GameController(playerOne, playerTwo);
gameControllerInstance.placeShip(
  playerOne,
  shipOnePlayerOne,
  8,
  4,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerOne,
  shipTwoPlayerOne,
  0,
  0,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerOne,
  shipThreePlayerOne,
  4,
  2,
  "vertical",
);
gameControllerInstance.placeShip(
  playerOne,
  shipFourPlayerOne,
  2,
  0,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerOne,
  shipFivePlayerOne,
  8,
  0,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerOne,
  shipSixPlayerOne,
  2,
  4,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerOne,
  shipSevenPlayerOne,
  5,
  4,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerOne,
  shipEightPlayerOne,
  1,
  7,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerOne,
  shipNinePlayerOne,
  6,
  6,
  "horizontal",
);

gameControllerInstance.placeShip(
  playerTwo,
  shipOnePlayerTwo,
  6,
  3,
  "horizontal",
);
gameControllerInstance.placeShip(playerTwo, shipTwoPlayerTwo, 1, 8, "vertical");
gameControllerInstance.placeShip(
  playerTwo,
  shipThreePlayerTwo,
  1,
  1,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerTwo,
  shipFourPlayerTwo,
  3,
  2,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerTwo,
  shipFivePlayerTwo,
  8,
  2,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerTwo,
  shipSixPlayerTwo,
  8,
  5,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerTwo,
  shipSevenPlayerTwo,
  8,
  8,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerTwo,
  shipEightPlayerTwo,
  4,
  5,
  "horizontal",
);
gameControllerInstance.placeShip(
  playerTwo,
  shipNinePlayerTwo,
  2,
  6,
  "horizontal",
);

//Iniciar juego
gameControllerInstance.startGame();

//Procesar los ataques dadas unas coordenadas recibidas, mockeando el DOM
gameControllerInstance.handleAttack(0, 0);
console.log(gameControllerInstance);
