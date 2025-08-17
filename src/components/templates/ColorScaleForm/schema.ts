import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string({
      required_error: 'Color name is required',
    })
    .min(1, { message: 'Color name is required' })
    .regex(/^[a-zA-Z\s-]+$/, {
      message: 'Color name can only contain letters, spaces, and dashes',
    }),
  hex: z.string().regex(/^#[0-9a-fA-F]{6}$/, {
    message: 'Must be a valid hex color (e.g., #ff0000)',
  }),
});
