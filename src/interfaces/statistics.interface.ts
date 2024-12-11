export interface StatisticsUnitsResult {
    passed: number
    failed: number
    total: number
}

export interface StatisticsModuleResult extends StatisticsUnitsResult {
    label: string
    successRate: number | string
}
