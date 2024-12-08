import { UnnamedUnitResult } from "../interfaces/result.interface"


class Expect {
    private _actualValue: unknown
    
    constructor(actual: unknown) {
        this._actualValue = actual
    }

    toBe(expected: unknown): UnnamedUnitResult<unknown> {
        return {
            expectedResult: expected,
            actualResult: this._actualValue,
            passed: expected === this._actualValue,
        }
    }
}

export function expect(actualValue: unknown) {
    return new Expect(actualValue)
}