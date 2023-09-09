export const getBaseUrl = () =>
  process.env.VERCEL_URL
    ? process.env.VERCEL_URL
    : `http://localhost:${process.env.PORT ?? 3000}`;
