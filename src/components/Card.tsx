import React from 'react';
import { Card as CardType } from '../types';

interface CardProps {
  card: CardType;
  onClick: () => void;
  index: number;
}

export const Card: React.FC<CardProps> = ({ card, onClick, index }) => {
  return (
    <button
      onClick={onClick}
      disabled={card.isFlipped || card.isMatched}
      className={`
        aspect-square rounded-xl cursor-pointer transition-all duration-300 transform
        ${card.isFlipped || card.isMatched ? 'bg-white' : 'bg-gradient-to-br from-primary to-accent'}
        ${card.isFlipped ? 'animate-flip' : ''}
        ${card.isMatched ? 'opacity-50' : 'hover:scale-105 active:scale-95'}
        shadow-lg hover:shadow-2xl
      `}
      style={{
        perspective: '1000px',
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <div
        className={`
          w-full h-full flex items-center justify-center text-4xl md:text-5xl
          ${card.isFlipped || card.isMatched ? 'animate-bounce-in' : ''}
        `}
      >
        {card.isFlipped || card.isMatched ? card.emoji : '?'}
      </div>
    </button>
  );
};