export interface TestCallbackResult<T> {
    expected: T
    actual: T
}

export interface UnitResult<T = any> {
    label: string,
    passed: boolean,
    expectedResult: T,
    actualResult: T
}

export interface UnnamedUnitResult<T> extends Omit<UnitResult<T>, 'label'> {}

export interface ModuleResult {
    label: string,
    unitResults: UnitResult[]
}

export interface Result {
    modules: ModuleResult[] 
}
