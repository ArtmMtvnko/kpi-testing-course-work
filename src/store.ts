import { UnitResult } from './interfaces/result.interface'

export type Store = Map<string, UnitResult[]>

export const store: Store = new Map()
