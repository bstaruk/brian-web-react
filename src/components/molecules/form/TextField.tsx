import type { AnyFieldApi } from '@tanstack/react-form';
import FieldMessage from '../../atoms/form/FieldMessage';
import TextInput from '../../atoms/form/TextInput';

interface TextFieldProps {
  field: AnyFieldApi;
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({ field, label }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label className="text-sm font-medium" htmlFor={field.name}>
        {label}:
      </label>

      <TextInput
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />

      <FieldMessage {...{ field }} />
    </div>
  );
};

export default TextField;
