import { z } from 'zod';
import { useForm } from '@tanstack/react-form';
import type { AnyFieldApi } from '@tanstack/react-form';

const userSchema = z.object({
  firstName: z.string().min(5, {
    message: 'First name cannot be less than 5 letters',
  }),
  lastName: z.string().min(3, 'Last name must be at least 3 characters'),
});

// TODO: Turn this into form/TextInput atom & form/TextField molecule
function TextField({ field, label }: { field: AnyFieldApi; label: string }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <label htmlFor={field.name}>{label}</label>
      <input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        className="p-1.5 bg-monster-400 rounded-xs shadow-xs text-sm"
      />
      <FieldInfo field={field} />
    </div>
  );
}

// TODO: Turn this into form/FieldInfo atom
function FieldInfo({ field }: { field: AnyFieldApi }) {
  if (!field.state.meta.isTouched || !!field.state.meta.isValid) return null;

  return (
    <p className="text-red-200">
      {field.state.meta.errors.map((error) => error.message).join(', ')}
    </p>
  );
}

function AuthBookmarkForm() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
    validators: {
      onChange: userSchema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="flex flex-col items-start gap-4"
    >
      <form.Field
        name="firstName"
        children={(field) => <TextField field={field} label="First Name:" />}
      />

      <form.Field
        name="lastName"
        children={(field) => <TextField field={field} label="Last Name:" />}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <button
            type="submit"
            disabled={!canSubmit}
            className="cursor-pointer p-2 bg-monster-400 text-monster-50 text-sm font-medium uppercase text-shadow-xs shadow-xs"
          >
            {isSubmitting ? '...' : 'Submit'}
          </button>
        )}
      />
    </form>
  );
}

export default AuthBookmarkForm;
