import React from 'react'
import useDarkMode from './hooks/useDarkMode'
import Header from './components/Header'
import RainfallChart from './components/RainfallChart'
import TempChart from './components/TempChart'
import CO2Chart from './components/CO2Chart'
import ForecastCard from './components/ForecastCard'
import Legend from './components/Legend'


export default function App(){
const { dark, setDark } = useDarkMode()


return (
<div className="min-h-screen p-6">
<div className="max-w-7xl mx-auto grid grid-rows-[auto_1fr] gap-6">
<Header dark={dark} setDark={setDark} />


<main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<section className="lg:col-span-2 grid grid-rows-2 gap-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<RainfallChart />
<TempChart />
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<CO2Chart />
<ForecastCard />
</div>
</section>


<aside className="space-y-6">
<Legend />
<div className="glass rounded-2xl p-4">
<h3 className="font-semibold">Highlights</h3>
<p className="text-sm text-slate-300 mt-2">Recent rainfall peaked at 120mm in the Southern Province. CO₂ levels show steady rise over the past 40 years.</p>
</div>
</aside>
</main>
</div>
</div>
)
}