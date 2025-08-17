import { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import { Button, CodeBlock, TextField } from 'components';
import { formSchema } from './schema';
import { createColorScale, defaultValues } from './utils';

function ColorScaleForm() {
  const [colorScale, setColorScale] = useState<string>(
    createColorScale(defaultValues),
  );
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      setColorScale(
        createColorScale({
          colorName: value.colorName,
          hex: value.hex,
          position: value.position,
        }),
      );
    },
    listeners: {
      // Automatically update color scale on field change
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
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
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
            copyContent={colorScale}
            copyLabel="Copy clamp value"
            copySuccessLabel="Copied!"
            hideLabel
          >
            {colorScale}
          </CodeBlock>
        </section>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <fieldset className="grow flex flex-col gap-2">
            <h4>Clamp Size (rem)</h4>

            <form.Field
              name="colorName"
              children={(field) => (
                <TextField {...{ field }} label="Color Name" type="string" />
              )}
            />

            <form.Field
              name="hex"
              children={(field) => (
                <TextField {...{ field }} label="Hex" type="string" />
              )}
            />

            <form.Field
              name="position"
              children={(field) => (
                <TextField
                  {...{ field }}
                  label="Position"
                  type="number"
                  step={50}
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
    </div>
  );
}

export default ColorScaleForm;
