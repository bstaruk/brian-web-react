import type { AnyFieldApi } from '@tanstack/react-form';
import clsx from 'clsx';
import FieldMessage from 'atoms/form/FieldMessage';
import Checkbox from 'atoms/form/Checkbox';

type CheckboxFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  description?: string;
  field: AnyFieldApi;
  hideLabel?: boolean;
  label: string;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  className,
  field,
  hideLabel,
  label,
  ...props
}) => {
  return (
    <div className={clsx('flex flex-col gap-0.5', className)}>
      <div className="flex items-center gap-2">
        <Checkbox
          id={field.name}
          name={field.name}
          checked={!!field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.checked)}
          {...{ hideLabel, label }}
          {...props}
        />
      </div>

      <FieldMessage {...{ field }} />
    </div>
  );
};

export default CheckboxField;
