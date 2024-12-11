import { store } from './store'
import { expect } from './utils/expect.utils'
import { describe } from './utils/desctibe.utils'
import { Statistics } from './utils/Statistics.utils'

export function sum(a: number, b: number): number {
    return a + b
}

describe('parent', unit => {
    unit.test('child', () => {
        return expect(sum(1, 3)).toBe(4)
    })

    unit.test('child 2', () => {
        return expect('asdf').toBe('qwerty')
    })

    unit.test('child 3', () => {
        return expect(null).toBe('qwerty')
    })
})

describe('testing sum function', unit => {
    unit.test('regular numbers', () => {
        return expect(sum(1, 3)).toBe(4)
    })

    unit.test('negative numbers', () => {
        return expect(sum(-1, -5)).toBe(-6)
    })
})

describe('testing sum function', unit => {
    unit.test('test from other part', () => {
        return expect(sum(40, 2)).toBe(42)
    })
})

describe('testing deep checking', unit => {
    unit.test('is arrays equal', () => {
        return expect([1, 2, 3]).toEqual([1, 2, 3])
    })

    unit.test('is arrays not equal', () => {
        return expect([1, 2, 4]).toEqual([1, 2, 3])
    })

    unit.test('is shuffled arrays equal', () => {
        return expect([1, 3, 2]).toEqual([1, 2, 3])
    })

    unit.test('is nested arrays equal', () => {
        return expect([
            1,
            3,
            {
                a: [1, 2, 6]
            }
        ]).toEqual([1, 3, { a: [1, 2, 6] }])
    })

    unit.test('is nested arrays equal (should not be)', () => {
        return expect([
            1,
            3,
            {
                a: [1, 2, 6],
                b: [10, 20, {
                    x: 10,
                    y: 100
                }]
            }
        ]).toEqual([
            1,
            3,
            {
                a: [1, 2, 6],
                b: [10, 20, {
                    x: 10,
                    y: 1000
                }]
            }
        ])
    })
})

const stats = new Statistics(store)
stats.showTestResultAsTable()
// stats.showTestResult()
stats.showStatisticsTable()
