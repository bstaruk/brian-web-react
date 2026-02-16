import { type KeyboardEvent, useId, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { cn } from 'utils';

interface ToggleOption {
  id: string;
  label: string;
}

interface ToggleButtonsProps {
  options: ToggleOption[];
  activeId: string;
  onToggle: (id: string) => void;
  ariaLabel: string;
  instanceId?: string;
  className?: string;
}

export function ToggleButtons({
  options,
  activeId,
  onToggle,
  ariaLabel,
  instanceId,
  className,
}: ToggleButtonsProps) {
  const internalId = useId();
  const id = instanceId ?? internalId;
  const prefersReducedMotion = useReducedMotion();
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const currentIndex = options.findIndex((o) => o.id === activeId);
    let nextIndex: number | null = null;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (currentIndex + 1) % options.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (currentIndex - 1 + options.length) % options.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = options.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    const nextOption = options[nextIndex];
    onToggle(nextOption.id);
    buttonsRef.current[nextIndex]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex rounded-lg border border-transparent bg-sb-canvas p-1',
        'has-[:focus-visible]:border-sb-focus-ring',
        className,
      )}
    >
      {options.map((option, index) => {
        const isActive = option.id === activeId;

        return (
          <button
            key={option.id}
            ref={(el) => {
              buttonsRef.current[index] = el;
            }}
            role="tab"
            id={`${id}-tab-${option.id}`}
            aria-selected={isActive}
            aria-controls={isActive ? `${id}-panel-${option.id}` : undefined}
            tabIndex={isActive ? 0 : -1}
            onKeyDown={handleKeyDown}
            onClick={() => onToggle(option.id)}
            className={cn(
              'relative cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium',
              'outline-none',
              isActive
                ? 'text-sb-canvas'
                : 'text-sb-fg-subtle hover:text-sb-fg focus-visible:text-sb-fg',
            )}
          >
            {isActive && (
              <motion.span
                aria-hidden="true"
                layoutId={`${id}-indicator`}
                className="absolute inset-0 rounded-md bg-sb-fg-title"
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 500, damping: 35 }
                }
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
