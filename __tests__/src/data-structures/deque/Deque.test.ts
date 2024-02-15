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

})
