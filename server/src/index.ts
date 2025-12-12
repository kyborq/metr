import { Elysia, t } from "elysia";
import { config } from "dotenv";

import { auth } from "./plugins/auth";
import prisma from "./prisma";

import { AnalyticsEventInputCreate } from "../generated/prismabox/AnalyticsEvent";

config();

const app = new Elysia({ prefix: "/api" })
  .use(auth)
  .post(
    "/track",
    async ({ body }) => {
      const result = await prisma.analyticsEvent.createMany({
        data: body,
      });
      return result;
    },
    {
      body: t.Array(AnalyticsEventInputCreate),
    }
  )
  .get(
    "/metrics/:event?",
    async ({ params, query }) => {
      const limit = Math.min(query.limit ?? 50, 200);
      const cursor = query.cursor;

      const metrics = await prisma.analyticsEvent.findMany({
        where: {
          ...(params.event && { event: params.event }),
        },
        orderBy: { id: "desc" },
        take: limit,
        ...(cursor && {
          cursor: { id: cursor },
          skip: 1,
        }),
      });

      const nextCursor =
        metrics.length > 0 ? metrics[metrics.length - 1].id : null;

      return {
        data: metrics,
        nextCursor,
      };
    },
    {
      query: t.Object({
        limit: t.Optional(t.Numeric()),
        cursor: t.Optional(t.Numeric()),
      }),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
