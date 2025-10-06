import React, { useMemo, useState } from 'react';
import Board from './Board';

/**
 * calculateWinner checks all winning combinations and returns:
 *  - { winner: 'X'|'O', line: [a,b,c] } when a winner exists
 *  - null otherwise
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

// PUBLIC_INTERFACE
export default function Game() {
  /**
   * PUBLIC_INTERFACE
   * Game encapsulates the Tic Tac Toe game state and UI:
   * - Squares array for board state
   * - Turn management (xIsNext)
   * - Winner and draw detection
   * - Reset/new game control
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result = useMemo(() => calculateWinner(squares), [squares]);
  const winner = result?.winner || null;
  const winningLine = result?.line || [];
  const isBoardFull = squares.every((sq) => sq !== null);
  const isDraw = !winner && isBoardFull;

  const currentPlayer = xIsNext ? 'X' : 'O';

  function handleSquareClick(index) {
    if (squares[index] || winner) return; // ignore if occupied or game over
    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);
    setXIsNext((prev) => !prev);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="game-wrapper">
      <div className="card">
        <header className="card-header">
          <h1 className="title">Tic Tac Toe</h1>
          <p className="subtitle">Ocean Professional edition</p>
        </header>

        <section className="status-section" aria-live="polite">
          {!winner && !isDraw && (
            <div className="player-indicator">
              <span className={`badge ${currentPlayer === 'X' ? 'active' : ''}`}>
                Player X
              </span>
              <span className="vs">vs</span>
              <span className={`badge ${currentPlayer === 'O' ? 'active' : ''}`}>
                Player O
              </span>
            </div>
          )}

          {winner && (
            <div className="status-message win">
              <span className="status-dot success" />
              Winner: {winner}
            </div>
          )}

          {!winner && isDraw && (
            <div className="status-message draw">
              <span className="status-dot warn" />
              Draw game
            </div>
          )}

          {!winner && !isDraw && (
            <div className="status-message turn">
              <span className="status-dot primary" />
              Turn: {currentPlayer}
            </div>
          )}
        </section>

        <Board
          squares={squares}
          onSquareClick={handleSquareClick}
          winningLine={winningLine}
          disabled={!!winner || isDraw}
        />

        <footer className="controls">
          <button className="btn btn-primary" onClick={handleReset} aria-label="Reset game">
            Reset
          </button>
        </footer>
      </div>
    </div>
  );
}
