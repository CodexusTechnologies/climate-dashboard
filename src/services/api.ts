import { WeatherData } from '../types';

// Mock data for development - replace with actual API calls
const mockWeatherData: WeatherData = {
  temperature: 28,
  humidity: 75,
  rainfall: 150,
  co2Level: 412,
  province: 'Western',
  forecast: [
    {
      date: '2025-10-15',
      temperature: 28,
      rainfall: 150,
      humidity: 75,
    },
    {
      date: '2025-10-16',
      temperature: 29,
      rainfall: 120,
      humidity: 72,
    },
    {
      date: '2025-10-17',
      temperature: 27,
      rainfall: 200,
      humidity: 80,
    },
    {
      date: '2025-10-18',
      temperature: 26,
      rainfall: 180,
      humidity: 78,
    },
    {
      date: '2025-10-19',
      temperature: 28,
      rainfall: 90,
      humidity: 70,
    },
  ],
};

export const fetchWeatherData = async (): Promise<WeatherData> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockWeatherData;
};

// TODO: Replace with actual API endpoints when available
export const API_ENDPOINTS = {
  WEATHER: 'https://api.example.com/weather',
  FORECAST: 'https://api.example.com/forecast',
  CO2_LEVELS: 'https://api.example.com/co2',
};