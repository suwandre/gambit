'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ChessSquareComponent } from './ChessSquare';
import { Board, Piece, Position } from '@/types/chess';

type ChessboardComponentProps = {
  board: Board;
  onSquareClick: (position: Position) => void; // Callback when a square is clicked
  squareSize?: number; // Size of each square in pixels
};

export const ChessboardComponent = ({
  board,
  onSquareClick,
  squareSize = 60, // Default square size
}: ChessboardComponentProps) => {
  const renderBoard = () => {
    const squares = [];
    // Horizontal squares
    const files = [0, 1, 2, 3, 4, 5, 6, 7];
    // Vertical squares (top left will be [0, 7]; bottom right will be [7, 0])
    const ranks = [7, 6, 5, 4, 3, 2, 1, 0];

    for (const rank of ranks) {
      for (const file of files) {
        const piece = board[rank][file]; // Get the piece at this square
        const position: Position = { rank, file };
        const isLight = (rank + file) % 2 === 1;

        squares.push(
          <ChessSquareComponent 
            key={`${rank}-${file}`}
            position={position}
            piece={piece}
            isLight={isLight}
            squareSize={squareSize}
            onClick={() => onSquareClick(position)}
          />
        )
      }
    }

    return squares;
  }

  return (
    <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: `repeat(8, ${squareSize}px)`,
      gridTemplateRows: `repeat(8, ${squareSize}px)`,
      borderRadius: '8px',
      boxShadow: 2,
      width: `${squareSize * 8}px`,
      height: `${squareSize * 8}px`,
      overflow: 'hidden',
      userSelect: 'none',
      p: 0,
      m: 0,
    }}
  >
    {renderBoard()}
  </Box>
  );
};
