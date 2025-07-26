export const defaultValues = {
  src: '/path/to/source',
  dest: '/path/to/destination',
  timestampOnly: true,
  sizeOnly: false,
  archive: false,
  verbose: false,
  humanReadable: true,
  progress: true,
  dryRun: false,
  delete: false,
  recursive: true,
  backup: false,
  update: false,
  ignoreExisting: false,
  compress: false,
  wholeFile: false,
};

/**
 * Creates an rsync command string.
 */
export const createCmd = ({
  src = defaultValues.src,
  dest = defaultValues.dest,
  timestampOnly = defaultValues.timestampOnly,
  sizeOnly = defaultValues.sizeOnly,
  archive = defaultValues.archive,
  verbose = defaultValues.verbose,
  humanReadable = defaultValues.humanReadable,
  progress = defaultValues.progress,
  dryRun = defaultValues.dryRun,
  delete: deleteFiles = defaultValues.delete,
  recursive = defaultValues.recursive,
  backup = defaultValues.backup,
  update = defaultValues.update,
  ignoreExisting = defaultValues.ignoreExisting,
  compress = defaultValues.compress,
  wholeFile = defaultValues.wholeFile,
}: {
  src?: string;
  dest?: string;
  timestampOnly?: boolean;
  sizeOnly?: boolean;
  archive?: boolean;
  verbose?: boolean;
  humanReadable?: boolean;
  progress?: boolean;
  dryRun?: boolean;
  delete?: boolean;
  recursive?: boolean;
  backup?: boolean;
  update?: boolean;
  ignoreExisting?: boolean;
  compress?: boolean;
  wholeFile?: boolean;
}): string => {
  const shortFlags = [];
  const longFlags = [];

  // Collect short flags
  if (archive) {
    shortFlags.push('a');
  }
  if (verbose) {
    shortFlags.push('v');
  }
  if (humanReadable) {
    shortFlags.push('h');
  }
  if (progress) {
    shortFlags.push('P');
  }
  if (dryRun) {
    shortFlags.push('n');
  }
  if (recursive) {
    shortFlags.push('r');
  }
  if (update) {
    shortFlags.push('u');
  }
  if (compress) {
    shortFlags.push('z');
  }
  if (wholeFile) {
    shortFlags.push('W');
  }
  if (timestampOnly) {
    shortFlags.push('t');
  }
  if (backup) {
    shortFlags.push('b');
  }

  // Collect long flags
  if (deleteFiles) {
    longFlags.push('--delete');
  }
  if (ignoreExisting) {
    longFlags.push('--ignore-existing');
  }
  if (sizeOnly) {
    longFlags.push('--size-only');
  }

  const options = [];

  // Add combined short flags if any exist
  if (shortFlags.length > 0) {
    // Sort flags alphabetically (case-insensitive) for consistent output
    const sortedFlags = shortFlags.sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase()),
    );
    options.push(`-${sortedFlags.join('')}`);
  }

  // Add long flags
  options.push(...longFlags);

  const optionsStr = options.length > 0 ? ` ${options.join(' ')}` : '';
  return `rsync${optionsStr} ${src} ${dest}`;
};
