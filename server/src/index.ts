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
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
