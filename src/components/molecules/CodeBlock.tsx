import CopyLink from 'atoms/CopyLink';

interface CodeBlockProps {
  children: React.ReactNode;
  showCopyLink?: boolean;
  copyContent?: string;
  copyLabel?: string;
  copySuccessLabel?: string;
  hideLabel?: boolean;
  className?: string;
}

function CodeBlock({
  children,
  showCopyLink = false,
  copyContent,
  copyLabel = 'Copy code',
  copySuccessLabel = 'Copied!',
  hideLabel,
  className = '',
}: CodeBlockProps) {
  return (
    <div
      className={`flex items-start border-3 p-3 border-monster-400 rounded ${className}`}
    >
      <code className="grow">{children}</code>
      {showCopyLink && copyContent && (
        <CopyLink
          content={copyContent}
          className="mb-2"
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
