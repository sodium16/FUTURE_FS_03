// path: config/env/production/server.js
module.exports = ({ env }) => ({
    proxy: true,
    url: env("RENDER_EXTERNAL_URL"),
    app: {
      keys: env.array("APP_KEYS"),
    },
  });