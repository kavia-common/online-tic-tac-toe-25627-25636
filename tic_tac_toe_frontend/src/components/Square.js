import React from 'react';

// PUBLIC_INTERFACE
export default function Square({ value, onClick, isWinning, disabled }) {
  /** A single cell in the board with hover/active states and win highlight. */
  const label = value ? `Square with ${value}` : 'Empty square';
  return (
    <button
      type="button"
      className={`square ${isWinning ? 'win' : ''} ${value ? 'filled' : ''}`}
      onClick={onClick}
      aria-label={label}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
