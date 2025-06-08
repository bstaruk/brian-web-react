import { useState, type ReactNode } from 'react';
import { FaQuestion, FaEllipsisH, FaArrowLeft } from 'react-icons/fa';
import { RouterLink } from 'atoms/Link';

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

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="group shrink-0 size-8 flex items-center justify-center cursor-pointer -ml-1.5 sm:ml-0 sm:-mr-1.5 shadow-none"
        >
          <span className="sr-only">{isOpen ? 'Hide' : 'Show'} Intro</span>
          <OpenIcon className="text-marathon-400 group-hover:text-marathon-200 transition-colors w-5 h-auto" />
        </button>
      </div>

      {isOpen && (
        <div id={contentId} className="flex flex-col gap-3">
          {content}
        </div>
      )}
    </header>
  );
}

export default ThingIntro;
