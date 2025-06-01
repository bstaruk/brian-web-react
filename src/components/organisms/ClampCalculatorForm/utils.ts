import { z } from 'zod';

export const defaultValues = {
  minClampSize: 1,
  maxClampSize: 2,
  minScreenSize: 420,
  maxScreenSize: 1440,
  remBase: 16,
};

type Unit = 'rem' | 'px';

const toFixed = (value: number, decimals: number = 3): number =>
  parseFloat(value.toFixed(decimals));

const convertToRem = (size: number, unit: Unit, remBase: number): number =>
  unit === 'rem' ? size : size / remBase;

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

const numberField = (fieldName: string) =>
  z
    .number({
      required_error: `${fieldName} is required`,
      invalid_type_error: `${fieldName} must be a number`,
    })
    .min(0.0001, { message: `${fieldName} must be at least 0.0001` })
    .max(9999, { message: `${fieldName} must be at most 9999` });

export const formSchema = z
  .object({
    minClampSize: numberField('Min Clamp Size (rem)'),
    maxClampSize: numberField('Max Clamp Size (rem)'),
    minScreenSize: numberField('Min Screen Size (px)'),
    maxScreenSize: numberField('Max Screen Size (px)'),
    remBase: numberField('REM Base (px)'),
  })
  .refine((data) => data.maxClampSize > data.minClampSize, {
    message: 'Max Clamp Size must be greater than Min Clamp Size',
    path: ['maxClampSize'],
  })
  .refine((data) => data.maxScreenSize > data.minScreenSize, {
    message: 'Max Screen Size must be greater than Min Screen Size',
    path: ['maxScreenSize'],
  });

export const goofyLabels = [
  'Clamp It, Chewy!',
  'Clamp It Up!',
  "Clamp It Like It's Hot",
  'Clamplify me, Captain!',
  'Go Go Clamp-o!',
  'Fire Up the Clampulator',
  'Go Full Clamptation',
  'Clamp it Down',
  'Clamp the Math',
  'Activate Clamp Mode',
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
