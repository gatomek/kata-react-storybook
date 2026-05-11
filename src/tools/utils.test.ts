import {test, expect} from 'vitest';
import {add, div, mult, subtrack} from './utils.ts';

test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
})

test( "subtrack 1 - 2 to equal -1", () => {
    expect(subtrack( 1,2)).toBe(-1);
})

test( "mult 1 * 2 to equal 2", () => {
    expect( mult(1,2)).toBe( 2);
})

test( "div 1 / 2 to equal 0.5", () => {
    expect( div(1,2)).toBe( 0.5);
})
