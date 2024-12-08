import { ModuleResult, Result } from './interfaces/result.interface'

class ResultReport {
    private _result: Result

    constructor() {
        this._result = { modules: [] }
    }

    get value(): Result {
        return this._result; 
    }    

    addModuleResult(moduleResult: ModuleResult) {
        this._result.modules.push(moduleResult)
    }
}
