import React from 'react';
import clsx from 'clsx';

type Size = 'md' | 'lg';
type Variant = 'green' | 'red' | 'green-on' | 'red-on';

interface ScoreboardDotProps {
  size?: Size;
  variant: Variant;
}

const variantClasses: Record<Variant, { border: string; bg: string }> = {
  green: { border: 'border-green-900', bg: 'bg-green-800' },
  'green-on': { border: 'border-green-600', bg: 'bg-green-500' },
  red: { border: 'border-red-900', bg: 'bg-red-800' },
  'red-on': { border: 'border-red-600', bg: 'bg-red-500' },
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
      className={clsx('rounded-full border-2', sizeClasses[size], border, bg)}
    />
  );
};

export default ScoreboardDot;
