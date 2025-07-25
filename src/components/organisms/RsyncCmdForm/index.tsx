import { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import Button from 'atoms/Button';
import CodeBlock from 'molecules/CodeBlock';
import TextField from 'molecules/form/TextField';
import { formSchema } from './schema';
import { createCmd, defaultValues } from './utils';

function RsyncCmdForm() {
  const [clampValue, setClampValue] = useState<string>(createCmd({}));
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      setClampValue(
        createCmd({
          src: value.src,
          dest: value.dest,
        }),
      );
    },
    listeners: {
      // Automatically update clamp value on field change
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
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit().catch((error) => {
          console.error('Form submission error:', error);
        });
      }}
      className="flex flex-col gap-4"
      noValidate
    >
      <section>
        <h5 className="sr-only">Clamp Value:</h5>
        <CodeBlock
          showCopyLink
          copyContent={clampValue}
          copyLabel="Copy clamp value"
          copySuccessLabel="Copied!"
          hideLabel
        >
          {clampValue}
        </CodeBlock>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <fieldset className="grow flex flex-col gap-2">
          <h4>Source</h4>

          <form.Field
            name="src"
            children={(field) => <TextField {...{ field }} label="Source" />}
          />
        </fieldset>

        <fieldset className="grow flex flex-col gap-2">
          <h4>Destination</h4>

          <form.Field
            name="dest"
            children={(field) => (
              <TextField {...{ field }} label="Destination" />
            )}
          />
        </fieldset>
      </div>

      <div className="sr-only">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit]) => (
            <Button type="submit" disabled={!canSubmit}>
              Submit
            </Button>
          )}
        />
      </div>
    </form>
  );
}

export default RsyncCmdForm;
