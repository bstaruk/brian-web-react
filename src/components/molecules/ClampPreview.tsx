import { useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Button from 'atoms/Button';

interface ClampPreviewProps {
  clampValue: string;
  className?: string;
}

type PreviewType = 'text' | 'padding' | 'margin';

const previewOptions: { type: PreviewType; label: string }[] = [
  { type: 'padding', label: 'Padding' },
  { type: 'margin', label: 'Margin' },
  { type: 'text', label: 'Text' },
];

const ClampPreview: React.FC<ClampPreviewProps> = ({
  clampValue,
  className,
}) => {
  const [activePreview, setActivePreview] = useState<PreviewType>('padding');

  const previewContent: Record<PreviewType, ReactNode> = {
    padding: (
      <div
        style={{ padding: clampValue }}
        className="bg-monster-600 rounded shadow-sm"
      >
        The padding preview shows how the clamp value affects the padding of
        this box. Resize your browser window to see the effect in action.
      </div>
    ),
    margin: (
      <div className="overflow-auto border-2 border-monster-400 rounded shadow-sm p-4">
        <p>Margin preview coming soon!</p>
      </div>
    ),
    text: (
      <div className="overflow-auto border-2 border-monster-400 rounded shadow-sm p-4">
        <p style={{ fontSize: clampValue }} className="whitespace-nowrap">
          Simplicity is the ultimate sophistication.
        </p>
      </div>
    ),
  };

  return (
    <div className={clsx('flex flex-col gap-6', className)}>
      <section className="flex flex-col gap-2">
        <h5>Clamp Value:</h5>
        <p className="font-medium border-2 border-monster-400 rounded p-4">
          {clampValue}
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <header className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <h5>Clamp Preview:</h5>
          <ol className="flex gap-2">
            {previewOptions.map(({ type, label }) => (
              <li key={type}>
                <Button
                  onClick={() => setActivePreview(type)}
                  className={clsx({ underline: activePreview === type })}
                >
                  {label}
                </Button>
              </li>
            ))}
          </ol>
        </header>

        {previewContent[activePreview]}

        <p className="text-sm">
          <strong>NOTE:</strong> For now, you'll need to resize your browser
          window to see the clamp in effect. I hope to have a way of simulating
          different browser sizes soon(ish?).
        </p>
      </section>
    </div>
  );
};

export default ClampPreview;
