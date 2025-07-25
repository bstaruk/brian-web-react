import { z } from 'zod';

export const pathName = z
  .string({
    required_error: 'Path is required',
    invalid_type_error: 'Path must be a string',
  })
  .min(1, { message: 'Path cannot be empty' })
  .refine(
    (path) => {
      // Check for invalid characters that could cause issues
      // eslint-disable-next-line no-control-regex
      const invalidChars = /[\x00-\x1f\x7f]/;
      return !invalidChars.test(path);
    },
    {
      message: 'Path contains invalid control characters',
    },
  )
  .refine(
    (path) => {
      // Local absolute path (starts with /)
      const absolutePath = /^\/[^:]*$/;

      // Local relative path (doesn't start with /, doesn't contain :, or starts with ./ or ../)
      const relativePath = /^(?:\.\.?\/|[^/:])[^:]*$/;

      // Remote SSH path (user@host:/path or host:/path)
      const sshPath = /^(?:[a-zA-Z0-9._-]+@)?[a-zA-Z0-9._-]+:[^:]*$/;

      // Remote rsync daemon path (rsync://host/module/path)
      const rsyncDaemonPath = /^rsync:\/\/[a-zA-Z0-9._-]+\/[^:]*$/;

      return (
        absolutePath.test(path) ||
        relativePath.test(path) ||
        sshPath.test(path) ||
        rsyncDaemonPath.test(path)
      );
    },
    {
      message:
        'Invalid path format. Must be a local path, SSH path (user@host:/path), or rsync daemon path (rsync://host/module/path)',
    },
  );

export const formSchema = z.object({
  src: pathName,
  dest: pathName,
  timestamponly: z.boolean().default(false),
});
