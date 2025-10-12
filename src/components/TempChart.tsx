import React from 'react'
import { tempMock } from '../data/mockData'
import ChartCard from './ChartCard'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'


const sample = tempMock.slice(-60).map(t => ({ date: t.date.slice(5), max: t.max, min: t.min }))


export default function TempChart(){
return (
<ChartCard title="Temperature (last 60 days)" subtitle="Daily highs & lows (°C)">
<ResponsiveContainer>
<LineChart data={sample} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
<CartesianGrid strokeDasharray="3 3" opacity={0.06} />
<XAxis dataKey="date" tick={{ fontSize: 11 }} />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="max" stroke="#f97316" strokeWidth={2} dot={false} />
<Line type="monotone" dataKey="min" stroke="#60a5fa" strokeWidth={2} dot={false} />
</LineChart>
</ResponsiveContainer>
</ChartCard>
)
}