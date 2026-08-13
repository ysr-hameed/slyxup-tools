import { Hono } from "hono";
import { cors } from "hono/cors";

interface Env {
  ROUTER_API_KEY?: string;
  ROUTER_BASE_URL?: string;
  ROUTER_MODEL?: string;
  ENVIRONMENT?: string;
}

const ALLOWED_ORIGINS = [
  "https://tools.slyxup.in",
  "http://localhost:3000",
  "http://localhost:8790",
];

const app = new Hono<{ Bindings: Env }>();

app.use(
  "*",
  cors({
    origin: (origin) => {
      if (!origin) return "https://tools.slyxup.in";
      return ALLOWED_ORIGINS.includes(origin) ? origin : "https://tools.slyxup.in";
    },
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
    maxAge: 86400,
  })
);

app.get("/api/health", (c) =>
  c.json({ ok: true, env: c.env.ENVIRONMENT ?? "dev", ts: Date.now() })
);

app.get("/", (c) =>
  c.json({ service: "tools-api", status: "running", health: "/api/health" })
);

app.notFound((c) => c.json({ error: "Not found" }, 404));

export default app;