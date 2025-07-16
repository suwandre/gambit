export type PieceType = 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king';
export type PromotablePieceType = 'queen' | 'rook' | 'bishop' | 'knight';
export type PieceColor = 'white' | 'black';

/** Represents the data of a chess piece. */
export interface Piece {
  /** Unique ID used for tracking the piece on renders. */
  id: string,
  type: PieceType,
  color: PieceColor,
  /** Whether this piece has moved. Used to check for castling, first pawn move, etc. */
  hasMoved: boolean,
}

/** Represents the position of a chess piece. */
export interface Position {
  /** Horizontal position (indexed 0 - 7 but represented as 1 - 8). */
  rank: number;
  /** Vertical position (indexed 0 - 7 but represented as a - h). */
  file: number;
}

/** Represents a chessboard square. May contain a piece or be empty. */
export type Square = Piece | null;

/**
 * Represents a chessboard. Contains 8x8 squares.
 */
export type Board = Square[][];

/**
 * Represents the data of a move on the chessboard.
 */
export interface Move {
  from: Position;
  to: Position;
  piece: Piece;
  /** If an opponent's piece exists in `to`, that piece will be captured and logged here. */
  capturedPiece?: Piece;
  /**
   * If a pawn has moved to the edge of the opponent's board, that pawn will be promoted to a promotable piece type. 
   * That will be logged here. 
   */
  promotion?: PromotablePieceType;
  isEnPassant: boolean;
  isCastling: boolean;
}