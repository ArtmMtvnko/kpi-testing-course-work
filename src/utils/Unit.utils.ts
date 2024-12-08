import { UnnamedUnitResult } from '../interfaces/result.interface'
import { Store } from '../types/store.type'

export class Unit {
    private _label: string
    private _map: Store

    constructor(describelabel: string, store: Store) {
        this._label = describelabel
        this._map = store
    }

    test(label: string, callback: () => UnnamedUnitResult<unknown>): void {
        const result: UnnamedUnitResult<unknown> = callback()

        const module = this._map.get(this._label)

        module?.push({
            label,
            ...result
        })
    }
}
