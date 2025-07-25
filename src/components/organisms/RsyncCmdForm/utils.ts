export const defaultValues = {
  src: '/path/to/source',
  dest: '/path/to/destination',
};

/**
 * Creates an rsync command string.
 */
export const createCmd = ({
  src = defaultValues.src,
  dest = defaultValues.dest,
}: {
  src?: string;
  dest?: string;
}): string => {
  return `rsync ${src} ${dest}`;
};
