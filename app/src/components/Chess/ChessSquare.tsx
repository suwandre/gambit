'use client';

import { Piece, Position } from '@/types/chess';
import Box from '@mui/material/Box';
import { ChessPieceComponent } from './ChessPiece';

type ChessSquareComponentProps = {
  position: Position;
  piece: Piece | null; // Piece can be null if the square is empty
  isLight: boolean;
  // isSelected: boolean;
  onClick: () => void;
  squareSize?: number; // Optional size for the square, default is 40px
};

/** Renders the square in a chessboard */
export const ChessSquareComponent = ({
  position,
  piece,
  isLight,
  // isSelected,
  onClick,
  squareSize = 40, // Default square size
}: ChessSquareComponentProps) => {
  return (
    <Box
      sx={{
        width: squareSize,
        height: squareSize,
        backgroundColor: isLight ? '#EBECD0' : '#779556',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.1s',
        fontSize: 12,
        userSelect: 'none',
        '@media (hover: hover)': {
          ':hover': {
            filter: 'brightness(0.9)',
          },
        },
      }}
      onClick={onClick}
      data-coords={`${position.file},${position.rank}`}
    >
      <ChessPieceComponent piece={piece} size={squareSize * 0.8} />
    </Box>
  );
};
