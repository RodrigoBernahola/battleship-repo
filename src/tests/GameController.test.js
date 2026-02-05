import { GameController } from "../application/GameController.js";
import { Player } from "../domain/Player.js";

describe("Game Controller", () => {
  describe("Constructor", () => {
    test("Should create a GameController instance", () => {
      const gameControllerInstance = new GameController();
      expect(gameControllerInstance).toBeInstanceOf(GameController);
    });
  });
  describe("Methods for controller", () => {
    // test("Should return the result of one attack", () => {
    //   const playerOne = new Player("Human");
    //   const playerTwo = new Player("CPU");
    //   const gameControllerInstance = new GameController(playerOne, playerTwo);
    //   playerOne.gameBoard.placeShip();
    // });
  });
});
