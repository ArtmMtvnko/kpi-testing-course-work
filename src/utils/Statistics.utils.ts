import { UnitResult } from '../interfaces/result.interface'
import { Store } from '../types/store.type'

export class Statistics {
    private _store: Store
    
    constructor(store: Store) {
        this._store = store
    }

    calculateModuleStatistics(module: [string, UnitResult[]]) {
        const stats = module[1].reduce((acc, unitResult) => {
            if (unitResult.passed) {
                acc.pass += 1
            } else {
                acc.fail += 1
            }
            acc.total += 1

            return acc
        }, { pass: 0, fail: 0, total: 0 })

        console.log(stats)
    }
}
