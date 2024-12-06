type TestFunction = (label: string, callback: () => void) => void
type DescribeFunction = (label: string, callback: () => void) => void

export const test: TestFunction = (label, callback) => {
    callback()
}

export const describe: DescribeFunction = (label, callback) => {
    callback()
}