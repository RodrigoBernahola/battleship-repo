import { Ship } from "./Ship.js";
export class Gameboard {
  constructor() {
    this.board = [];
    this.missedCoordinates = [];
    this.hitCoordinates = [];
    this.shipsRemaining = 0;
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = null;
      }
    }
  }

  _checkForCoordinates(xCoordinate, yCoordinate, ship, direction) {
    if (this.board[xCoordinate][yCoordinate] !== null) return false;
    let limit = ship.length;
    if (xCoordinate + limit > 10 || yCoordinate + limit > 10) return false;

    if (direction === "vertical") {
      for (let i = xCoordinate; limit > 0; i++) {
        if (this.board[i][yCoordinate] !== null) return false;
        limit--;
      }
    } else {
      for (let i = yCoordinate; limit > 0; i++) {
        if (this.board[xCoordinate][i] !== null) return false;
        limit--;
      }
    }

    return true;
  }

  _placeWaterCellsAroundShipPlaced(xCoordinate, yCoordinate, limit, direction) {
    if (direction === "horizontal") {
      for (let i = yCoordinate; limit > 0; i++) {
        if (xCoordinate - 1 >= 0 && i - 1 >= 0) {
          if (this.board[xCoordinate - 1][i - 1] === null)
            this.board[xCoordinate - 1][i - 1] = "Water";
        }
        if (xCoordinate - 1 >= 0) {
          if (this.board[xCoordinate - 1][i] === null)
            this.board[xCoordinate - 1][i] = "Water";
        }
        if (xCoordinate - 1 >= 0 && 9 >= i + 1 >= 0) {
          if (this.board[xCoordinate - 1][i + 1] === null)
            this.board[xCoordinate - 1][i + 1] = "Water";
        }
        if (i - 1 >= 0) {
          if (this.board[xCoordinate][i - 1] === null) {
            this.board[xCoordinate][i - 1] = "Water";
          }
        }
        if (9 >= i + 1) {
          if (this.board[xCoordinate][i + 1] === null) {
            this.board[xCoordinate][i + 1] = "Water";
          }
        }
        if (9 >= xCoordinate + 1 && i - 1 >= 0) {
          if (this.board[xCoordinate + 1][i - 1] === null) {
            this.board[xCoordinate + 1][i - 1] = "Water";
          }
        }
        if (9 >= xCoordinate + 1) {
          if (this.board[xCoordinate + 1][i] === null) {
            this.board[xCoordinate + 1][i] = "Water";
          }
        }
        if (9 >= xCoordinate + 1 && 9 >= i + 1) {
          if (this.board[xCoordinate + 1][i + 1] === null) {
            this.board[xCoordinate + 1][i + 1] = "Water";
          }
        }
        limit--;
      }
    } else {
      for (let i = xCoordinate; limit > 0; i++) {
        if (i - 1 >= 0 && yCoordinate - 1 >= 0) {
          if (this.board[i - 1][yCoordinate - 1] === null) {
            this.board[i - 1][yCoordinate - 1] = "Water";
          }
        }
        if (i - 1 >= 0) {
          if (this.board[i - 1][yCoordinate] === null) {
            this.board[i - 1][yCoordinate] = "Water";
          }
        }
        if (i - 1 >= 0 && 9 >= yCoordinate + 1) {
          if (this.board[i - 1][yCoordinate + 1] === null) {
            this.board[i - 1][yCoordinate + 1] = "Water";
          }
        }
        if (yCoordinate - 1 >= 0) {
          if (this.board[i][yCoordinate - 1] === null) {
            this.board[i][yCoordinate - 1] = "Water";
          }
        }
        if (yCoordinate + 1 <= 9) {
          if (this.board[i][yCoordinate + 1] === null) {
            this.board[i][yCoordinate + 1] = "Water";
          }
        }
        if (9 >= i + 1 && yCoordinate - 1 >= 0) {
          if (this.board[i + 1][yCoordinate - 1] === null) {
            this.board[i + 1][yCoordinate - 1] = "Water";
          }
        }
        if (i + 1 <= 9) {
          if (this.board[i + 1][yCoordinate] === null) {
            this.board[i + 1][yCoordinate] = "Water";
          }
        }
        if (9 >= i + 1 && 9 >= yCoordinate + 1) {
          if (this.board[i + 1][yCoordinate + 1] === null) {
            this.board[i + 1][yCoordinate + 1] = "Water";
          }
        }
        limit--;
      }
    }
  }
  placeShip(xCoordinate, yCoordinate, ship, direction) {
    if (this._checkForCoordinates(xCoordinate, yCoordinate, ship, direction)) {
      let limit = ship.length;
      if (direction === "vertical") {
        for (let i = xCoordinate; limit > 0; i++) {
          this.board[i][yCoordinate] = ship;
          limit--;
        }
      } else {
        for (let i = yCoordinate; limit > 0; i++) {
          this.board[xCoordinate][i] = ship;
          limit--;
        }
      }
      this._placeWaterCellsAroundShipPlaced(
        xCoordinate,
        yCoordinate,
        ship.length,
        direction,
      );
      this.shipsRemaining++;
      return true;
    } else {
      return false;
    }
  }
  receiveAttack(xCoordinate, yCoordinate) {
    const targetCell = this.board[xCoordinate][yCoordinate];

    if (targetCell instanceof Ship) {
      targetCell.hit();
      this.hitCoordinates.push(`${xCoordinate}, ${yCoordinate}`);
    }

    this.missedCoordinates.push(`${xCoordinate}, ${yCoordinate}`);
    return targetCell;
  }
  processAttack(xCoordinate, yCoordinate) {
    const resultOfAttack = this.receiveAttack(xCoordinate, yCoordinate);

    if (resultOfAttack !== null) {
      if (resultOfAttack.isSunk()) {
        this.shipsRemaining--;
      }
      if (this.shipsRemaining === 0) {
        return true;
      }
    }

    return false;
  }
}
