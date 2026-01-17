import React from 'react';

interface GameStatsProps {
  moves: number;
  matches: number;
  time: number;
  totalPairs: number;
}

export const GameStats: React.FC<GameStatsProps> = ({ moves, matches, time, totalPairs }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
        <div className="text-2xl font-bold text-primary">{moves}</div>
        <div className="text-sm text-gray-300">步数</div>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
        <div className="text-2xl font-bold text-secondary">{matches}/{totalPairs}</div>
        <div className="text-sm text-gray-300">配对</div>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
        <div className="text-2xl font-bold text-accent">{formatTime(time)}</div>
        <div className="text-sm text-gray-300">时间</div>
      </div>
    </div>
  );
};