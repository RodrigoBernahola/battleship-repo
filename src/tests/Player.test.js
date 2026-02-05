import { Player } from "../domain/Player.js";
import { Gameboard } from "../domain/Gameboard.js";

describe("Player", () => {
  describe("Constructor", () => {
    test("Should create player instance", () => {
      const playerOne = new Player("Pepe");
      expect(playerOne).toBeInstanceOf(Player);
    });
    test("Should create player instance with name 'Pepe'", () => {
      const playerOne = new Player("Pepe");
      expect(playerOne.name).toBe("Pepe");
    });
    test("Should create a player instance with a Gameboard property", () => {
      const playerOne = new Player("Pepe");
      expect(playerOne.gameBoard).toBeInstanceOf(Gameboard);
    });
  });
});
