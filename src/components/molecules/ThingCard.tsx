import React from 'react';
import { RouterLink } from 'components';

interface ThingCardProps {
  to: string;
  title: string;
  children: React.ReactNode;
}

function ThingCard({ to, title, children }: ThingCardProps) {
  return (
    <article className="relative flex flex-col gap-1.5">
      <h5>
        <RouterLink
          to={to}
          className="after:absolute after:inset-0 after:size-full"
          weight="none"
        >
          {title}
        </RouterLink>
      </h5>
      <p>{children}</p>
    </article>
  );
}

export default ThingCard;
