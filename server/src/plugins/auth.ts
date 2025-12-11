import Elysia, { env } from "elysia";

const MASTER_HASH = Bun.password.hashSync(env.API_KEY!);

export const auth = new Elysia({ name: "auth" })
  .onBeforeHandle(async ({ headers, set }) => {
    const clientKey = headers["x-metr-key"];
    const isValid = Bun.password.verifySync(clientKey || "", MASTER_HASH);

    if (!isValid) {
      set.status = 401;
      return { error: "Invalid API key" };
    }
  })
  .as("scoped");
