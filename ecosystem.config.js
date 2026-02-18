module.exports = {
  apps: [
    {
      name: "orchestr",
      script: "public/index.js",
      instances: "max",
      exec_mode: "cluster",
      node_args: "--max-old-space-size=512",
      env: {
        NODE_ENV: "production",
        APP_ENV: "production",
        APP_DEBUG: "false",
        APP_HOST: "0.0.0.0",
        APP_PORT: 3000,
        UV_THREADPOOL_SIZE: 16,
      },
    },
  ],
};
