export interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  moves: number;
  matches: number;
  time: number;
  gameStarted: boolean;
  gameCompleted: boolean;
}