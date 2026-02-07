export class UIController {
  setupCPUBoardClickHandler(DOMBoard, gameController, boardView) {
    DOMBoard.addEventListener("click", (e) => {
      const cell = e.target;

      // VALIDACIÓN 1: ¿Es una celda?
      if (!cell.classList.contains("cell")) {
        return;
      }

      // VALIDACIÓN 2: ¿Ya fue atacada?
      if (cell.classList.contains("hit") || cell.classList.contains("miss")) {
        this._showMessage("⚠️ Ya atacaste esa posición");
        return;
      }

      const x = parseInt(cell.dataset.x);
      const y = parseInt(cell.dataset.y);

      // Ejecutar ataque (ya no necesita try-catch si validaste bien)
      gameController.handlePlayerAttack(x, y);

      // Re-renderizar
      this._updateBoards(gameController, boardView);
    });
  }

  // Método auxiliar para actualizar tableros
  _updateBoards(gameController, boardView) {
    const currentState = gameController.getCurrentGameState();

    boardView.render(
      document.querySelector("#player-board"),
      currentState["Player Board"],
      true,
    );

    boardView.render(
      document.querySelector("#computer-board"),
      currentState["CPU Board"],
      false,
    );
  }

  // Método auxiliar para mensajes
  _showMessage(text) {
    document.querySelector("#game-message").textContent = text;
  }
}
