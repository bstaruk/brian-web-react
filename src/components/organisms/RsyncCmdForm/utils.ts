export const defaultValues = {
  src: '/path/to/source',
  dest: '/path/to/destination',
  timestamponly: false,
};

/**
 * Creates an rsync command string.
 */
export const createCmd = ({
  src = defaultValues.src,
  dest = defaultValues.dest,
  timestamponly = defaultValues.timestamponly,
}: {
  src?: string;
  dest?: string;
  timestamponly?: boolean;
}): string => {
  const options = [];

  if (timestamponly) {
    options.push('--times');
  }

  const optionsStr = options.length > 0 ? ` ${options.join(' ')}` : '';
  return `rsync${optionsStr} ${src} ${dest}`;
};
