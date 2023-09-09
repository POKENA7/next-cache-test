export const getBaseUrl = () =>
  process.env.VERCEL_URL
    ? "https://next-cache-test-chi.vercel.app"
    : `http://localhost:${process.env.PORT ?? 3000}`;
