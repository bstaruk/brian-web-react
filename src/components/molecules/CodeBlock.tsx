import { CopyLink } from 'components';
import clsx from 'clsx';

interface CodeBlockProps {
  children: React.ReactNode;
  showCopyLink?: boolean;
  copyContent?: string;
  copyLabel?: string;
  copySuccessLabel?: string;
  hideLabel?: boolean;
  className?: string;
  singleLine?: boolean;
}

function CodeBlock({
  children,
  showCopyLink = false,
  copyContent,
  copyLabel = 'Copy code',
  copySuccessLabel = 'Copied!',
  hideLabel,
  className = '',
  singleLine = false,
}: CodeBlockProps) {
  return (
    <div
      className={clsx(
        'flex items-start gap-3 border-3 p-3 border-monster-400 rounded',
        className,
      )}
    >
      <code
        className={clsx('grow', {
          'whitespace-nowrap overflow-x-auto': singleLine,
        })}
      >
        {children}
      </code>

      {showCopyLink && copyContent && (
        <CopyLink
          content={copyContent}
          className="shrink-0"
          label={copyLabel}
          successLabel={copySuccessLabel}
          hideLabel={hideLabel}
          variant="monster"
        />
      )}
    </div>
  );
}

export default CodeBlock;
