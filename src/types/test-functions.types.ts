import { UnnamedUnitResult, UnitResult } from '../interfaces/result.interface'
import { Unit } from '../utils/Unit.utils'

export type TestFunction = (
    label: string,
    callback: () => UnnamedUnitResult<unknown>
) => UnitResult

export type DescribeFunction = (
    label: string,
    callback: (unit: Unit) => void
) => void
