import { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import {
  Button,
  CodeBlock,
  ColorField,
  TextField,
  ColorScalePreview,
} from 'components';
import { formSchema } from './schema';
import {
  createColorScale,
  formatColorScaleAsCss,
  defaultValues,
} from './utils';

function ColorScaleForm() {
  const [colorScaleData, setColorScaleData] = useState<Record<number, string>>(
    createColorScale({
      hex: defaultValues.hex,
    }),
  );
  const [colorScale, setColorScale] = useState<string>(
    formatColorScaleAsCss(colorScaleData, defaultValues.name),
  );
  const [colorName, setColorName] = useState<string>(defaultValues.name);

  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      const scaleData = createColorScale({
        hex: value.hex,
      });
      setColorScaleData(scaleData);
      setColorScale(formatColorScaleAsCss(scaleData, value.name));
      setColorName(value.name);
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
        <fieldset className="flex flex-col xs:flex-row gap-4">
          <h4 className="sr-only">Color Scale Configuration</h4>

          <form.Field
            name="hex"
            children={(field) => (
              <ColorField {...{ field }} label="Hex" className="flex-1" />
            )}
          />

          <form.Field
            name="name"
            children={(field) => (
              <TextField {...{ field }} label="Name" className="flex-1" />
            )}
          />
        </fieldset>

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

      <section className="flex flex-col gap-3">
        <h5 className="sr-only">Color Scale Preview:</h5>
        <ColorScalePreview colorScale={colorScaleData} colorName={colorName} />
      </section>

      <section className="flex flex-col gap-3">
        <h5 className="sr-only">Color Scale CSS:</h5>
        <CodeBlock
          showCopyLink
          copyContent={colorScale}
          copyLabel="Copy color scale"
          copySuccessLabel="Copied!"
          hideLabel
        >
          {colorScale}
        </CodeBlock>
      </section>
    </div>
  );
}

export default ColorScaleForm;
