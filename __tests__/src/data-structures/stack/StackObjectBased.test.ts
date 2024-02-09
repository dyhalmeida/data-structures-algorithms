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

    it('should get the top element of the stack', () => {
        const stack = new StackObjectBased<number>()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        const topItem = stack.peek()
        expect(topItem).toBe(3)
    })

    it('should check if the stack is empty', () => {
        const stack = new StackObjectBased<number>()
        expect(stack.isEmpty()).toBeTruthy()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.isEmpty()).toBeFalsy()
    })

    it('should get the stack size', () => {
        const stack = new StackObjectBased<number>()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.size()).toBe(3)
    })

    it('should clear the stack', () => {
        const stack = new StackObjectBased<number>()
        stack.push(1)
        stack.push(2)
        stack.push(3)
        expect(stack.size()).toBe(3)
        stack.clear()
        expect(stack.size()).toBe(0)
    })

