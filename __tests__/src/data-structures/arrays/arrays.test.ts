import { describe, it, expect } from "vitest";
describe('Arrays', () => {

    it('should initialize an empty array', () => {
        const daysOfWeek: string[] = []
        expect(daysOfWeek.length).toBe(0)
    })

})