import { z } from 'zod';

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
    minClampSize: numberField('Min clamp size'),
    maxClampSize: numberField('Max clamp size'),
    minScreenSize: numberField('Min screen size'),
    maxScreenSize: numberField('Max screen size'),
    remBase: numberField('REM base'),
  })
  .refine((data) => data.maxClampSize > data.minClampSize, {
    message: 'Max clamp size must be greater than min clamp size',
    path: ['maxClampSize'],
  })
  .refine((data) => data.maxScreenSize > data.minScreenSize, {
    message: 'Max screen size must be greater than min screen size',
    path: ['maxScreenSize'],
  });
