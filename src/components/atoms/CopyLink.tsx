import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { LinkButton, type LinkButtonProps } from './Link';

interface CopyLinkProps extends LinkButtonProps {
  onClick?: never;
  content: string;
  hideIcon?: boolean;
  hideLabel?: boolean;
  iconSize?: 3 | 4;
  label?: string;
  successLabel?: string;
}

const CopyLink = forwardRef<HTMLButtonElement, CopyLinkProps>(
  (
    {
      className,
      hideIcon,
      hideLabel,
      iconSize = 4,
      content,
      label = '(Copy)',
      successLabel = '(Copied!)',
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    };

    const onClick = () => {
      void handleCopy();
    };

    const Icon = copied ? FaCheck : FaCopy;

    return (
      <LinkButton
        {...props}
        {...{ onClick, ref }}
        className={clsx(
          'inline-flex items-center gap-1.5 !cursor-copy',
          className,
        )}
        aria-label="Copy to clipboard"
      >
        {!hideIcon && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? 'check' : 'copy'}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.1 }}
              className="flex items-center justify-center"
            >
              <Icon
                className={clsx('w-auto shrink-0', {
                  'h-3': iconSize === 3,
                  'h-4': iconSize === 4,
                })}
              />
            </motion.span>
          </AnimatePresence>
        )}

        <span className={clsx({ 'sr-only': hideLabel })}>
          {copied && !!successLabel ? successLabel : label}
        </span>
      </LinkButton>
    );
  },
);

CopyLink.displayName = 'CopyLink';
export default CopyLink;
