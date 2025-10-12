import { useEffect, useState } from 'react'


export default function useDarkMode() {
const [dark, setDark] = useState(true)
useEffect(() => {
if (dark) document.documentElement.classList.add('dark')
else document.documentElement.classList.remove('dark')
}, [dark])
return { dark, setDark }
}