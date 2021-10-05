const {returnTwo, greeting, add, multiply, divide, subtract} = require('../functions');


test('returnTwo', () => {
    expect(returnTwo()).toBe(2)
});

test('greeting', () => {
    expect(greeting('James')).toEqual('Hello, James');
    expect(greeting('Jill')).toEqual('Hello, Jill')
});

// Challenge
describe('Math Functions', () => {
    test('add', () => {
        expect(add(1, 2)).toBe(3)
    });
    
    test('multiply', () => {
        expect(multiply(5, 4)).toBe(20)
    });
    
    test('divide', () => {
        expect(divide(8, 2)).toBe(4)
    });
    
    test('subtract', () => {
        expect(subtract(10, 2)).toBe(8)
    });
});