export class BoardView {
  initialize(DOMElement) {
    DOMElement.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.setAttribute("data-x", i);
        div.setAttribute("data-y", j);
        DOMElement.appendChild(div);
      }
    }
  }

  _getArrayOfStrings(ArrayOfObjectOfShips) {
    const result = [];

    ArrayOfObjectOfShips.forEach((element) => {
      console.log(element);
      result.push(`${element.x}, ${element.y}`);
    });

    return result;
  }

  _cleanCellClass(cell) {
    cell.classList.remove("ship");
    cell.classList.remove("miss");
    cell.classList.remove("hit");
  }

  render(DOMContainer, dataObject, infoFlag) {
    let arrayOfStrings;
    const divCells = Array.from(DOMContainer.children);
    if (infoFlag) {
      arrayOfStrings = this._getArrayOfStrings(dataObject.ships);
      console.log(arrayOfStrings);
    }
    divCells.forEach((cell) => {
      this._cleanCellClass(cell);
      if (dataObject.hits.includes(`${cell.dataset.x}, ${cell.dataset.y}`)) {
        cell.classList.add("hit");
      } else if (
        dataObject.misses.includes(`${cell.dataset.x}, ${cell.dataset.y}`)
      ) {
        cell.classList.add("miss");
      } else if (
        infoFlag &&
        arrayOfStrings.includes(`${cell.dataset.x}, ${cell.dataset.y}`)
      ) {
        cell.classList.add("ship");
      }
    });
  }
}
