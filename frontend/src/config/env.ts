const getApiBaseUrl = () => {
  // Check for explicit environment variable first
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }

  const isDev = import.meta.env.DEV;

  if (isDev) {
    return "http://localhost:8000/api/v1";
  }

  // In production, use relative URLs to avoid CORS issues
  // This allows the frontend and API to be served from the same origin
  return "/api/v1";
};

export const env = {
  API_BASE_URL: getApiBaseUrl(),
  APP_ENV: import.meta.env.VITE_APP_ENV || "development",
} as const;
