const {returnTwo, greeting, add} = require('../functions');

test('returnTwo', () => {
    expect(returnTwo()).toBe(2)
});

test('greeting', () => {
    expect(greeting('James')).toEqual('Hello, James');
    expect(greeting('Jill')).toEqual('Hello, Jill')
});

test('add', () => {
    expect(add(1, 2)).toBe(3)
});