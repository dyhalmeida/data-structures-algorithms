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
})
