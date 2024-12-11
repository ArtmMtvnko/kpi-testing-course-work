export function isPrimirive(value: any): boolean {
    if (value === null) return true

    if (typeof value === 'object' || typeof value === 'function') {
        return false
    }

    return true
}
