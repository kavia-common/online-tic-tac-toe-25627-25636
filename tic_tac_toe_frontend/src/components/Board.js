import React from 'react';
import Square from './Square';

// PUBLIC_INTERFACE
export default function Board({ squares, onSquareClick, winningLine = [], disabled = false }) {
  /** Renders the 3x3 board, highlights the winning line, and forwards click events. */
  function renderSquare(i) {
    const isWinning = winningLine.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
        isWinning={isWinning}
        disabled={disabled || squares[i] !== null}
      />
    );
  }

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      <div className="board-row" role="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row" role="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row" role="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
