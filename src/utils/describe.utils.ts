import { store } from '../store'
import { DescribeFunction } from '../types/test-functions.types'
import { Unit } from './Unit.utils'

export const describe: DescribeFunction = (label, callback) => {
    const module = store.get(label)
    store.set(label, module ? module : [])

    const unit = new Unit(label, store)
    callback(unit)
}
