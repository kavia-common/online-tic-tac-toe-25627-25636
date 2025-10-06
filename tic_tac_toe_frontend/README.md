# Ocean Professional Tic Tac Toe (React)

A modern, responsive 3x3 Tic Tac Toe game built with React, styled using the Ocean Professional theme (blue & amber accents).

## Features

- Centered card layout with a 3x3 grid board
- Two-player local play with alternating X/O turns
- Winner detection with highlighted winning line and draw detection
- Status area showing current player, winner, or draw
- Reset/New Game button that clears the board and state
- Responsive layout for mobile and desktop
- Zero external services or environment variables

## Quick Start

In the project directory:

```bash
npm install
npm start
```

Then open http://localhost:3000

## Project Structure

- src/components/Game.js — Game state and controls
- src/components/Board.js — 3x3 board layout
- src/components/Square.js — Individual cell
- src/styles/theme.css — Theme variables (Ocean Professional)
- src/styles/app.css — App layout and component styles

## Customization

You can adjust theme colors in `src/styles/theme.css`:

```css
:root {
  --ocean-primary: #2563EB;
  --ocean-secondary: #F59E0B;
  --ocean-success: #F59E0B;
  --ocean-error: #EF4444;
  --ocean-bg: #f9fafb;
  --ocean-surface: #ffffff;
  --ocean-text: #111827;
}
```

## Notes

- Built on create-react-app (react-scripts) and runs on port 3000 by default.
- No environment variables are needed.
