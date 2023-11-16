
console.log(import.meta.env.VITE_APP_TMDB_KEY,import.meta.env.VITE_APP_OPENAI_kEY)
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_APP_TMDB_KEY
  }
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"

export const OPEN_AI_KEY = import.meta.env.VITE_APP_OPENAI_kEY
