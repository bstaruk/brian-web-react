import { motion, useReducedMotion } from 'motion/react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa6';
import { LuAccessibility, LuLayers, LuTerminal } from 'react-icons/lu';
import { SiNodedotjs, SiReact, SiTypescript } from 'react-icons/si';
import { NidoBinIcon, SiteLogo, StarbaseIcon } from 'atoms';
import { LinkCard, SkillCard } from 'molecules';
import { Tabs } from 'organisms';

function ProjectsAndSocialsPanel() {
  return (
    <div className="flex flex-col gap-6">
      <section aria-labelledby="projects-heading">
        <div className="mb-3 text-center">
          <h2
            id="projects-heading"
            className="mb-1 text-h4 font-display text-sb-fg-title"
          >
            Projects
          </h2>
          <p className="mx-auto max-w-[50ch] text-sm text-sb-fg-subtle">
            Things I'm building and writing about.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <li>
            <LinkCard
              href="https://starbase.dev"
              icon={StarbaseIcon}
              heading="Starbase.dev"
              description="A front-end boilerplate evolving since 2018 alongside the web itself. Currently a Claude-first stack built on Vite, TanStack Router/Query/Form, and Tailwind CSS -- with accessibility, atomic design, and developer experience at its core."
              linkText="starbase.dev"
            />
          </li>
          <li>
            <LinkCard
              href="https://nidobin.com/u/brian"
              icon={NidoBinIcon}
              heading="NidoBin.com"
              description="Carb-centric recipes, tech notes, and the occasional life update. Born as a late-2024 passion project to explore full-stack TypeScript monorepo architecture -- and an excuse to build my own indie web blog."
              linkText="nidobin.com"
            />
          </li>
        </ul>
      </section>
      <section aria-labelledby="socials-heading">
        <div className="mb-3 text-center">
          <h2
            id="socials-heading"
            className="mb-1 text-h4 font-display text-sb-fg-title"
          >
            Socials
          </h2>
          <p className="mx-auto max-w-[50ch] text-sm text-sb-fg-subtle">
            Where to find me online.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <li>
            <LinkCard
              href="https://github.com/bstaruk"
              icon={FaGithubAlt}
              heading="GitHub"
              description="Open source projects and contributions"
              linkText="github.com/bstaruk"
            />
          </li>
          <li>
            <LinkCard
              href="https://www.linkedin.com/in/brian-staruk/"
              icon={FaLinkedinIn}
              heading="LinkedIn"
              description="Professional profile and network"
              linkText="linkedin.com/in/brian-staruk"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

function MyStackPanel() {
  return (
    <section aria-labelledby="stack-heading" className="flex flex-col gap-4">
      <div className="text-center">
        <h2
          id="stack-heading"
          className="mb-1 text-h4 font-display text-sb-fg-title"
        >
          My Stack
        </h2>
        <p className="mx-auto max-w-[50ch] text-sm text-sb-fg-subtle">
          Not just competencies -- these are the technologies I&apos;ve grown my
          passion and career around. Certainly not an exhaustive list!
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li>
          <SkillCard
            icon={LuAccessibility}
            heading="Accessibility"
            description="WCAG 2.2 AA, semantic HTML, and inclusive design at the heart of every decision"
          />
        </li>
        <li>
          <SkillCard
            icon={SiTypescript}
            heading="Full-Stack TypeScript"
            description="Monorepos with end-to-end typesafety from database to UI"
          />
        </li>
        <li>
          <SkillCard
            icon={SiReact}
            heading="React Ecosystem"
            description="Vite, TanStack Router/Query/Form, and Tailwind CSS"
          />
        </li>
        <li>
          <SkillCard
            icon={SiNodedotjs}
            heading="Node.js Backend"
            description="Fastify, BullMQ, Redis, and PostgreSQL with Docker orchestration"
          />
        </li>
        <li>
          <SkillCard
            icon={LuLayers}
            heading="Design Systems"
            description="Atomic Design methodology harmonizing Figma, Storybook, and code"
          />
        </li>
        <li>
          <SkillCard
            icon={LuTerminal}
            heading="Developer Experience"
            description="Decade-long webpack veteran, now developing Claude-first with custom skills"
          />
        </li>
      </ul>
    </section>
  );
}

export function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col items-center gap-8 text-center"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: 'easeOut' }
      }
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4 text-sb-fg-title">
          <SiteLogo size={44} />
          <h1 className="font-display">Brian Staruk</h1>
        </div>
        <p className="text-h3 font-display text-sb-fg-subtle">
          Full-Stack Web Developer from{' '}
          <abbr title="Let's go Red Sox!" className="no-underline">
            Boston
          </abbr>
        </p>
        <p className="max-w-[52ch] text-base text-sb-fg">
          Software engineer and development team lead at MERGE with over 20
          years of professional experience building for the web.
        </p>
      </div>

      <Tabs
        ariaLabel="Content sections"
        className="w-full"
        tabs={[
          {
            id: 'projects-socials',
            label: 'Projects & Socials',
            content: <ProjectsAndSocialsPanel />,
          },
          {
            id: 'stack',
            label: 'My Stack',
            content: <MyStackPanel />,
          },
        ]}
      />
    </motion.div>
  );
}
