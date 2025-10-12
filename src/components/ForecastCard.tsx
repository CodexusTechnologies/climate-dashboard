import React from 'react'
import ChartCard from './ChartCard'


export default function ForecastCard(){
// static 5-day mock forecast
const forecast = [
{ day: 'Today', temp: 29, rain: 20 },
{ day: 'Tomorrow', temp: 30, rain: 10 },
{ day: 'Day 3', temp: 28, rain: 60 },
{ day: 'Day 4', temp: 27, rain: 40 },
{ day: 'Day 5', temp: 29, rain: 15 }
]
return (
<ChartCard title="5-Day Forecast" subtitle="Simple precipitation & temperature forecast">
<div className="flex gap-3 items-stretch h-full pt-2">
{forecast.map(f => (
<div key={f.day} className="flex-1 flex flex-col items-center justify-center glass rounded-lg p-3">
<div className="text-sm font-medium">{f.day}</div>
<div className="text-2xl font-semibold mt-2">{f.temp}°C</div>
<div className="text-xs text-slate-300 mt-1">Rain: {f.rain}%</div>
</div>
))}
</div>
</ChartCard>
)
}