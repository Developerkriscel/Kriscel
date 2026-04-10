const isProd = process.env.NODE_ENV === 'production';

/**
 * Centralized API URL for the application.
 * We strictly enforce using absolute backend URL in production to prevent 
 * SSR fetch crashes, even if NEXT_PUBLIC_API_URL is missing or relative.
 */
let rawUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');
if (rawUrl && !rawUrl.endsWith('/api')) {
  rawUrl = `${rawUrl}/api`;
}
const configuredUrl = rawUrl;
const defaultProdUrl = 'https://kriscel.onrender.com/api';

export const API_URL = 
  (configuredUrl && configuredUrl.startsWith('http')) 
    ? configuredUrl 
    : (isProd ? defaultProdUrl : 'http://localhost:5000/api');

export const getApiUrl = (endpoint: string) => `${API_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
