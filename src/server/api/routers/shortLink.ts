import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const shortLinkRouter = createTRPCRouter({
  getShortLink: publicProcedure
    .input(z.object({ query: z.string().min(1) }))
    .query(({ input, ctx }) => {
      return ctx.db.shortLink.findFirst({
        where: {
          OR: [
            {
              code: input.query,
            },
            {
              alias: input.query,
            },
          ],
        },
      });
    }),
});
