import { useState, type ReactNode } from 'react';
import { FaQuestion, FaEllipsisH, FaArrowLeft } from 'react-icons/fa';
import { RouterLink, LinkButton } from 'atoms/Link';
import { motion, AnimatePresence } from 'framer-motion';

interface ThingIntroProps {
  title: string;
  content: ReactNode;
}

function ThingIntro({ title, content }: ThingIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = 'thing-intro-content';
  const OpenIcon = isOpen ? FaEllipsisH : FaQuestion;

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

      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2">
        <h1>{title}</h1>

        <LinkButton
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="group shrink-0 size-8 flex items-center justify-center cursor-pointer -ml-1.5 sm:ml-0 sm:-mr-1.5 shadow-none"
        >
          <span className="sr-only">{isOpen ? 'Hide' : 'Show'} Intro</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'ellipsis' : 'question'}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.1 }}
            >
              <OpenIcon className="w-5 h-auto" />
            </motion.span>
          </AnimatePresence>
        </LinkButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={contentId}
            className="flex flex-col gap-3"
            initial={{ opacity: 0, height: 0, scale: 0.95, skewX: '-5deg' }}
            animate={{
              opacity: 1,
              height: 'auto',
              scale: 1,
              skewX: '0deg',
              transition: {
                duration: 0.25,
                ease: 'easeOut',
                opacity: { duration: 0.15, delay: 0.08 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              scale: 0.95,
              skewX: '-5deg',
              transition: {
                duration: 0.2,
                ease: 'easeIn',
                opacity: { duration: 0.12 },
              },
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default ThingIntro;
