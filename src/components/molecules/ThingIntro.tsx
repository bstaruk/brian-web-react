import { useState, type ReactNode } from 'react';
import { FaQuestion, FaAngleDoubleUp, FaArrowLeft } from 'react-icons/fa';
import clsx from 'clsx';
import { LinkButton, RouterLink } from 'components';
import { motion, AnimatePresence } from 'framer-motion';

interface ThingIntroProps {
  title: string;
  content: ReactNode;
}

function ThingIntro({ title, content }: ThingIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = 'thing-intro-content';
  const OpenIcon = isOpen ? FaAngleDoubleUp : FaQuestion;

  return (
    <header className="flex flex-col gap-4">
      <RouterLink
        to="/things"
        className="text-sm flex items-center gap-1.5"
        variant="monster"
      >
        <FaArrowLeft className="h-3 w-auto" />
        Back to Things List
      </RouterLink>

      <div className="flex flex-col gap-1.5 sm:gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1>{title}</h1>

          <LinkButton
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={contentId}
            className={clsx(
              'group shrink-0 border size-8 flex items-center justify-center cursor-pointer sm:ml-0 rounded-sm transition-all',
              {
                'border-transparent': !isOpen,
                'bg-monster-700/50 border-monster-500 shadow-xs': isOpen,
              },
            )}
          >
            <span className="sr-only">{isOpen ? 'Hide' : 'Show'} Intro</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'ellipsis' : 'question'}
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.1 }}
              >
                <OpenIcon className="w-5 h-auto" />
              </motion.span>
            </AnimatePresence>
          </LinkButton>
        </div>

        <AnimatePresence>
          {isOpen && (
            <div
              id={contentId}
              className="bg-monster-700/50 border border-monster-500 shadow-xs rounded-sm p-4 flex flex-col gap-3"
            >
              {content}
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default ThingIntro;
