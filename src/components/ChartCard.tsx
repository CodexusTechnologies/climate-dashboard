import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from 'recharts'


export default function ChartCard({ title, subtitle, children } : { title: string; subtitle?: string; children?: React.ReactNode }){
return (
<div className="p-4 glass rounded-2xl shadow-lg">
<div className="flex items-center justify-between mb-3">
<div>
<h3 className="font-semibold">{title}</h3>
{subtitle && <p className="text-xs text-slate-300">{subtitle}</p>}
</div>
</div>
<div style={{ width: '100%', height: 220 }}>
{children}
</div>
</div>
)
}