import { FC } from 'react';
import { WeatherData } from '../types';
import { Thermometer, Droplets, Wind } from 'lucide-react';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="glass-morphism rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Current Weather</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Thermometer className="w-6 h-6 text-red-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Temperature</p>
            <p className="text-2xl font-bold">{data.temperature}°C</p>
          </div>
        </div>
        <div className="flex items-center">
          <Droplets className="w-6 h-6 text-blue-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Humidity</p>
            <p className="text-2xl font-bold">{data.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <Wind className="w-6 h-6 text-green-500 mr-3" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Rainfall</p>
            <p className="text-2xl font-bold">{data.rainfall} mm</p>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">CO2 Level</p>
        <p className="text-2xl font-bold">{data.co2Level} ppm</p>
      </div>
    </div>
  );
};

export default WeatherCard;