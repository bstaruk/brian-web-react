import { z } from 'zod';
import { useForm } from '@tanstack/react-form';
import Button from '../atoms/Button';
import TextField from '../molecules/form/TextField';

const userSchema = z.object({
  firstName: z.string().min(5, {
    message: 'First name cannot be less than 5 letters',
  }),
  lastName: z.string().min(3, 'Last name must be at least 3 characters'),
});

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
        children={(field) => <TextField field={field} label="First Name" />}
      />

      <form.Field
        name="lastName"
        children={(field) => <TextField field={field} label="Last Name" />}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting ? '...' : 'Submit'}
          </Button>
        )}
      />
    </form>
  );
}

export default AuthBookmarkForm;
