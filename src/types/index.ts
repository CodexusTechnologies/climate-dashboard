export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  co2Level: number;
  forecast: ForecastData[];
  province: string;
}

export interface ForecastData {
  date: string;
  temperature: number;
  rainfall: number;
  humidity: number;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface ProvinceData {
  name: string;
  temperature: number;
  rainfall: number;
  co2Level: number;
}