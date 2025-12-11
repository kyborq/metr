import { Elysia, t } from "elysia";
import { config } from "dotenv";

import { auth } from "./plugins/auth";
import { result } from "./utils/result";

config();

const app = new Elysia({ prefix: "/api" })
  .use(auth)
  .post(
    "/track",
    async ({ body }) => {
      return result("ok");
    },
    {
      body: t.Array(
        t.Object({
          event: t.String(),
          props: t.Optional(t.Object({})),
        })
      ),
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
