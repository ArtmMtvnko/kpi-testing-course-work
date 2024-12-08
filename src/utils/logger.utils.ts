import { inspect } from 'util'

export function log(context: any): void {
    console.log(inspect(context, { depth: null, colors: true }))
}
