import { Unit } from '../utils/Unit.utils'

export type DescribeFunction = (
    label: string,
    callback: (unit: Unit) => void
) => void
