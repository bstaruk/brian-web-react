import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import clsx from 'clsx';
import { Link } from 'components';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  className?: string;
}

interface SocialLink {
  href: string;
  label: string;
  title: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/bstaruk',
    label: 'GitHub',
    title: 'My GitHub Profile',
    icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/brian-staruk/',
    label: 'LinkedIn',
    title: 'My LinkedIn Profile',
    icon: FaLinkedin,
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => (
  <motion.ul
    className={clsx('flex gap-4', className)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    variants={listVariants}
  >
    {socialLinks.map(({ href, label, title, icon: Icon }) => (
      <motion.li key={label} variants={itemVariants}>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="monster"
          className="flex"
          title={title}
        >
          <Icon className="shrink-0 h-9 w-auto" />
          <span className="sr-only">{label}</span>
        </Link>
      </motion.li>
    ))}
  </motion.ul>
);

export default SocialLinks;
