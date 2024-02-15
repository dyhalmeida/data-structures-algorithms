import { describe, it, expect } from 'vitest'
import { Deque } from '../../../../src/data-structures'

describe('Deque', () => {

    it('should insert items at the end of the deque', () => {
        const deque = new Deque<number>()
        deque.addToBack(3)
        deque.addToBack(2)
        deque.addToBack(1)
        expect(deque.peekBack()).toBe(1)
    })

    it('should remove an item from the end of the deque', () => {
        const deque = new Deque<number>()
        deque.addToBack(3)
        deque.addToBack(2)
        deque.addToBack(1)
        expect(deque.peekBack()).toBe(1)

        const removed = deque.removeToBack()
        expect(removed).toBe(1)
        expect(deque.peekBack()).toBe(2)
    })

    it('should insert items at the beginning of the deque', () => {
        const deque = new Deque<number>()
        deque.addToFront(3)
        deque.addToFront(2)
        deque.addToFront(1)
        expect(deque.peekFront()).toBe(1)
        expect(deque.peekBack()).toBe(3)
    })

    it('should remove an item from the beginning of the deque', () => {
        const deque = new Deque<number>()
        deque.addToFront(3)
        deque.addToFront(2)
        deque.addToFront(1)
        expect(deque.peekFront()).toBe(1)
        expect(deque.peekBack()).toBe(3)

        const removed = deque.removeToFront()
        expect(removed).toBe(1)
        expect(deque.peekFront()).toBe(2)
    })

    it('should get an item from the end of the deque', () => {
        const deque = new Deque<number>()
        deque.addToBack(3)
        deque.addToBack(2)
        deque.addToBack(1)
        expect(deque.peekBack()).toBe(1)
    })

    it('should get an item from the start of the deque', () => {
        const deque = new Deque<number>()
        deque.addToBack(3)
        deque.addToBack(2)
        deque.addToBack(1)
        expect(deque.peekFront()).toBe(3)
    })
})
