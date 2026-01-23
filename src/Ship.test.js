import { Ship } from "./Ship.js";

describe("Ship", () => {
  describe("constructor", () => {
    test("should create a Ship instance", () => {
      const ship = new Ship(3);
      expect(ship).toBeInstanceOf(Ship);
    });

    test("should initialize with the specified length", () => {
      const ship = new Ship(4);
      expect(ship.length).toBe(4);
    });

    test("should start with 0 hits received", () => {
      const ship = new Ship(3);
      expect(ship.hitsReceived).toBe(0);
    });
  });

  describe("hit()", () => {
    test("should increment hits received by 1", () => {
      const ship = new Ship(3);

      ship.hit();

      expect(ship.hitsReceived).toBe(1);
    });

    test("should increment hits received multiple times", () => {
      const ship = new Ship(3);

      ship.hit();
      ship.hit();

      expect(ship.hitsReceived).toBe(2);
    });
  });

  describe("isSunk()", () => {
    test("should return false when no hits received", () => {
      const ship = new Ship(3);

      expect(ship.isSunk()).toBe(false);
    });

    test("should return false when hits are less than length", () => {
      const ship = new Ship(3);

      ship.hit();
      ship.hit();

      expect(ship.isSunk()).toBe(false);
    });

    test("should return true when hits equal length", () => {
      const ship = new Ship(2);

      ship.hit();
      ship.hit();

      expect(ship.isSunk()).toBe(true);
    });

    test("should return true when hits exceed length", () => {
      const ship = new Ship(2);

      ship.hit();
      ship.hit();
      ship.hit();

      expect(ship.isSunk()).toBe(true);
    });
  });
});
