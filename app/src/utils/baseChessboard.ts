import { Board, Piece } from '@/types/chess';

/**
 * Generates a base chessboard with initial piece positions.
 */
export function generateBaseChessboard(): Board {
  const board = Array.from({ length: 8 }, () => Array(8).fill(null));
  const backRow: Piece['type'][] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

  // White pieces
  for (let file = 0; file < 8; file++) board[0][file] = { type: backRow[file], color: 'white' };
  for (let file = 0; file < 8; file++) board[1][file] = { type: 'pawn', color: 'white' };

  // Black pieces
  for (let file = 0; file < 8; file++) board[6][file] = { type: 'pawn', color: 'black' };
  for (let file = 0; file < 8; file++) board[7][file] = { type: backRow[file], color: 'black' };
  return board;
}
