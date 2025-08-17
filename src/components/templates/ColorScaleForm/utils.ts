export const defaultValues = {
  colorName: 'monster',
  hex: '#53776b',
  position: 500,
};

/**
 * Creates a Tailwind CSS color scale
 */
export const createColorScale = ({
  colorName = defaultValues.colorName,
  hex = defaultValues.hex,
  position = defaultValues.position,
}: {
  colorName: string;
  hex: string;
  position: number;
}): string => {
  return `--color-${colorName.replace(' ', '-').toLowerCase()}-${position} = '${hex}';`;
};
