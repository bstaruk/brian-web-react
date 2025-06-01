import { z } from 'zod';

type Unit = 'rem' | 'px';

const toFixed = (value: number, decimals: number = 3): number =>
  parseFloat(value.toFixed(decimals));

const convertToRem = (size: number, unit: Unit, remBase: number): number =>
  unit === 'rem' ? size : size / remBase;

export const createClamp = (
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

const numberField = (fieldName: string) =>
  z
    .number({
      required_error: `${fieldName} is required`,
      invalid_type_error: `${fieldName} must be a number`,
    })
    .min(0.0001, { message: `${fieldName} must be at least 0.0001` })
    .max(9999, { message: `${fieldName} must be at most 9999` });

export const formSchema = z.object({
  clampMin: numberField('Clamp Min'),
  clampMax: numberField('Clamp Max'),
  viewportMin: numberField('Viewport Min'),
  viewportMax: numberField('Viewport Max'),
});

export const defaultValues = {
  clampMin: 1,
  clampMax: 2,
  viewportMin: 420,
  viewportMax: 1440,
};

export const goofyLabels = [
  'Clamp It, Chewy!',
  'Clamplify me, Captain!',
  'Go Go Clamp-o!',
  'Fire Up the Clampulator',
  'Go Full Clamptation',
  'Clamp it Down',
  'Clamp the Math',
  'Activate Clamp Mode',
  'Send It, Clamper!',
  'Clamp That Value',
  'Spin the Clamp-o-matic',
  'Clamp That Funk',
  'Clamp My Style',
  'Please Clamp',
  'Clamp This!',
  'Clamp-a-doodle-doo',
  'Holy Clamp!',
  'Clampnation',
  'Clamps Ahoy!',
];
