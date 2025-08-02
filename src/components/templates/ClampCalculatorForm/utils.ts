export const defaultValues = {
  minClampSize: 1,
  maxClampSize: 2,
  minScreenSize: 384,
  maxScreenSize: 1600,
  remBase: 16,
};

type Unit = 'rem' | 'px';

/**
 * Rounds a number to a specified number of decimal places.
 */
const toFixed = (value: number, decimals: number = 3): number =>
  parseFloat(value.toFixed(decimals));

/**
 * Converts a size from pixels to rem if the unit is 'px'.
 */
const convertToRem = (size: number, unit: Unit, remBase: number): number =>
  unit === 'rem' ? size : size / remBase;

/**
 * Creates a CSS clamp() function string.
 */
export const createClamp = ({
  minClampSize = defaultValues.minClampSize,
  maxClampSize = defaultValues.maxClampSize,
  minScreenSize = defaultValues.minScreenSize,
  maxScreenSize = defaultValues.maxScreenSize,
  remBase = defaultValues.remBase,
}: {
  minClampSize?: number;
  maxClampSize?: number;
  minScreenSize?: number;
  maxScreenSize?: number;
  remBase?: number;
}): string => {
  const minScreenSizeRem = convertToRem(minScreenSize, 'px', remBase);
  const maxScreenSizeRem = convertToRem(maxScreenSize, 'px', remBase);

  const slope =
    (maxClampSize - minClampSize) / (maxScreenSizeRem - minScreenSizeRem);
  const intercept = minClampSize - slope * minScreenSizeRem;

  return `clamp(${toFixed(minClampSize)}rem, ${toFixed(intercept)}rem + ${toFixed(slope * 100)}vw, ${toFixed(maxClampSize)}rem)`;
};
