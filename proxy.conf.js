const { env } = require('process');

// این آدرس باید آدرس پروژه BFF شما (Otex.Clients.Shop.Bff) باشد
const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
    ? env.ASPNETCORE_URLS.split(';')[0]
    : 'https://localhost:5001'; // پورت پیش‌فرض BFF خود را اینجا بگذارید

const PROXY_CONFIG = [
  {
    context: [
      '/bff', // مسیرهای امنیتی Duende BFF
      '/signin-oidc', // کال‌بک ورود Identity
      '/signout-callback-oidc', // کال‌بک خروج Identity
      '/api', // *** مسیر API های شما که باید به Aspire Gateway برود ***
    ],
    target,
    secure: false, // چون در لوکال هستیم
    changeOrigin: true,
  },
];

module.exports = PROXY_CONFIG;
