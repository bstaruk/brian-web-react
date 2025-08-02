import { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import Button from 'atoms/Button';
import CodeBlock from 'molecules/CodeBlock';
import ClampPreview from 'molecules/ClampPreview';
import TextField from 'molecules/form/TextField';
import { formSchema } from './schema';
import { createClamp, defaultValues } from './utils';

function ClampCalculatorForm() {
  const [clampValue, setClampValue] = useState<string>(createClamp({}));
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      setClampValue(
        createClamp({
          minClampSize: value.minClampSize,
          maxClampSize: value.maxClampSize,
          minScreenSize: value.minScreenSize,
          maxScreenSize: value.maxScreenSize,
          remBase: value.remBase,
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
    <div className="flex flex-col gap-6">
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
            <h4>Clamp Size (rem)</h4>

            <form.Field
              name="minClampSize"
              children={(field) => (
                <TextField
                  {...{ field }}
                  label="Min"
                  type="number"
                  step={0.125}
                  valueAsNumber
                />
              )}
            />

            <form.Field
              name="maxClampSize"
              children={(field) => (
                <TextField
                  {...{ field }}
                  label="Max"
                  type="number"
                  step={0.125}
                  valueAsNumber
                />
              )}
            />

            <form.Field
              name="remBase"
              children={(field) => (
                <TextField
                  {...{ field }}
                  label="Rem Base (px)"
                  type="number"
                  step={1}
                  valueAsNumber
                />
              )}
            />
          </fieldset>

          <fieldset className="grow flex flex-col gap-2">
            <h4>Screen Size (px)</h4>

            <form.Field
              name="minScreenSize"
              children={(field) => (
                <TextField
                  {...{ field }}
                  label="Min"
                  type="number"
                  step={64}
                  valueAsNumber
                />
              )}
            />

            <form.Field
              name="maxScreenSize"
              children={(field) => (
                <TextField
                  {...{ field }}
                  label="Max"
                  type="number"
                  step={64}
                  valueAsNumber
                />
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

      <ClampPreview {...{ clampValue }} />
    </div>
  );
}

export default ClampCalculatorForm;
