// path: backend/config/env/production/server.ts

export default ({ env }) => ({
  proxy: true,
  url: env("RENDER_EXTERNAL_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});