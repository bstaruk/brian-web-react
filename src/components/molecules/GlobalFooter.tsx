import { FaGithub } from 'react-icons/fa6';
import clsx from 'clsx';
import Link from 'atoms/Link';
import { motion } from 'framer-motion';

interface GlobalFooterProps {
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 16 },
  },
};

const GlobalFooter: React.FC<GlobalFooterProps> = ({ className }) => (
  <footer className={clsx('bg-monster-600 py-4', className)}>
    <motion.div
      className="wrapper-page px-3 sm:px-5 md:px-8 flex flex-col xs:flex-row xs:items-center gap-x-4 gap-y-3 text-sm"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p className="xs:grow text-monster-200" variants={itemVariants}>
        Built in Boston. Let's go Red Sox!
      </motion.p>

      <motion.p variants={itemVariants}>
        <Link
          href="https://github.com/bstaruk/brian-web-react"
          target="_blank"
          rel="noopener noreferrer"
          variant="monster"
        >
          <span className="flex items-center gap-2">
            <span>View Source</span>
            <FaGithub className="h-5 w-auto shrink-0" />
          </span>
        </Link>
      </motion.p>
    </motion.div>
  </footer>
);

export default GlobalFooter;
