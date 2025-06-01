import { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import Button from 'atoms/Button';
import ClampPreview from 'molecules/ClampPreview';
import TextField from 'molecules/form/TextField';
import { createClamp, defaultValues, formSchema } from './utils';

function ClampCalculatorForm() {
  const [clamp, setClamp] = useState<string>(
    createClamp(
      defaultValues.clampMin,
      defaultValues.clampMax,
      'rem',
      16,
      defaultValues.viewportMin,
      defaultValues.viewportMax,
      'px',
      16,
    ),
  );
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      setClamp(
        createClamp(
          value.clampMin,
          value.clampMax,
          'rem',
          16,
          value.viewportMin,
          value.viewportMax,
          'px',
          16,
        ),
      );
    },
    validators: {
      onChange: formSchema,
    },
  });

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit().catch((error) => {
            console.error('Form submission error:', error);
          });
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <fieldset className="grow flex flex-col gap-2">
            <h4>Clamp (rem)</h4>

            <form.Field
              name="clampMin"
              children={(field) => (
                <TextField
                  field={field}
                  label="Min"
                  type="number"
                  step={0.001}
                  valueAsNumber
                />
              )}
            />

            <form.Field
              name="clampMax"
              children={(field) => (
                <TextField
                  field={field}
                  label="Max"
                  type="number"
                  step={0.001}
                  valueAsNumber
                />
              )}
            />
          </fieldset>

          <fieldset className="grow flex flex-col gap-2">
            <h4>Viewport (px)</h4>

            <form.Field
              name="viewportMin"
              children={(field) => (
                <TextField
                  field={field}
                  label="Min"
                  type="number"
                  step={0.001}
                  valueAsNumber
                />
              )}
            />

            <form.Field
              name="viewportMax"
              children={(field) => (
                <TextField
                  field={field}
                  label="Max"
                  type="number"
                  step={0.001}
                  valueAsNumber
                />
              )}
            />
          </fieldset>
        </div>

        <div>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? '...' : 'Submit'}
              </Button>
            )}
          />
        </div>
      </form>

      <h6 className="font-medium bg-monster-600 shadow-xs p-4">{clamp}</h6>

      <hr />

      <ClampPreview {...{ clamp }} />
    </div>
  );
}

export default ClampCalculatorForm;
