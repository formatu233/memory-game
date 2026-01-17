import React from 'react';

interface GameOverProps {
  score: number;
  moves: number;
  time: number;
  onRestart: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ score, moves, time, onRestart }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-darker to-dark rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl border border-white/10 animate-bounce-in">
        <h2 className="text-4xl font-bold text-secondary mb-4">🎉 完成!</h2>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-3xl font-bold text-primary">{score}</div>
            <div className="text-sm text-gray-400">最终得分</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-3">
              <div className="text-xl font-bold text-accent">{moves}</div>
              <div className="text-xs text-gray-400">步数</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3">
              <div className="text-xl font-bold text-accent">{formatTime(time)}</div>
              <div className="text-xs text-gray-400">用时</div>
            </div>
          </div>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          再玩一次
        </button>
      </div>
    </div>
  );
};