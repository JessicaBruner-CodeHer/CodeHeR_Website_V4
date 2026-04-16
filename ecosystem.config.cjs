module.exports = {
  apps: [
    {
      name: "codeher-api",
      script: "./server/src/server.js",
      cwd: "/var/www/codeher",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 5000,
        MONGODB_URI: "mongodb://127.0.0.1:27017/codeher",
        RESEND_API_KEY: "re_hTKgQhNJ_Da5BmRHLxkBtPTKihXJiLXBp"
      }
    }
  ]
};
