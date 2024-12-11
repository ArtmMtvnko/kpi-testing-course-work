import { UnitResult } from '../interfaces/result.interface'
import {
    StatisticsModuleResult,
    StatisticsUnitsResult
} from '../interfaces/statistics.interface'
import { Store } from '../types/store.type'
import { log, logTable, logTable3 } from './logger.utils'
import { round } from './math.utils'

export class Statistics {
    private _store: Store

    constructor(store: Store) {
        this._store = store
    }

    private calculateModuleStatistics(
        module: [string, UnitResult[]]
    ): StatisticsModuleResult {
        const unitsResult = module[1].reduce<StatisticsUnitsResult>(
            (acc, unitResult) => {
                if (unitResult.passed) {
                    acc.passed += 1
                } else {
                    acc.failed += 1
                }
                acc.total += 1

                return acc
            },
            { passed: 0, failed: 0, total: 0 }
        )

        const successRatePersents = round(
            (unitsResult.passed / unitsResult.total) * 100,
            2
        )

        return {
            label: module[0],
            successRate: successRatePersents + '%',
            ...unitsResult
        }
    }

    showStatisticsTable(): void {
        const stats: StatisticsModuleResult[] = []
        
        for (const module of this._store) {
            stats.push(this.calculateModuleStatistics(module))
        }

        logTable3(stats, 'Statistics')
    }

    showTestResultAsTable(): void {
        for (const [label, result] of this._store) {
            logTable3(result, label)
        }
    }

    showTestResult(): void {
        log(this._store)
    }
}
