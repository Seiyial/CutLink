import { z } from 'zod'

export const createShortLinkValidation = z.object({
  alias: z.string().max(30, 'Maximum 30 characters').nullable(),
  originalUrl: z
    .string({ required_error: 'Original URL is required' })
    .url({ message: 'URL is invalid' })
    .max(255, 'Maximum 255 characters'),
  description: z.string().nullable(),
})
