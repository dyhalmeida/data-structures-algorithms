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

