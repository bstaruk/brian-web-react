import { useState } from 'react';
import { z } from 'zod';
import { useForm } from '@tanstack/react-form';
import { Button, CopyLink, Link, TextField } from 'components';

const createHtpasswdBookmarkUrl = ({
  url,
  user,
  password,
}: {
  url: string;
  user: string;
  password: string;
}): string => {
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
  user: z.string().min(1, 'User is required'),
  password: z.string().min(1, 'Password is required'),
});

const defaultValues = {
  url: 'https://example.com',
  user: 'brian',
  password: 'hunter22',
};

function AuthBookmarkForm() {
  const [bookmark, setBookmark] = useState<string>(
    createHtpasswdBookmarkUrl(defaultValues),
  );
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      setBookmark(createHtpasswdBookmarkUrl(value));
    },
    listeners: {
      // Automatically update bookmark on field change
      onChange: ({ formApi }) => {
        if (formApi.state.isValid) {
          formApi.handleSubmit().catch((error) => {
            console.error('Autosave error:', error);
          });
        }
      },
      onChangeDebounceMs: 150,
    },
    validators: {
      onChange: formSchema,
    },
  });

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit().catch((error) => {
          console.error('Form submission error:', error);
        });
      }}
      className="flex flex-col gap-4"
    >
      <section className="flex flex-col gap-1">
        <h4 className="sr-only">Your bookmark:</h4>

        <p>
          <Link href={bookmark} target="_blank" rel="noopener noreferrer">
            {bookmark}
          </Link>
        </p>

        <p className="text-sm">
          <CopyLink
            content={bookmark}
            variant="monster"
            className="shrink-0"
            label="Copy Bookmark"
            successLabel="Bookmark Copied!"
            iconSize={3}
          />
        </p>
      </section>

      <fieldset className="w-full max-w-140 grow flex flex-col gap-3">
        <form.Field
          name="url"
          children={(field) => (
            <TextField field={field} label="URL" type="url" />
          )}
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <form.Field
            name="user"
            children={(field) => (
              <TextField field={field} label="User" className="grow" />
            )}
          />

          <form.Field
            name="password"
            children={(field) => (
              <TextField field={field} label="Password" className="grow" />
            )}
          />
        </div>
      </fieldset>

      <div className="sr-only">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit} className="self-start">
              {isSubmitting ? '...' : 'Update Bookmark'}
            </Button>
          )}
        />
      </div>
    </form>
  );
}

export default AuthBookmarkForm;
