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

  delete: privateProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.item.deleteMany({
        where: {
          categoryId: input.id,
        },
      }),
        await ctx.db.category.delete({
          where: {
            id: input.id,
          },
        });
    }),
});
