
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export const WEATHER_API_KEY = apiKey
export const hasWeatherApiKey = Boolean(apiKey)