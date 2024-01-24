import { describe, it, expect } from "vitest";

declare global {
    interface Array<T> {
        insertToFirstPosition(value: any): void
    }
}

describe('Arrays', () => {

    it('should initialize an empty array', () => {
        const daysOfWeek: string[] = []
        expect(daysOfWeek.length).toBe(0)
    })

    it('should initialize an array with the days of the week', () => {
        const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]
        expect(daysOfWeek.length).toBe(7)
    })

    it('should access an array item through its index', () => {
        const daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]
        expect(daysOfWeek[5]).toBe('Friday')
    })

    it('should insert an item at the end of the array', () => {
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        
        expect(numbers.length).toBe(10)
        
        numbers[numbers.length] = 10
        
        expect(numbers.length).toBe(11)
        expect(numbers[10]).toBe(10)

        numbers.push(11)
        
        expect(numbers.length).toBe(12)
        expect(numbers[11]).toBe(11)
    })

    it('should insert an item at the beginning of the array', () =>{
        Array.prototype.insertToFirstPosition = function(value: any) {
            for(let i = this.length; i >= 0; i--) {
                const index = i
                const newIndex = index - 1
                this[index] = this[newIndex]
                if (index === 0) this[index] = value
            }
        }

        const numbers = [1, 2, 3, 4, 5]
        numbers.insertToFirstPosition(20)

        expect(numbers.length).toBe(6)
        expect(numbers[0]).toBe(20)

        numbers.unshift(11)

        expect(numbers.length).toBe(7)
        expect(numbers[0]).toBe(11)
    })

    it('should remove an item from the end of the array', () => {
        const numbers = [1,2,3,4,5]
        expect(numbers[4]).toBe(5)
        numbers.pop()
        expect(numbers[4]).toBeUndefined()
    })
})