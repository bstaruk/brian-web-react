import { type ComponentType } from 'react';
import { cn } from 'utils';
import { Card } from 'atoms';

interface SkillCardProps {
  icon: ComponentType<{ size?: number }>;
  heading: string;
  description: string;
  className?: string;
}

export function SkillCard({
  icon: Icon,
  heading,
  description,
  className,
}: SkillCardProps) {
  return (
    <Card className={cn('bg-sb-surface-tint', className)}>
      <div className="flex flex-col gap-1 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <Icon size={20} aria-hidden="true" />
          <h3 className="line-clamp-1 text-base font-display font-semibold text-sb-fg-title">
            {heading}
          </h3>
        </div>
        <p className="text-sm text-sb-fg-subtle">{description}</p>
      </div>
    </Card>
  );
}
