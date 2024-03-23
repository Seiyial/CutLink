import { z } from 'zod'

export const updateShortLinkValidation = z.object({
  alias: z.string().max(30, 'Maximum 30 characters').nullable(),
  description: z.string().nullable(),
})
