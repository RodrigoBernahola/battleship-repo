import { Gameboard } from "./Gameboard.js";
import { Ship } from "./Ship.js";

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
        gameBoardInstance.placeShip(6, 5, shipInstance, "horizontal"),
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
});
