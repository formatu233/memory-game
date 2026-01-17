import React, { useState, useEffect, useCallback } from 'react';
import { Card } from './Card';
import { GameStats } from './GameStats';
import { GameOver } from './GameOver';
import type { GameState } from '../types';

const EMOJIS = ['🎮', '🎨', '🎭', '🎪', '🎯', '🎲', '🎸', '🎹'];

export const MemoryGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    moves: 0,
    matches: 0,
    time: 0,
    gameStarted: false,
    gameCompleted: false,
  });
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const initializeGame = useCallback(() => {
    const shuffledEmojis = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, id) => ({
        id,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));

    setGameState({
      cards: shuffledEmojis,
      moves: 0,
      matches: 0,
      time: 0,
      gameStarted: false,
      gameCompleted: false,
    });
    setFlippedCards([]);
    setIsChecking(false);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    let timer: number;
    if (gameState.gameStarted && !gameState.gameCompleted) {
      timer = window.setInterval(() => {
        setGameState((prev: GameState) => ({ ...prev, time: prev.time + 1 }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState.gameStarted, gameState.gameCompleted]);

  const handleCardClick = (index: number) => {
    const cards = gameState.cards;
    const card = cards[index];

    if (
      isChecking ||
      card.isFlipped ||
      card.isMatched ||
      flippedCards.length >= 2
    ) {
      return;
    }

    if (!gameState.gameStarted) {
      setGameState((prev: GameState) => ({ ...prev, gameStarted: true }));
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    const newCards = [...cards];
    newCards[index] = { ...card, isFlipped: true };
    setGameState((prev: GameState) => ({ ...prev, cards: newCards }));

    if (newFlippedCards.length === 2) {
      setIsChecking(true);
      setGameState((prev: GameState) => ({ ...prev, moves: prev.moves + 1 }));

      const [firstIndex, secondIndex] = newFlippedCards;
      const firstCard = newCards[firstIndex];
      const secondCard = newCards[secondIndex];

      if (firstCard.emoji === secondCard.emoji) {
        setTimeout(() => {
          const matchedCards = [...newCards];
          matchedCards[firstIndex] = { ...firstCard, isMatched: true };
          matchedCards[secondIndex] = { ...secondCard, isMatched: true };
          setGameState((prev: GameState) => ({
            ...prev,
            cards: matchedCards,
            matches: prev.matches + 1,
          }));
          setFlippedCards([]);
          setIsChecking(false);
        }, 500);
      } else {
        setTimeout(() => {
          const unflippedCards = [...newCards];
          unflippedCards[firstIndex] = { ...firstCard, isFlipped: false };
          unflippedCards[secondIndex] = { ...secondCard, isFlipped: false };
          setGameState((prev: GameState) => ({ ...prev, cards: unflippedCards }));
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  const calculateScore = () => {
    const baseScore = 1000;
    const timePenalty = gameState.time * 5;
    const movesPenalty = gameState.moves * 10;
    return Math.max(0, baseScore - timePenalty - movesPenalty);
  };

  useEffect(() => {
    if (gameState.matches === EMOJIS.length && !gameState.gameCompleted) {
      setGameState((prev: GameState) => ({ ...prev, gameCompleted: true }));
    }
  }, [gameState.matches, gameState.gameCompleted]);

  const getGridCols = () => {
    const width = window.innerWidth;
    if (width < 400) return 'grid-cols-4';
    if (width < 600) return 'grid-cols-4';
    return 'grid-cols-4';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-darker text-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            🧠 记忆游戏
          </h1>
          <p className="text-gray-400 text-sm md:text-base">翻开卡片，找出相同的配对</p>
        </header>

        <GameStats
          moves={gameState.moves}
          matches={gameState.matches}
          time={gameState.time}
          totalPairs={EMOJIS.length}
        />

        <div className={`grid ${getGridCols()} gap-3 md:gap-4 mb-6`}>
          {gameState.cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              onClick={() => handleCardClick(index)}
              index={index}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={initializeGame}
            className="bg-gradient-to-r from-secondary to-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            🔄 重新开始
          </button>
        </div>

        {gameState.gameCompleted && (
          <GameOver
            score={calculateScore()}
            moves={gameState.moves}
            time={gameState.time}
            onRestart={initializeGame}
          />
        )}
      </div>
    </div>
  );
};