export const defaultValues = {
  srcType: 'local' as const,
  src: '/path/to/source',
  srcPort: '',
  srcUsername: '',
  srcHostname: '',
  destType: 'local' as const,
  dest: '/path/to/destination',
  destPort: '',
  destUsername: '',
  destHostname: '',
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
  srcType = defaultValues.srcType,
  src = defaultValues.src,
  srcPort = defaultValues.srcPort,
  srcUsername = defaultValues.srcUsername,
  srcHostname = defaultValues.srcHostname,
  destType = defaultValues.destType,
  dest = defaultValues.dest,
  destPort = defaultValues.destPort,
  destUsername = defaultValues.destUsername,
  destHostname = defaultValues.destHostname,
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
  srcType?: 'local' | 'remote';
  src?: string;
  srcPort?: string | number | undefined;
  srcUsername?: string;
  srcHostname?: string;
  destType?: 'local' | 'remote';
  dest?: string;
  destPort?: string | number | undefined;
  destUsername?: string;
  destHostname?: string;
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

  // Handle SSH ports - rsync can only handle one SSH connection at a time
  // So we need to determine which connection (source or dest) is remote and use that port
  let sshPort: number | undefined;

  if (srcType === 'remote' && srcPort) {
    sshPort = typeof srcPort === 'string' ? parseInt(srcPort, 10) : srcPort;
  } else if (destType === 'remote' && destPort) {
    sshPort = typeof destPort === 'string' ? parseInt(destPort, 10) : destPort;
  }

  if (sshPort && !isNaN(sshPort)) {
    options.push(`-e "ssh -p ${sshPort}"`);
  }

  // Construct source path
  let sourcePath = src;
  if (srcType === 'remote' && srcUsername && srcHostname) {
    sourcePath = `${srcUsername}@${srcHostname}:${src}`;
  }

  // Construct destination path
  let destinationPath = dest;
  if (destType === 'remote' && destUsername && destHostname) {
    destinationPath = `${destUsername}@${destHostname}:${dest}`;
  }

  const optionsStr = options.length > 0 ? ` ${options.join(' ')}` : '';
  return `rsync${optionsStr} ${sourcePath} ${destinationPath}`;
};
