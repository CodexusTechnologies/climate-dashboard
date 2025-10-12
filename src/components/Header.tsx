import React from 'react'
import { Sun, Moon } from 'lucide-react'
import clsx from 'clsx'


export default function Header({ dark, setDark, title = 'XIVIX Climate Dashboard' }: { dark: boolean; setDark: (v: boolean) => void; title?: string }) {
return (
<header className="w-full flex items-center justify-between py-4 px-6 glass rounded-2xl shadow-lg">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-sky-500 flex items-center justify-center shadow-2xl">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="white" opacity="0.95"/>
</svg>
</div>
<div>
<h1 className="text-xl font-semibold">{title}</h1>
<p className="text-sm text-slate-300">Interactive climate trends & forecasts — Sri Lanka</p>
</div>
</div>


<div className="flex items-center gap-3">
<div className="text-sm text-slate-300 mr-4">Region: <strong>All Provinces</strong></div>
<button
onClick={() => setDark(!dark)}
className={clsx('p-2 rounded-lg glass flex items-center gap-2', dark ? 'hover:bg-white/4' : 'hover:bg-slate-900/8')}
aria-label="Toggle theme"
>
{dark ? <Moon size={18} /> : <Sun size={18} />}
</button>
</div>
</header>
)
}