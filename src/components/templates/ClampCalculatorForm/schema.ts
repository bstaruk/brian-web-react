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
