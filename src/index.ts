import { store } from "./store"
import { expect } from "./utils/expect.utils"
import { describe } from "./utils/desctibe.utils"

export function sum(a: number, b: number): number {
    return a + b
}

// const result = test('ABOBA', () => {
//     return expect<number>(sum(1, 3)).toBe(4)
// })

// console.log(result)

// describe('lalala', () => {
//     test('pupupu', () => {
//         return expect<number>(sum(1, 3)).toBe(4)
//     })
// })

describe('parent', (unit) => {
    unit.test('child', () => {
        return expect(sum(1, 3)).toBe(4)
    })

    unit.test('child 2', () => {
        return expect('asdf').toBe('qwerty')
    })
})

describe('testing sum function', (unit) => {
    unit.test('regular numbers', () => {
        return expect(sum(1, 3)).toBe(4)
    })

    unit.test('negative numbers', () => {
        return expect(sum(-1, -5)).toBe(-6)
    })
})

describe('testing sum function', (unit) => {
    unit.test('test from other part', () => {
        return expect(sum(40, 2)).toBe(42)
    })
})

console.log(store)