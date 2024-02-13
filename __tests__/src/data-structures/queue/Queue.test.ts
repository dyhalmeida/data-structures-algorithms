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

})
