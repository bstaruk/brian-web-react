import type { AnyFieldApi } from '@tanstack/react-form';

interface FieldMessageProps {
  field: AnyFieldApi;
}

const FieldMessage: React.FC<FieldMessageProps> = ({ field }) => {
  if (!field.state.meta.isTouched || !!field.state.meta.isValid) return null;

  return (
    <p className="text-sm text-red-50">
      {field.state.meta.errors.map((error) => error.message).join(', ')}
    </p>
  );
};

export default FieldMessage;
