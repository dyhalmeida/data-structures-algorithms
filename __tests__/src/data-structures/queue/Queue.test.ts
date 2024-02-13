import { describe, it, expect } from 'vitest'
import { Queue } from '../../../../src/data-structures'

describe('Queue', () => {
    it('should add items to the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)
        expect(queue.size()).toBe(4)
    })

    it('should remove items from the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)
        expect(queue.size()).toBe(4)
        const item = queue.denqueue()
        expect(item).toBe(1)
        expect(queue.size()).toBe(3)
    })

    it('should display the first item in the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)
        expect(queue.peek()).toBe(1)
    })

    it('should check if the queue is empty', () => {
        const queue = new Queue<number>()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.enqueue(4)
        expect(queue.isEmpety()).toBeFalsy()
        queue.clear()
        expect(queue.isEmpety()).toBeTruthy()
    })

    it('should check the queue size', () => {
        const queue = new Queue<number>()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.size()).toBe(3)
    })

    it('should clear the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.size()).toBe(3)
        queue.clear()
        expect(queue.size()).toBe(0)
    })

    it('should convert the queue to a string', () => {
        const queue = new Queue<number>()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.toString()).toBe('1, 2, 3')
    })

    it('should return undefined when trying to remove an item from the empty queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)
        queue.clear()
        expect(queue.denqueue()).toBeUndefined()
    })

})
