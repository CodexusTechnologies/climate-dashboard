import { FC } from 'react';
import { WeatherData } from '../types';
import WeatherCard from './WeatherCard';
import ChartCard from './ChartCard';
import ForecastCard from './ForecastCard';
import ProvinceMap from './ProvinceMap';

interface DashboardLayoutProps {
  weatherData: WeatherData | null;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <WeatherCard data={weatherData} />
      <ChartCard
        title="Temperature Trend"
        data={weatherData.forecast.map(f => ({
          name: f.date,
          value: f.temperature,
        }))}
        dataKey="value"
        unit="°C"
      />
      <ChartCard
        title="Rainfall Distribution"
        data={weatherData.forecast.map(f => ({
          name: f.date,
          value: f.rainfall,
        }))}
        dataKey="value"
        unit="mm"
      />
      <ForecastCard forecast={weatherData.forecast} />
      <div className="lg:col-span-2">
        <ProvinceMap province={weatherData.province} />
      </div>
    </div>
  );
};

export default DashboardLayout;