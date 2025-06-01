import { useState } from 'react';
import clsx from 'clsx';
import Button from 'atoms/Button';

interface ClampPreviewProps {
  clamp: string;
  className?: string;
}

const ClampPreview: React.FC<ClampPreviewProps> = ({ clamp, className }) => {
  const [activePreview, setActivePreview] = useState<
    'text' | 'padding' | 'margin'
  >('padding');

  return (
    <section className={clsx('flex flex-col gap-3', className)}>
      <header className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <h5>Clamp Preview:</h5>

        <ol className="flex gap-2">
          <li>
            <Button
              onClick={() => setActivePreview('padding')}
              className={clsx({ underline: activePreview === 'padding' })}
            >
              Padding
            </Button>
          </li>

          <li>
            <Button onClick={() => setActivePreview('margin')}>Margin</Button>
          </li>

          <li>
            <Button onClick={() => setActivePreview('text')}>Text</Button>
          </li>
        </ol>
      </header>

      <div className="overflow-auto border border-monster-300 rounded-xs p-4">
        {activePreview === 'text' && (
          <p style={{ fontSize: clamp }} className="whitespace-nowrap">
            Simplicity is the ultimate sophistication.
          </p>
        )}
      </div>

      <p className="text-sm">
        <strong>NOTE:</strong> For now, you'll need to resize your browser
        window to see the clamp in effect. I hope to have a way to simulate
        different browser sizes with a toggle soon(ish?).
      </p>
    </section>
  );
};

export default ClampPreview;
