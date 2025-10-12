export type Province = 'Western' | 'Central' | 'Southern' | 'Northern' | 'Eastern' | 'North Western' | 'North Central' | 'Uva' | 'Sabaragamuwa'


export interface RainfallRecord {
date: string
mm: number
province: Province
}


export interface TempRecord {
date: string
max: number
min: number
province: Province
}


export interface CO2Record {
year: number
ppm: number
}