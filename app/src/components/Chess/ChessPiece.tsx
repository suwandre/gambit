'use client';

import { Piece } from '@/types/chess';
import Image from 'next/image';

type ChessPieceComponentProps = {
  piece: Piece | null; // Piece can be null if the square is empty
  /** Size of piece in chessboard */
  size: number;
};

export const ChessPieceComponent = ({ piece, size = 40 }: ChessPieceComponentProps) => {
  if (!piece) return null;

  const pieceUrl = (): string => {
    return `/chess/${piece.type}-${piece.color}.svg`;
  };

  console.log(
    `Rendering piece: ${piece.type} ${piece.color} with URL: ${pieceUrl()}`
  );

  return (
    <Image
      src={pieceUrl()}
      alt={`${piece.type} ${piece.color}`}
      width={size}
      height={size}
      priority
      draggable
    />
  );
};
