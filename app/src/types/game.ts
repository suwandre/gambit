import { Board, Move } from './chess';

export type PlayerColor = 'white' | 'black';

/** Represents a player (may also be AI). */
export interface Player {
  /** Unique ID for multiplayer. */
  id: string;
  /** Unique username for multiplayer or display. */
  username?: string;
  color: PlayerColor;
  /** Will be false if AI. */
  isHuman: boolean;
  /** ELO rating of this player. */
  elo: number;
}

export type GameResult = 'white_win' | 'black_win' | 'draw' | 'ongoing';
export type GameStatus = 'waiting' | 'active' | 'paused' | 'finished' | 'abandoned';

/** Represents the state of a chess game in session. */
export interface GameState {
  /** Board data, including squares with pieces and those that are empty. */
  board: Board;
  /** History of moves so far. */
  moves: Move[];
  /** Data of both players in the game. */
  players: [Player, Player];
  currentTurn: PlayerColor;
  /** If a player is in check, this represents their color. */
  inCheck: PlayerColor | null;
  /** Shows the available moves for the current turn's player. */
  availableMoves: Move[];
  status: GameStatus;
  result: GameResult;
  /** Time control data of the game. */
  timeControl: TimeControl;
  /** 
   * Tracks how many individual player moves have occurred in total since the last pawn movement or capture. 
   * If 50 or more moves have occurred (i.e. `halfMoveClock` is 100 since both players need to reach 50 moves), a draw can be claimed. 
   */
  halfMoveClock: number;
}

/**
 * Represents the time control configuration of a game (all in seconds).
 */
export interface TimeControl {
  /** Initial time amount. */
  initialTime: number;
  /** Increment time per move. */
  increment: number;
  /** How much time white has left. */
  whiteTimeLeft: number;
  /** How much time black has left. */
  blackTimeLeft: number;
}