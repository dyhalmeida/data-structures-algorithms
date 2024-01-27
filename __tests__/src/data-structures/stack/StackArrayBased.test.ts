import { describe, it, expect } from 'vitest'

import { StackArrayBased } from '../../../../src/data-structures'

describe('StackArrayBased', () => {

    it('should add an element to the top of the stack', () => {
        const stack = new StackArrayBased<number>([1,2,3,4])
        stack.push(5)
        expect(stack.peek()).toBe(5)
    })

    it('should remove an element from the top of the stack', () => {
        const stack = new StackArrayBased<number>([1,2,3,4,5])
        expect(stack.size()).toBe(5)
        const element = stack.pop()
        expect(element).toBe(5)
        expect(stack.size()).toBe(4)
    })

    it('should get the top element of the stack', () => {
        const stack = new StackArrayBased<string>(['Diego', 'Laura', 'Bruna', 'Maria', 'Marcos'])
        const lastElement = stack.peek()
        expect(lastElement).toBe('Marcos')
    })

    it('should check if the stack is empty', () => {
        const stack = new StackArrayBased<string>(['Diego', 'Laura', 'Bruna', 'Maria', 'Marcos'])
        expect(stack.isEmpty()).toBeFalsy()
    })

    it('should get the stack size', () => {
        const stack = new StackArrayBased<number>([1,2,3,4,5])
        expect(stack.size()).toBe(5)
    })

    it('should clear the stack', () => {
        const stack = new StackArrayBased<number>([1,2,3,4,5])
        expect(stack.size()).toBe(5)
        stack.clear()
        expect(stack.size()).toBe(0)
    })

})