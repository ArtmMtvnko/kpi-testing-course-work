export function round(number: number, precision: number = 0) {
    const decimalDigits = 10 ** precision

    return Math.round(number * decimalDigits) / decimalDigits
}
