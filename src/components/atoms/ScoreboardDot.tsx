import React from 'react';
import clsx from 'clsx';

type Size = 'md' | 'lg';
type Variant = 'green' | 'red' | 'green-on' | 'red-on';

interface ScoreboardDotProps {
  size?: Size;
  variant: Variant;
}

const variantClasses: Record<Variant, { border: string; bg: string }> = {
  green: { border: 'border-green-800', bg: 'bg-green-800' },
  'green-on': { border: 'border-green-500', bg: 'bg-green-500' },
  red: { border: 'border-red-800', bg: 'bg-red-800' },
  'red-on': { border: 'border-red-500', bg: 'bg-red-500' },
};

const sizeClasses: Record<Size, string> = {
  md: 'size-4',
  lg: 'size-6',
};

const ScoreboardDot: React.FC<ScoreboardDotProps> = ({
  size = 'md',
  variant,
}) => {
  const { border, bg } = variantClasses[variant];

  return (
    <div
      className={clsx(
        'rounded-full border-1 relative overflow-hidden',
        sizeClasses[size],
        border,
        bg,
        'shadow-inner shadow-black/30',
      )}
    >
      {/* Simulated glass highlight */}
      <div
        className={clsx(
          'absolute top-0 left-0 w-full h-full rounded-full pointer-events-none',
          'bg-white/10',
          'bg-gradient-to-br from-white/30 to-transparent',
        )}
      />

      {/* Inner glow for "on" variants */}
      {variant.endsWith('-on') && (
        <div
          className={clsx(
            'absolute inset-0 rounded-full',
            'shadow-[0_0_6px_3px_rgba(0,0,0,0.5)]',
            {
              'shadow-green-400/70': variant.startsWith('green'),
              'shadow-red-400/70': variant.startsWith('red'),
            },
          )}
        />
      )}
    </div>
  );
};

export default ScoreboardDot;
