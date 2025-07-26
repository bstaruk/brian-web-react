import React from 'react';
import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, ...props }, ref) => {
    return (
      <div className={clsx('relative', className)}>
        <select
          className="peer w-full p-2 pr-8 bg-monster-400/75 text-monster-50 border border-monster-400 focus:border-monster-200 rounded-xs font-mono text-mono outline-0 appearance-none cursor-pointer"
          {...{ ref }}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <FaChevronDown
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-monster-200 peer-focus:text-monster-50 pointer-events-none"
          size={12}
        />
      </div>
    );
  },
);

Select.displayName = 'Select';
export default Select;
