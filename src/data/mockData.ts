import type { RainfallRecord, TempRecord, CO2Record } from '../types'


export const rainfallMock: RainfallRecord[] = Array.from({ length: 180 }).map((_, i) => {
const d = new Date()
d.setDate(d.getDate() - (179 - i))
return {
date: d.toISOString().slice(0, 10),
mm: Math.round(Math.max(0, 60 + 30 * Math.sin(i / 10) + Math.random() * 40)),
province: ['Western','Central','Southern','Northern','Eastern','North Western','North Central','Uva','Sabaragamuwa'][i % 9] as any
}
})


export const tempMock: TempRecord[] = Array.from({ length: 180 }).map((_, i) => {
const d = new Date()
d.setDate(d.getDate() - (179 - i))
return {
date: d.toISOString().slice(0, 10),
max: +(28 + 3 * Math.sin(i/12) + Math.random() * 2).toFixed(1),
min: +(20 + 2 * Math.cos(i/9) + Math.random() * 1.5).toFixed(1),
province: ['Western','Central','Southern','Northern','Eastern','North Western','North Central','Uva','Sabaragamuwa'][i % 9] as any
}
})


export const co2Mock: CO2Record[] = Array.from({ length: 40 }).map((_, i) => ({ year: 1985 + i, ppm: +(345 + i * 2.1 + Math.random()).toFixed(2) }))