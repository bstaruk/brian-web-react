import { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import Button from 'atoms/Button';
import CodeBlock from 'molecules/CodeBlock';
import TextField from 'molecules/form/TextField';
import CheckboxField from 'molecules/form/CheckboxField';
import SelectField from 'molecules/form/SelectField';
import { formSchema } from './schema';
import { createCmd, defaultValues } from './utils';

function RsyncCmdForm() {
  const [clampValue, setClampValue] = useState<string>(createCmd({}));
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      setClampValue(
        createCmd({
          srcType: value.srcType,
          src: value.src,
          srcPort: value.srcPort,
          srcUsername: value.srcUsername,
          srcHostname: value.srcHostname,
          destType: value.destType,
          dest: value.dest,
          destPort: value.destPort,
          destUsername: value.destUsername,
          destHostname: value.destHostname,
          timestampOnly: value.timestampOnly,
          sizeOnly: value.sizeOnly,
          archive: value.archive,
          verbose: value.verbose,
          humanReadable: value.humanReadable,
          progress: value.progress,
          dryRun: value.dryRun,
          delete: value.delete,
          recursive: value.recursive,
          backup: value.backup,
          update: value.update,
          ignoreExisting: value.ignoreExisting,
          compress: value.compress,
          wholeFile: value.wholeFile,
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
      onChange: ({ value }) => {
        try {
          formSchema.parse(value);
          return undefined;
        } catch (error) {
          if (error instanceof z.ZodError) {
            return error.format();
          }
          return { form: 'Validation error' };
        }
      },
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
            name="srcType"
            children={(field) => (
              <SelectField
                {...{ field }}
                label="Source Type"
                hideLabel
                options={[
                  { value: 'local', label: 'Local' },
                  { value: 'remote', label: 'Remote' },
                ]}
                placeholder="Select source type"
              />
            )}
          />

          {/* Mutual exclusivity: if source becomes remote, make dest local */}
          <form.Subscribe
            selector={(state) => state.values.srcType}
            children={(srcType) => {
              if ((srcType as string) === 'remote') {
                const currentDestType = form.getFieldValue('destType');
                if ((currentDestType as string) === 'remote') {
                  setTimeout(() => form.setFieldValue('destType', 'local'), 0);
                }
              }
              return null;
            }}
          />

          <form.Field
            name="src"
            children={(field) => (
              <TextField {...{ field }} label="Source Path" hideLabel />
            )}
          />

          <form.Subscribe
            selector={(state) => state.values.srcType}
            children={(srcType) =>
              (srcType as string) === 'remote' && (
                <>
                  <form.Field
                    name="srcUsername"
                    children={(field) => (
                      <TextField
                        {...{ field }}
                        label="Source Username"
                        hideLabel
                        placeholder="Username"
                      />
                    )}
                  />

                  <form.Field
                    name="srcHostname"
                    children={(field) => (
                      <TextField
                        {...{ field }}
                        label="Source Hostname"
                        hideLabel
                        placeholder="Hostname"
                      />
                    )}
                  />

                  <form.Field
                    name="srcPort"
                    children={(field) => (
                      <TextField
                        {...{ field }}
                        label="Source Port"
                        hideLabel
                        placeholder="Port (optional)"
                        type="number"
                        min="1"
                        max="65535"
                      />
                    )}
                  />
                </>
              )
            }
          />
        </fieldset>

        <fieldset className="grow flex flex-col gap-2">
          <h4>Destination</h4>

          <form.Field
            name="destType"
            children={(field) => (
              <SelectField
                {...{ field }}
                label="Destination Type"
                hideLabel
                options={[
                  { value: 'local', label: 'Local' },
                  { value: 'remote', label: 'Remote' },
                ]}
                placeholder="Select destination type"
              />
            )}
          />

          {/* Mutual exclusivity: if dest becomes remote, make source local */}
          <form.Subscribe
            selector={(state) => state.values.destType}
            children={(destType) => {
              if ((destType as string) === 'remote') {
                const currentSrcType = form.getFieldValue('srcType');
                if ((currentSrcType as string) === 'remote') {
                  setTimeout(() => form.setFieldValue('srcType', 'local'), 0);
                }
              }
              return null;
            }}
          />

          <form.Field
            name="dest"
            children={(field) => (
              <TextField {...{ field }} label="Destination Path" hideLabel />
            )}
          />

          <form.Subscribe
            selector={(state) => state.values.destType}
            children={(destType) =>
              (destType as string) === 'remote' && (
                <>
                  <form.Field
                    name="destUsername"
                    children={(field) => (
                      <TextField
                        {...{ field }}
                        label="Destination Username"
                        hideLabel
                        placeholder="Username"
                      />
                    )}
                  />

                  <form.Field
                    name="destHostname"
                    children={(field) => (
                      <TextField
                        {...{ field }}
                        label="Destination Hostname"
                        hideLabel
                        placeholder="Hostname"
                      />
                    )}
                  />

                  <form.Field
                    name="destPort"
                    children={(field) => (
                      <TextField
                        {...{ field }}
                        label="Destination Port"
                        hideLabel
                        placeholder="Port (optional)"
                        type="number"
                        min="1"
                        max="65535"
                      />
                    )}
                  />
                </>
              )
            }
          />
        </fieldset>
      </div>

      <fieldset className="flex flex-col gap-2">
        <h4>General Options</h4>

        <form.Field
          name="dryRun"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Dry run (-n)"
              description="Preview what would be transferred without actually copying files. Essential for testing before running the real sync."
            />
          )}
        />

        <form.Field
          name="archive"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Archive mode (-a)"
              description="Preserve file permissions, timestamps, symbolic links, and ownership. This is the most common option for backing up files."
            />
          )}
        />

        <form.Field
          name="recursive"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Recursive (-r)"
              description="Copy directories and their contents recursively. Required when syncing folder structures."
            />
          )}
        />

        <form.Field
          name="delete"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Delete extraneous files (--delete)"
              description="Delete files from destination that don't exist in source. Use with caution as this permanently removes files."
            />
          )}
        />

        <form.Field
          name="backup"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Make backups (-b)"
              description="Create backup copies of files that would be overwritten. Backups are saved with a tilde (~) suffix by default."
            />
          )}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <h4>Display Options</h4>

        <form.Field
          name="verbose"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Verbose (-v)"
              description="Show detailed information about each file being transferred. Useful for monitoring progress and debugging."
            />
          )}
        />

        <form.Field
          name="humanReadable"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Human readable (-h)"
              description="Output numbers in a human-readable format with units (K, M, G). Makes file sizes easier to read."
            />
          )}
        />

        <form.Field
          name="progress"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Progress (-P)"
              description="Show transfer progress and keep partial files on interruption. Combines --progress and --partial for resumable transfers."
            />
          )}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <h4>File Comparison</h4>

        <form.Field
          name="sizeOnly"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Size only (--size-only)"
              description="Skip files that match in size, ignoring modification times. Faster but less reliable than timestamp comparison."
            />
          )}
        />

        <form.Field
          name="timestampOnly"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Preserve timestamps only (-t)"
              description="Only preserve file modification times without other metadata. Useful when you don't need full archive mode."
            />
          )}
        />

        <form.Field
          name="update"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Update (-u)"
              description="Skip files that are newer on the destination than the source. Prevents overwriting newer files."
            />
          )}
        />

        <form.Field
          name="ignoreExisting"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Ignore existing (--ignore-existing)"
              description="Skip all files that already exist on the destination. Only copies new files."
            />
          )}
        />
      </fieldset>

      <fieldset className="flex flex-col gap-2">
        <h4>Performance</h4>

        <form.Field
          name="compress"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Compress (-z)"
              description="Compress file data during transfer to reduce bandwidth usage. Most beneficial for slow network connections."
            />
          )}
        />

        <form.Field
          name="wholeFile"
          children={(field) => (
            <CheckboxField
              {...{ field }}
              label="Whole file (-W)"
              description="Copy entire files instead of using delta-transfer algorithm. Faster for local transfers or when files are mostly different."
            />
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
  );
}

export default RsyncCmdForm;
