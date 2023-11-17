import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      orderBy: [{ name: "asc" }],
    });
  }),

  create: privateProcedure
    .input(
      z.object({
        name: z.string().min(1).max(64),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.category.create({
        data: {
          name: input.name,
        },
      });
    }),
});
