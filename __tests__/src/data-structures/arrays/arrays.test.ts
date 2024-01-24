import { describe, it, expect } from "vitest";
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

})