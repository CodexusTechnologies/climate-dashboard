import React from 'react'
import { co2Mock } from '../data/mockData'
import ChartCard from './ChartCard'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'


export default function CO2Chart(){
return (
<ChartCard title="CO₂ Concentration" subtitle="Annual global CO₂ (ppm)">
<ResponsiveContainer>
<AreaChart data={co2Mock} margin={{ top: 6, right: 10, left: -20, bottom: 0 }}>
<CartesianGrid strokeDasharray="3 3" opacity={0.06} />
<XAxis dataKey="year" />
<YAxis />
<Tooltip />
<Area type="monotone" dataKey="ppm" stroke="#22c55e" fillOpacity={0.14} fill="#22c55e" />
</AreaChart>
</ResponsiveContainer>
</ChartCard>
)
}