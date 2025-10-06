import React from 'react';
import './App.css';
import './styles/theme.css';
import './styles/app.css';
import Game from './components/Game';

// PUBLIC_INTERFACE
function App() {
  /** Root app component that renders the Tic Tac Toe game with Ocean Professional theme. */
  return (
    <div className="ocean-app">
      <Game />
    </div>
  );
}

export default App;
