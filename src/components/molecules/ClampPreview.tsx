import { useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Button from 'atoms/Button';

interface ClampPreviewProps {
  clampValue: string;
  className?: string;
}

type PreviewType = 'text' | 'padding' | 'gap';

const previewOptions: { type: PreviewType; label: string }[] = [
  { type: 'padding', label: 'Padding' },
  { type: 'gap', label: 'Gap' },
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
        The <strong>padding preview</strong> shows how the clamp value affects
        the padding of this box. Resize your browser window to see the effect in
        action.
      </div>
    ),
    gap: (
      <div
        style={{ gap: clampValue }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      >
        {[...Array(8).keys()].map((i) => (
          <div
            key={i}
            className="bg-monster-600 text-monster-100 text-h4 rounded shadow-sm aspect-square flex items-center justify-center"
          >
            {i + 1}
          </div>
        ))}
      </div>
    ),
    text: (
      <div
        style={{ fontSize: clampValue }}
        className="p-5 bg-monster-600 rounded shadow-sm"
      >
        The <strong>text preview</strong> shows how the clamp value affects the
        text size of this text. Resize your browser window to see the effect in
        action.
      </div>
    ),
  };

  return (
    <div className={clsx('flex flex-col gap-6', className)}>
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
      </section>
    </div>
  );
};

export default ClampPreview;
