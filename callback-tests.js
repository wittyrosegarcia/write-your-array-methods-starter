const echo = function (val) {
    console.log(val)
}
const addTwo = function (val) {
    return val + 2
}
const negate = function (val) {
    return val * -1
}
const isAbove10 = function (val) {
    return val > 10
}
const isAbove678 = function (val) {
    return val > 678
}
const isNegative = function (val) {
    return val < 0
}
const isPositive = function (val) {
    return val > 0
}
const isNumber = function (val) {
    return typeof val === 'number'
}
let nums = [-3, -1, 0, 1, 2, 30, 45, 678]

console.group('newForEach')
console.log('Your newForEach output:')
newForEach(nums, echo)
console.log('Should match built in forEach output:')
nums.forEach(echo)
console.groupEnd()

console.group('newMap')
console.log('%cpassed test1: ', 'color: red')
console.log(JSON.stringify(newMap(nums, isNegative)) === JSON.stringify(nums.map(isNegative)))
console.log('Your Test1 newMap output:')
console.log(JSON.stringify(newMap(nums, isNegative)))
console.log('Should match built in map output:')
console.log(JSON.stringify(nums.map(isNegative)))
console.log('%cpassed test2: ', 'color: red')
console.log((JSON.stringify(newMap(nums, addTwo)) === JSON.stringify(nums.map(addTwo))))
console.log('Your Test2 newMap output:')
console.log(JSON.stringify(newMap(nums, addTwo)))
console.log('Should match built in map output:')
console.log(JSON.stringify(nums.map(addTwo)))
console.groupEnd()

console.group('newSome')
console.log('%cpassed test1: ', 'color: red')
console.log(JSON.stringify(newSome(nums, isNegative)) === JSON.stringify(nums.some(isNegative)))
console.log('Your test1 newSome output:')
console.log(newSome(nums, isNegative))
console.log('Should match built in some output:')
console.log(nums.some(isNegative))
console.log('%cpassed test2: ', 'color: red')
console.log(JSON.stringify(newSome(nums, isPositive)) === JSON.stringify(nums.some(isPositive)))
console.log('Your test2 newSome output:')
console.log(newSome(nums, isPositive))
console.log('Should match built in some output:')
console.log(nums.some(isPositive))
console.log('%cpassed test3: ', 'color: red')
console.log(JSON.stringify(newSome(nums, isAbove10)) === JSON.stringify(nums.some(isAbove10)))
console.log('Your test3 newSome output:')
console.log(newSome(nums, isAbove10))
console.log('Should match built in some output:')
console.log(nums.some(isAbove10))
console.log('%cpassed test4: ', 'color: red')
console.log(JSON.stringify(newSome(nums, isAbove678)) === JSON.stringify(nums.some(isAbove678)))
console.log('Your test4 newSome output:')
console.log(newSome(nums, isAbove678))
console.log('Should match built in some output:')
console.log(nums.some(isAbove678))
console.groupEnd()

console.group('newFind')
console.log('%cpassed test1: ', 'color: red')
console.log(JSON.stringify(newFind(nums, isNegative)) === JSON.stringify(nums.find(isNegative)))
console.log('Your test1 newFind output:')
console.log(newFind(nums, isNegative))
console.log('Should match built in find output:')
console.log(nums.find(isNegative))
console.log('%cpassed test2: ', 'color: red')
console.log(JSON.stringify(newFind(nums, isPositive)) === JSON.stringify(nums.find(isPositive)))
console.log('Your test2 newFind output:')
console.log(newFind(nums, isPositive))
console.log('Should match built in find output:')
console.log(nums.find(isPositive))
console.log('%cpassed test3: ', 'color: red')
console.log(JSON.stringify(newFind(nums, isAbove10)) === JSON.stringify(nums.find(isAbove10)))
console.log('Your test3 newFind output:')
console.log(newFind(nums, isAbove10))
console.log('Should match built in find output:')
console.log(nums.find(isAbove10))
console.log('%cpassed test4: ', 'color: red')
console.log(JSON.stringify(newFind(nums, isAbove678)) === JSON.stringify(nums.find(isAbove678)))
console.log('Your test4 newFind output:')
console.log(newFind(nums, isAbove678))
console.log('Should match built in find output:')
console.log(nums.find(isAbove678))
console.groupEnd()

console.group('newFindIndex')
console.log('%cpassed test1: ', 'color: red')
console.log(JSON.stringify(newFindIndex(nums, isNegative)) === JSON.stringify(nums.findIndex(isNegative)))
console.log('Your test1 newFindIndex output:')
console.log(newFindIndex(nums, isNegative))
console.log('Should match built in findIndex output:')
console.log(nums.findIndex(isNegative))
console.log('%cpassed test2: ', 'color: red')
console.log(JSON.stringify(newFindIndex(nums, isPositive)) === JSON.stringify(nums.findIndex(isPositive)))
console.log('Your test2 newFindIndex output:')
console.log(newFindIndex(nums, isPositive))
console.log('Should match built in findIndex output:')
console.log(nums.findIndex(isPositive))
console.log('%cpassed test3: ', 'color: red')
console.log(JSON.stringify(newFindIndex(nums, isAbove10)) === JSON.stringify(nums.findIndex(isAbove10)))
console.log('Your test3 newFindIndex output:')
console.log(newFindIndex(nums, isAbove10))
console.log('Should match built in findIndex output:')
console.log(nums.findIndex(isAbove10))
console.log('%cpassed test4: ', 'color: red')
console.log(JSON.stringify(newFindIndex(nums, isAbove678)) === JSON.stringify(nums.findIndex(isAbove678)))
console.log('Your test4 newFindIndex output:')
console.log(newFindIndex(nums, isAbove678))
console.log('Should match built in findIndex output:')
console.log(nums.findIndex(isAbove678))
console.groupEnd()

console.group('newEvery')
console.log('%cpassed test1: ', 'color: red')
console.log(JSON.stringify(newEvery(nums, isNegative)) === JSON.stringify(nums.every(isNegative)))
console.log('Your test1 newEvery output:')
console.log(newEvery(nums, isNegative))
console.log('Should match built in every output:')
console.log(nums.every(isNegative))
console.log('%cpassed test2: ', 'color: red')
console.log(JSON.stringify(newEvery(nums, isPositive)) === JSON.stringify(nums.every(isPositive)))
console.log('Your test2 newEvery output:')
console.log(newEvery(nums, isPositive))
console.log('Should match built in every output:')
console.log(nums.every(isPositive))
console.log('%cpassed test3: ', 'color: red')
console.log(JSON.stringify(newEvery(nums, isAbove10)) === JSON.stringify(nums.every(isAbove10)))
console.log('Your test3 newEvery output:')
console.log(newEvery(nums, isAbove10))
console.log('Should match built in every output:')
console.log(nums.every(isAbove10))
console.log('%cpassed test4: ', 'color: red')
console.log(JSON.stringify(newEvery(nums, isAbove678)) === JSON.stringify(nums.every(isAbove678)))
console.log('Your test4 newEvery output:')
console.log(newEvery(nums, isAbove678))
console.log('Should match built in every output:')
console.log(nums.every(isAbove678))
console.groupEnd()

console.group('newFilter')
console.log('%cpassed test1: ', 'color: red')
console.log(JSON.stringify(newFilter(nums, isNegative)) === JSON.stringify(nums.filter(isNegative)))
console.log('Your test1 newFilter output:')
console.log(newFilter(nums, isNegative))
console.log('Should match built in filter output:')
console.log(nums.filter(isNegative))
console.log('%cpassed test2: ', 'color: red')
console.log(JSON.stringify(newFilter(nums, isPositive)) === JSON.stringify(nums.filter(isPositive)))
console.log('Your test2 newFilter output:')
console.log(newFilter(nums, isPositive))
console.log('Should match built in filter output:')
console.log(nums.filter(isPositive))
console.log('%cpassed test3: ', 'color: red')
console.log(JSON.stringify(newFilter(nums, isAbove10)) === JSON.stringify(nums.filter(isAbove10)))
console.log('Your test3 newFilter output:')
console.log(newFilter(nums, isAbove10))
console.log('Should match built in filter output:')
console.log(nums.filter(isAbove10))
console.log('%cpassed test4: ', 'color: red')
console.log(JSON.stringify(newFilter(nums, isAbove678)) === JSON.stringify(nums.filter(isAbove678)))
console.log('Your test4 newFilter output:')
console.log(newFilter(nums, isAbove678))
console.log('Should match built in filter output:')
console.log(nums.filter(isAbove678))
console.groupEnd()
