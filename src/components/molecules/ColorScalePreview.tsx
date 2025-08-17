import clsx from 'clsx';

interface ColorScalePreviewProps {
  colorScale: Record<number, string>;
  colorName: string;
  className?: string;
  highlightHex?: string;
}

function ColorScalePreview({
  colorScale,
  colorName,
  className,
  highlightHex,
}: ColorScalePreviewProps) {
  const baseColorName = colorName.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      {Object.entries(colorScale).map(([position, hex]) => (
        <div key={position} className="flex items-center gap-2">
          {/* Color Swatch */}
          <div
            className="w-5 h-5 rounded-xs border border-stone-300 shrink-0 shadow-xs"
            style={{ backgroundColor: hex }}
            aria-label={`Color swatch for ${baseColorName}-${position}`}
          />

          {/* CSS Variable Info */}
          <div className="flex flex-col gap-1 min-w-0">
            <code
              className={clsx(
                'truncate',
                highlightHex && hex.toLowerCase() === highlightHex.toLowerCase()
                  ? 'text-white'
                  : 'text-monster-200',
              )}
            >
              --color-{baseColorName}-{position}: {hex};
            </code>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorScalePreview;
