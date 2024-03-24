import { z } from 'zod'

export const updateShortLinkValidation = z.object({
  alias: z
    .string()
    .max(30, 'Maximum 30 characters')
    .nullable()
    .transform(alias => (alias === '' ? null : alias)),
  description: z
    .string()
    .nullable()
    .transform(alias => (alias === '' ? null : alias)),
})
