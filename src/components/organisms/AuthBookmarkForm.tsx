import { useState } from 'react';
import { z } from 'zod';
import { useForm } from '@tanstack/react-form';
import Button from '../atoms/Button';
import TextField from '../molecules/form/TextField';

const createHtpasswdBookmarkUrl = (
  url: string,
  user: string,
  password: string,
): string => {
  try {
    const parsed = new URL(url);
    parsed.username = user;
    parsed.password = password;
    return parsed.toString();
  } catch {
    throw new Error('Invalid URL provided');
  }
};

const formSchema = z.object({
  url: z.string().url('Invalid URL'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

const defaultValues = {
  url: 'https://example.com',
  username: 'admin',
  password: 'hunter22',
};

function AuthBookmarkForm() {
  const [bookmark, setBookmark] = useState<string>(
    createHtpasswdBookmarkUrl(
      defaultValues.url,
      defaultValues.username,
      defaultValues.password,
    ),
  );
  const form = useForm({
    defaultValues: {
      url: '',
      username: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      setBookmark(
        createHtpasswdBookmarkUrl(value.url, value.username, value.password),
      );
    },
    validators: {
      onChange: formSchema,
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
        name="url"
        children={(field) => (
          <TextField
            field={field}
            label="URL"
            placeholder={defaultValues.url}
          />
        )}
      />

      <form.Field
        name="username"
        children={(field) => (
          <TextField
            field={field}
            label="Username"
            placeholder={defaultValues.username}
          />
        )}
      />

      <form.Field
        name="password"
        children={(field) => (
          <TextField
            field={field}
            label="Password"
            placeholder={defaultValues.password}
          />
        )}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting ? '...' : 'Submit'}
          </Button>
        )}
      />

      <p className="font-medium">{bookmark}</p>
    </form>
  );
}

export default AuthBookmarkForm;
