import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const itemsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.item.findMany({
      orderBy: [{ price: "asc" }],
    });
  }),

  getByCategoryId: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.db.item.findMany({
        where: {
          categoryId: input,
        },
        orderBy: [{ price: "asc" }],
      });
    }),

  create: privateProcedure
    .input(
      z.object({
        name: z.string().min(1).max(64),
        price: z.number(),
        description: z.string().max(255),
        categoryId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.item.create({
        data: {
          name: input.name,
          price: input.price,
          description: input.description,
          categoryId: input.categoryId,
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
          id: input.id,
        },
      });
    }),
});
