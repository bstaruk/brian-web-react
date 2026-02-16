import { type ReactNode, useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { cn } from 'utils';
import { ToggleButtons } from 'molecules/ToggleButtons';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  ariaLabel: string;
  className?: string;
}

export function Tabs({ tabs, ariaLabel, className }: TabsProps) {
  const instanceId = useId();
  const [activeId, setActiveId] = useState(tabs[0].id);
  const [direction, setDirection] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  const activeIndex = tabs.findIndex((t) => t.id === activeId);
  const activeTab = tabs[activeIndex];

  function handleToggle(id: string) {
    const nextIndex = tabs.findIndex((t) => t.id === id);
    setDirection(nextIndex >= activeIndex ? 1 : -1);
    setActiveId(id);
  }

  const slideDistance = prefersReducedMotion ? 0 : 20;

  return (
    <div className={cn('flex flex-col items-center gap-6', className)}>
      <ToggleButtons
        options={tabs.map((t) => ({ id: t.id, label: t.label }))}
        activeId={activeId}
        onToggle={handleToggle}
        ariaLabel={ariaLabel}
        instanceId={instanceId}
      />
      <motion.div
        layout
        className="w-full overflow-hidden"
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: 'spring', stiffness: 400, damping: 35 }
        }
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeId}
            role="tabpanel"
            id={`${instanceId}-panel-${activeId}`}
            aria-labelledby={`${instanceId}-tab-${activeId}`}
            tabIndex={0}
            className="outline-none"
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, x: direction * slideDistance }
            }
            animate={{ opacity: 1, x: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, x: -direction * slideDistance }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.2, ease: 'easeInOut' }
            }
          >
            {activeTab.content}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
