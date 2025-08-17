import { z } from 'zod';

export const formSchema = z.object({
  colorName: z
    .string({
      required_error: 'Color name is required',
    })
    .min(1, { message: 'Color name is required' })
    .regex(/^[a-zA-Z\s-]+$/, {
      message: 'Color name can only contain letters, spaces, and dashes',
    }),
  hex: z.string().min(7).max(7),
  position: z
    .number({
      required_error: 'Position is required',
      invalid_type_error: 'Position must be a number',
    })
    .refine(
      (value) =>
        [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].includes(value),
      {
        message:
          'Position must be one of: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950',
      },
    ),
});
