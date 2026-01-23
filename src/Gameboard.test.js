import { Gameboard } from "./Gameboard.js";

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
  });

  describe("Initial State", () => {
    test("Initial values are null in all cells", () => {
      const gameBoardInstance = new Gameboard();
      const allCells = gameBoardInstance.board.flat();
      const allNulls = allCells.every((cell) => cell === null);
      expect(allNulls).toBe(true);
    });
  });
});
