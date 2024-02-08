const sum = require('./sum')
const newArr = require('./map')

test ('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('newArr should return value + 2', () => {
    expect(newArr()).toStrictEqual([3, 4, 5, 6, 7])
})