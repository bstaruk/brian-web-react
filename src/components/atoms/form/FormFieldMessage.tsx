import type { AnyFieldApi } from '@tanstack/react-form';

interface FormFieldMessageProps {
  field: AnyFieldApi;
}

const FormFieldMessage: React.FC<FormFieldMessageProps> = ({ field }) => {
  if (!field.state.meta.isTouched || !!field.state.meta.isValid) return null;

  return (
    <p className="text-sm text-red-200">
      {field.state.meta.errors
        .map((error: { message: string }) => error.message)
        .join(', ')}
    </p>
  );
};

export default FormFieldMessage;
