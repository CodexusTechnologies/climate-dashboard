import React from 'react'


export default function Legend(){
return (
<div className="glass rounded-xl p-3 text-sm">
<div className="font-medium mb-2">Legend</div>
<div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
<div>Rainfall — Daily mm</div>
<div>Temperature — °C</div>
<div>CO₂ — ppm</div>
<div>Forecast — 5 day</div>
</div>
</div>
)
}