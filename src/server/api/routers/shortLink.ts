import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'

export const shortLinkRouter = createTRPCRouter({
  searchShortLinks: protectedProcedure
    .input(z.string().max(30, 'The query must has maximum 30 characters'))
    .query(({ ctx, input: searchQuery }) => {
      const isSearchQueryExist = Boolean(searchQuery)

      return ctx.db.shortLink.findMany({
        where: {
          ...(isSearchQueryExist
            ? {
                OR: [
                  {
                    alias: {
                      contains: searchQuery,
                    },
                  },
                  {
                    code: {
                      contains: searchQuery,
                    },
                  },
                ],
              }
            : undefined),
          AND: {
            userId: ctx.session.user.id,
          },
        },
        select: {
          id: true,
          alias: true,
          code: true,
          createdAt: true,
          originalUrl: true,
          description: true,
        },
      })
    }),
})
