import app from "@/server/app";
import { handle } from "hono/cloudflare-pages";

export const onRequest = handle(app);
