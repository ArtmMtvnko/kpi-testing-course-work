import { inspect } from 'util'
import Table from 'cli-table3'
import { isPrimirive } from './type-checker.utils'

function printLabel(label: string) {
    console.log(`\n\t====== ${label} ======`)
}

export function log(context: any, label?: string): void {
    if (label) {
        printLabel(label)
    }

    console.log(inspect(context, { depth: null, colors: true }))
}

export function logTable(context: Record<string, any>[], label?: string): void {
    if (label) {
        printLabel(label)
    }

    console.table(context)
}

export function logTable3(
    context: Record<string, any>[],
    label?: string
): void {
    if (label) {
        printLabel(label)
    }

    if (context.length < 1) {
        console.log('EMPTY')
        return
    }

    const objKeys: string[] = Object.keys(context[0])

    const table = new Table({
        head: objKeys
    })

    context.forEach(item => {
        const rowValues = Object.values(item).map(value => {
            if (!isPrimirive(value)) {
                return JSON.stringify(value, null, 2)
            }

            return value
        })

        table.push(rowValues)
    })

    console.log(table.toString())
}
