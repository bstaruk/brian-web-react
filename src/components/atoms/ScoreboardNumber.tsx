import React from 'react';
import clsx from 'clsx';

interface ScoreboardNumberProps {
  value: number;
}

const ScoreboardNumber: React.FC<ScoreboardNumberProps> = ({ value }) => {
  const display = String(value).padStart(2, '0'); // Ensure at least 2 digits

  return (
    <div className="bg-monster-950 text-yellow-400 border border-yellow-700 rounded-sm inline-flex leading-none">
      <div
        className={clsx(
          'relative p-2',
          'before:content-[""] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(255,255,255,0.7)_25%,_transparent_26%)] before:bg-size-[0.25rem_0.25rem] before:opacity-80 p-1 text-[1.5rem] flex gap-1.5',
        )}
      >
        {display.split('').map((char, i) => (
          <span key={i} className="relative z-10">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScoreboardNumber;
