import { FC } from 'react';
import { Map } from 'lucide-react';

interface ProvinceMapProps {
  province: string;
}

const ProvinceMap: FC<ProvinceMapProps> = ({ province }) => {
  return (
    <div className="glass-morphism rounded-lg p-6 h-full">
      <h2 className="text-xl font-semibold mb-4">Regional View: {province}</h2>
      <div className="flex items-center justify-center h-64 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="text-center">
          <Map className="w-12 h-12 mx-auto text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Interactive map coming soon
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Regional Highlights</h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>• Above average rainfall in {province} Province</li>
          <li>• Temperature trends stable</li>
          <li>• CO2 levels within expected range</li>
        </ul>
      </div>
    </div>
  );
};

export default ProvinceMap;