import { describe, it, expect } from 'vitest'
import { DecimalToBinary } from '../../../../../src/data-structures'

describe('DecimalToBinary', () => {
   
    it('should convert the value 10 in decimal to binary', () => {
        expect(new DecimalToBinary().execute(10)).toBe('1010')
    })

    it('should convert the value 20 in decimal to binary', () => {
        expect(new DecimalToBinary().execute(20)).toBe('10100')
    })

    it('should convert the value 100 in decimal to binary', () => {
        expect(new DecimalToBinary().execute(100)).toBe('1100100')
    })

})