import { describe, it, expect } from 'vitest'
import { StackObjectBased } from '../../../../src/data-structures/stack/StackObjectBased'

describe('StackObejctBased', () => {
    it('should add an element to the top of the stack', () => {
        const stack = new StackObjectBased<number>()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.peek()).toBe(3)
    })

    it('should remove an element from the top of the stack', () => {
        const stack = new StackObjectBased<number>()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.peek()).toBe(3)
        const removed = stack.pop()
        expect(removed).toBe(3)
        expect(stack.peek()).toBe(2)
    })

