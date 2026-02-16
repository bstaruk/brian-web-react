import { motion, useReducedMotion } from 'motion/react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa6';
import { LuNotebookPen, LuRocket } from 'react-icons/lu';
import {
  SiLighthouse,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { LinkCard, SkillCard } from 'molecules';
import { Tabs } from 'organisms';

function ProjectsAndSocialsPanel() {
  return (
    <div className="flex flex-col gap-6">
      <section aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-3 text-h4 font-display text-sb-fg-title"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LinkCard
            href="https://starbase.dev"
            icon={LuRocket}
            heading="Starbase"
            description="Web DX boilerplate for React"
            linkText="starbase.dev"
          />
          <LinkCard
            href="https://nidobin.com/u/brian"
            icon={LuNotebookPen}
            heading="Blog"
            description="Writing about web development"
            linkText="nidobin.com"
          />
        </div>
      </section>
      <section aria-labelledby="socials-heading">
        <h2
          id="socials-heading"
          className="mb-3 text-h4 font-display text-sb-fg-title"
        >
          Socials
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <LinkCard
            href="https://github.com/bstaruk"
            icon={FaGithubAlt}
            heading="GitHub"
            description="Open source projects and contributions"
            linkText="github.com/bstaruk"
          />
          <LinkCard
            href="https://www.linkedin.com/in/brian-staruk/"
            icon={FaLinkedinIn}
            heading="LinkedIn"
            description="Professional profile and network"
            linkText="linkedin.com/in/brian-staruk"
          />
        </div>
      </section>
    </div>
  );
}

function MyStackPanel() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-sb-fg-subtle">
        Not just competencies — these are the technologies I reach for by
        choice, backed by years of hands-on depth.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SkillCard
          icon={SiTypescript}
          heading="TypeScript"
          description="Primary language for frontend and backend"
        />
        <SkillCard
          icon={SiReact}
          heading="React"
          description="Component-driven UI development"
        />
        <SkillCard
          icon={SiNodedotjs}
          heading="Node.js"
          description="Server-side runtime and tooling"
        />
        <SkillCard
          icon={SiTailwindcss}
          heading="CSS / Tailwind"
          description="Responsive, utility-first styling"
        />
        <SkillCard
          icon={SiTerraform}
          heading="Cloud & DevOps"
          description="AWS, CI/CD, and infrastructure"
        />
        <SkillCard
          icon={SiLighthouse}
          heading="Web Performance"
          description="Core Web Vitals and optimization"
        />
      </div>
    </div>
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
        <h1 className="font-display text-sb-fg-title">Brian Staruk</h1>
        <p className="text-h3 font-display text-sb-fg-subtle">
          Full-Stack Web Developer from Boston
        </p>
      </div>

      <p className="max-w-[52ch] text-base text-sb-fg">
        Software engineer and development team lead at MERGE with over 20 years
        of professional experience building for the web.
      </p>

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
