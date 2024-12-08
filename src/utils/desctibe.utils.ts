import { UnnamedUnitResult } from '../interfaces/result.interface'
import { store } from '../store'
import { DescribeFunction, TestFunction } from '../types/test-functions.types'
import { Unit } from './Unit.utils'

export const test: TestFunction = (label, callback) => {
    const result: UnnamedUnitResult<unknown> = callback()

    return {
        label,
        ...result
    }
}

export const describe: DescribeFunction = (label, callback) => {
    const module = store.get(label)
    store.set(label, module ? module : [])

    const unit = new Unit(label, store)
    callback(unit)
}
