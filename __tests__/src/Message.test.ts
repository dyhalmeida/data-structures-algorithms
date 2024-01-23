import { describe, it, expect } from 'vitest'
import { Message } from '../../src/Message'

describe('Message', () => {
    it('should return a Hello World message', () => {
        expect(Message.getMessage()).toBe('Hello World')
    })
})