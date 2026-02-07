import { Gameboard } from "../domain/Gameboard.js";
import { Ship } from "../domain/Ship.js";

describe("Gameboard", () => {
  describe("Creating objects", () => {
    test("Should create a Gameboard object", () => {
      let gameBoardInstance = new Gameboard();
      expect(gameBoardInstance).toBeInstanceOf(Gameboard);
    });

    test("Create a board with 10 rows and 10 columns", () => {
      const gameBoardInstance = new Gameboard();
      expect(gameBoardInstance.board.length).toBe(10);
      expect(gameBoardInstance.board[0].length).toBe(10);
    });

    test("Initial values are null in all cells", () => {
      const gameBoardInstance = new Gameboard();
      const allCells = gameBoardInstance.board.flat();
      const allNulls = allCells.every((cell) => cell === null);
      expect(allNulls).toBe(true);
    });
  });

  describe("Check methods for gameboards", () => {
    test("Check if the ship is placed in coordinates (0, 0)", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstance = new Ship(5);
      expect(
        gameBoardInstance.placeShip(0, 0, shipInstance, "horizontal"),
      ).toBe(true);
    });
    test("Check if the ship can not be placed outside the gameboard cells", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstance = new Ship(5);
      expect(
        gameBoardInstance.placeShip(8, 10, shipInstance, "horizontal"),
      ).toBe(false);
    });
    test("Check if one ship can not be extended outside the gameboard", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstance = new Ship(5);
      expect(
        gameBoardInstance.placeShip(6, 6, shipInstance, "horizontal"),
      ).toBe(false);
    });
    test("Check if the ship is not placed over other ship in coordinates (0, 0)", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(5);
      const shipInstanceTwo = new Ship(3);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      expect(
        gameBoardInstance.placeShip(0, 0, shipInstanceTwo, "horizontal"),
      ).toBe(false);
    });
    test("Should return false when trying to place a ship in a cell occupied by another ship", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(4);
      const shipInstanceTwo = new Ship(3);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      expect(
        gameBoardInstance.placeShip(0, 3, shipInstanceTwo, "horizontal"),
      ).toBe(false);
    });
    test("Check if 2 ships can be placed in different coordinates", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(4);
      const shipInstanceTwo = new Ship(5);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      expect(
        gameBoardInstance.placeShip(2, 5, shipInstanceTwo, "horizontal"),
      ).toBe(true);
    });
    test("Should return false when trying to place a ship adjacent to another ship", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(4);
      const shipInstanceTwo = new Ship(5);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      expect(
        gameBoardInstance.placeShip(1, 0, shipInstanceTwo, "horizontal"),
      ).toBe(false);
    });
  });
  describe("Checking the receiveAttack method", () => {
    test("Should return the ship that was attacked", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(4);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      expect(gameBoardInstance.receiveAttack(0, 0)).toBe(shipInstanceOne);
    });
    test("Should increase the number of hits in the ship that was attacked (0 to 1)", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(4);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      gameBoardInstance.receiveAttack(0, 0);
      expect(shipInstanceOne.hitsReceived).toBe(1);
    });
    test("Should return null if the attack was not succesfull", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(4);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      expect(gameBoardInstance.receiveAttack(4, 4)).toBe(null);
    });
    test("Should return 'hit' if the game has not finished after an attack to a ship", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(4);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      expect(gameBoardInstance.processAttack(0, 0)).toBe("hit");
    });

    test("Should return 'end' if the number of ships is 0 after a successful attack", () => {
      const gameBoardInstance = new Gameboard();
      const shipInstanceOne = new Ship(4);
      gameBoardInstance.placeShip(0, 0, shipInstanceOne, "horizontal");
      gameBoardInstance.processAttack(0, 0);
      gameBoardInstance.processAttack(0, 1);
      gameBoardInstance.processAttack(0, 2);
      expect(gameBoardInstance.processAttack(0, 3)).toBe("end");
    });
  });
});
