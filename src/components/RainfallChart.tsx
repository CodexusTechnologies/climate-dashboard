import React from 'react'
import { rainfallMock } from '../data/mockData'
import ChartCard from './ChartCard'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'


const sample = rainfallMock.slice(-60).map(r => ({ date: r.date.slice(5), mm: r.mm }))


export default function RainfallChart(){
return (
<ChartCard title="Rainfall (last 60 days)" subtitle="Daily rainfall in mm">
<ResponsiveContainer>
<AreaChart data={sample} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
<defs>
<linearGradient id="rainGrad" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
<stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
</linearGradient>
</defs>
<CartesianGrid strokeDasharray="3 3" opacity={0.06} />
<XAxis dataKey="date" tick={{ fontSize: 11 }} />
<YAxis />
<Tooltip />
<Area type="monotone" dataKey="mm" stroke="#06b6d4" fillOpacity={1} fill="url(#rainGrad)" />
</AreaChart>
</ResponsiveContainer>
</ChartCard>
)
}