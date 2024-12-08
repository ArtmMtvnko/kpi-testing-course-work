const map = new Map()

const test = function (label, callback) {
    const result = callback()
    console.log(this)
    const module = map.get(this.label)

    module.push({
        label,
        ...result
    })
}

const describe = function (label, callback) {
    map.set(label, [])
    
    callback.call({})
}

describe('PARENT', function() {
    test('CHILD 1', function() {
        return 'pass'
    })

    test('CHILD 2', function() {
        return 'smash'
    })
})

console.log(map)