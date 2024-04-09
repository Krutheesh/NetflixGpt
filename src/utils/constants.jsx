
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_APP_TMDB_KEY
  },
  timeout: 50
};
export const IMG_CDN_URL = import.meta.env.VITE_APP_IMG_CDN_URL

export const OPEN_AI_KEY = import.meta.env.VITE_APP_OPENAI_kEY
