import { useState } from 'react';
import { z } from 'zod';
import { useForm } from '@tanstack/react-form';
import Button from 'atoms/Button';
import TextField from 'molecules/form/TextField';

type Unit = 'rem' | 'px';

const toFixed = (value: number, decimals: number = 3): number =>
  parseFloat(value.toFixed(decimals));

const convertToRem = (size: number, unit: Unit, remBase: number): number =>
  unit === 'rem' ? size : size / remBase;

const createClamp = (
  minFontSize: number,
  maxFontSize: number,
  fontSizeUnit: Unit,
  fontSizeRemBase: number,
  minScreenSize: number,
  maxScreenSize: number,
  screenSizeUnit: Unit,
  screenSizeRemBase: number,
): string => {
  const minFontSizeRem = convertToRem(
    minFontSize,
    fontSizeUnit,
    fontSizeRemBase,
  );
  const maxFontSizeRem = convertToRem(
    maxFontSize,
    fontSizeUnit,
    fontSizeRemBase,
  );
  const minScreenSizeRem = convertToRem(
    minScreenSize,
    screenSizeUnit,
    screenSizeRemBase,
  );
  const maxScreenSizeRem = convertToRem(
    maxScreenSize,
    screenSizeUnit,
    screenSizeRemBase,
  );

  const slope =
    (maxFontSizeRem - minFontSizeRem) / (maxScreenSizeRem - minScreenSizeRem);
  const intercept = minFontSizeRem - slope * minScreenSizeRem;

  return `clamp(${toFixed(minFontSizeRem)}rem, ${toFixed(intercept)}rem + ${toFixed(slope * 100)}vw, ${toFixed(maxFontSizeRem)}rem)`;
};

const formSchema = z.object({
  clampMin: z.number().min(0, 'Value must be a number'),
  clampMax: z.number().min(0, 'Value must be a number'),
  viewportMin: z.number().min(0, 'Value must be a number'),
  viewportMax: z.number().min(0, 'Value must be a number'),
});

const defaultValues = {
  clampMin: 1,
  clampMax: 2,
  viewportMin: 420,
  viewportMax: 1440,
};

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

      <div className="flex flex-col gap-3">
        <h5>Clamp Preview:</h5>

        <p style={{ fontSize: clamp }}>
          Simplicity is the ultimate sophistication.
        </p>
      </div>
    </div>
  );
}

export default ClampCalculatorForm;
