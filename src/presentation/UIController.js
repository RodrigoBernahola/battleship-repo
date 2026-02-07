export class UIController {
  constructor() {
    this.isProcessing = false; // Flag para evitar clicks durante procesamiento
  }

  setupCPUBoardClickHandler(DOMBoard, gameController, boardView) {
    DOMBoard.addEventListener("click", (e) => {
      const cell = e.target;

      // Validación: ¿Se está procesando un turno?
      if (this.isProcessing) {
        return;
      }

      // Validación: ¿Es una celda?
      if (!cell.classList.contains("cell")) {
        return;
      }

      // Validación: ¿Ya fue atacada?
      if (cell.classList.contains("hit") || cell.classList.contains("miss")) {
        this._showMessage("⚠️ Ya atacaste esa posición");
        return;
      }

      this.isProcessing = true; // Bloquear clicks

      const x = parseInt(cell.dataset.x);
      const y = parseInt(cell.dataset.y);
      const result = gameController.handlePlayerAttack(x, y);

      // Actualizar tableros inmediatamente
      this._updateBoards(gameController, boardView);

      if (result === "miss") {
        this._showMessage("Fallaste. Turno de la CPU...");
        gameController.switchTurns();

        // Esperar antes de que ataque la CPU
        window.setTimeout(() => {
          this.executeCPUTurn(gameController, boardView);
        }, 800);
      } else if (result === "hit") {
        this._showMessage("¡Impacto! Sigue tu turno");
        this.isProcessing = false; // Desbloquear para que siga jugando
      } else if (result === "end") {
        this._showMessage("🎉 ¡GANASTE EL JUEGO!");
        this.disableBoard(document.querySelector("#computer-board"));
        this.isProcessing = false;
      }
    });
  }

  executeCPUTurn(gameController, boardView) {
    const result = gameController.handleCPUAttack();

    this._updateBoards(gameController, boardView);

    if (result === "miss") {
      gameController.switchTurns();
      this._showMessage("CPU falló. ¡Tu turno!");
      this.isProcessing = false;
    } else if (result === "hit") {
      this._showMessage("💥 ¡La CPU te impactó! Sigue atacando...");

      window.setTimeout(() => {
        this.executeCPUTurn(gameController, boardView);
      }, 1000);
    } else if (result === "end") {
      this._showMessage("💀 DERROTA - La CPU ganó el juego");
      this.disableBoard(document.querySelector("#computer-board"));
      this.isProcessing = false;
    }
  }

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

  _showMessage(text) {
    document.querySelector("#game-message").textContent = text;
  }

  setupNewGameButton(buttonElement) {
    buttonElement.addEventListener("click", () => {
      window.location.reload();
    });
  }

  disableBoard(DOMBoard) {
    DOMBoard.style.pointerEvents = "none";
    DOMBoard.style.opacity = "0.6";
  }
}
