import { FC } from 'react';
import { ForecastData } from '../types';
import { Sun, Cloud, CloudRain } from 'lucide-react';

interface ForecastCardProps {
  forecast: ForecastData[];
}

const ForecastCard: FC<ForecastCardProps> = ({ forecast }) => {
  const getWeatherIcon = (temp: number, rainfall: number) => {
    if (rainfall > 150) return <CloudRain className="w-8 h-8 text-blue-500" />;
    if (temp > 28) return <Sun className="w-8 h-8 text-yellow-500" />;
    return <Cloud className="w-8 h-8 text-gray-500" />;
  };

  return (
    <div className="glass-morphism rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-5 gap-4">
        {forecast.map((day) => (
          <div key={day.date} className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            {getWeatherIcon(day.temperature, day.rainfall)}
            <p className="text-lg font-semibold mt-2">{day.temperature}°C</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{day.rainfall}mm</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;