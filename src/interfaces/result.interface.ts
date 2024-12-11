export interface UnitResult<T = any> {
    label: string,
    passed: boolean,
    expectedResult: T,
    actualResult: T
}

export interface UnnamedUnitResult<T> extends Omit<UnitResult<T>, 'label'> {}
