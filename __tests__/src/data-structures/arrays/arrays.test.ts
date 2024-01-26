import { describe, it, expect } from "vitest";

declare global {
    interface Array<T> {
        insertToFirstPosition(value: any): void
        removeToFirstPosition(): any
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

    it('should remove an item from the beginning of the array', () => {
        Array.prototype.removeToFirstPosition = function() {
            for(let i = 0; i < this.length; i++) {
                this[i] = this[i + 1]
            }
            // re-index
            const newArray = []
            for(let i = 0; i < this.length; i++) {
                if (this[i] !== undefined) newArray.push(this[i] as never)
            }
            return newArray
        }

        let numbers = [1,2,3,4,5]
        expect(numbers.length).toBe(5)

        numbers = numbers.removeToFirstPosition()
        expect(numbers[0]).toBe(2)

        numbers.shift()
        expect(numbers[0]).toBe(3)
    })

    it('should remove a number of elements from an array, starting from the specified index, including the value of the index itself', () => {
        const numbers = [1,2,3,4,5,6,7,8]
        expect(numbers).toEqual([1,2,3,4,5,6,7,8])

        numbers.splice(4, 2)
        expect(numbers).toEqual([1,2,3,4,7,8])

        numbers.splice(0, 3)
        expect(numbers).toEqual([4,7,8])
    })

    it('should iterate through the items of a two-dimensional array', () => {
        const averageTemp = [
            [72, 75, 79, 79, 81, 81],
            [81, 79, 75, 75, 73, 73]
        ]

        for(let i = 0; i < averageTemp.length; i++) {
            for(let j = 0; j < averageTemp[i].length; j++) {
                expect(averageTemp[i][j]).toBeDefined()
            }
        }
    })

    it('should iterate through the items of a multidimensional array', () => {
        const averageTemp = [
            [
                [72, 75, 79, 79, 81, 81],
            ], 
            [
                [72, 75, 79, 79, 81, 81],
            ],
            [
                [72, 75, 79, 79, 81, 81],
            ]
        ]
        
        for(let x = 0; x < averageTemp.length; x++) {
            for(let y = 0; y < averageTemp[x].length; y++) {
                for(let z = 0; z < averageTemp[x][y].length; z++) {
                    expect(averageTemp[x][y][z]).toBeDefined()
                }
            }
        }
    })

    it('should join/concatenate elements of two or more arrays using Array.concat', () => {
        const zero = 0
        const positiveNumbers = [1,2,3,4,5]
        const negativeNumbers = [-5,-4,-3,-2,-1]
        const allNumbers = negativeNumbers.concat(zero, positiveNumbers)
        expect(allNumbers).toEqual([-5,-4,-3,-2,-1,0,1,2,3,4,5])
    })

    it('should return false if the number array contains an odd number using Array.every', () => {
        const isEven = (value: number) => value % 2 === 0

        const numers = [1,2,3,4]

        expect(numers.every(isEven)).toBeFalsy()
    })

    it('should return true if the number array contains an even number using Array.some', () => {
        const isEven = (value: number) => value % 2 === 0

        const numers = [1,2,3,4]

        expect(numers.some(isEven)).toBeTruthy()
    })

    it('should iterate the array using Array.forEach', () => {
        const numbers = [1,2,3,4,5]
        numbers.forEach((number) => {
            expect(number).toBeDefined()
            expect(number).toBeTypeOf('number')
        })
    })

    it('should map the array by setting true for even numbers and false for odd numbers using Array.map', () => {
        const isEven = (value: number) => value % 2 === 0

        const numbers = [1,2,3,4,5,6]
        const mapped = numbers.map(isEven)
        expect(mapped).toStrictEqual([false, true, false, true, false, true])
    })

    it('should return an array with only even numbers using Array.filter', () => {
        const isEven = (value: number) => value % 2 === 0
        const numbers = [1,2,3,4,5,6]
        const evens = numbers.filter(isEven)
        expect(evens).toStrictEqual([2,4,6])
    })

    it('should sum all the numbers in the array using Array.reduce', () => {
        const numbers =[10,20,30,40]
        const total = numbers.reduce((previous, current) => {
            return previous + current
        }, 0)
        expect(total).toBe(100)
    })

    it('should iterate the array using for...of', () => {
        const numbers = [1,2,3,4,5]
       for (const number of numbers) {
        expect(number).toBeDefined()
        expect(number).toBeTypeOf('number')
       }
    })

    it('should access the values of an array through @@iterator', () => {
        const numbers = [1,2,3,4,5]
        const iterator = numbers[Symbol.iterator]()
        expect(iterator.next().value).toBe(1)
        expect(iterator.next().value).toBe(2)
        expect(iterator.next().value).toBe(3)
        expect(iterator.next().value).toBe(4)
        expect(iterator.next().value).toBe(5)
        expect(iterator.next().value).toBeUndefined()
    })

    it('should access the values of an array through @@iterator entries and return [index, value]', () => {
        const numbers = [1,2,3,4,5]
        const entries = numbers.entries()
        expect(entries.next().value).toStrictEqual([0, 1])
        expect(entries.next().value).toStrictEqual([1, 2])
        expect(entries.next().value).toStrictEqual([2, 3])
        expect(entries.next().value).toStrictEqual([3, 4])
        expect(entries.next().value).toStrictEqual([4, 5])
        expect(entries.next().done).toBeTruthy()
    })

    it('should access the values of an array through @@iterator keys and return index', () => {
        const numbers = [1,2,3,4,5]
        const entries = numbers.keys()
        expect(entries.next().value).toBe(0)
        expect(entries.next().value).toBe(1)
        expect(entries.next().value).toBe(2)
        expect(entries.next().value).toBe(3)
        expect(entries.next().value).toBe(4)
        expect(entries.next().done).toBeTruthy()
    })

    it('should access the values of an array through @@iterator values and return value', () => {
        const numbers = [1,2,3,4,5]
        const entries = numbers.values()
        expect(entries.next().value).toBe(1)
        expect(entries.next().value).toBe(2)
        expect(entries.next().value).toBe(3)
        expect(entries.next().value).toBe(4)
        expect(entries.next().value).toBe(5)
        expect(entries.next().done).toBeTruthy()
    })

    it('should create a copy of an array using Array.from', () => {
        const numbers = [1,2,3,4,5]
        const clone = Array.from(numbers)
        expect(clone).toStrictEqual(numbers)
    })

    it('should create an array using Array.of', () => {
      const numbers = Array.of(1,2,3,4,5)
      expect(numbers).toStrictEqual([1,2,3,4,5])
    })

    it('should create an array of size 5, with all items equal to 1, using Array.fill', () => {
        const array = Array(5).fill(1)
        expect(array).toStrictEqual([1,1,1,1,1])
    })

    it('should fill an existing array from index 1 to 3, with values equal to 10, using Array.fill', () => {
        const numbers = [1,2,3,4,5,6,7,8]
        numbers.fill(10, 1, 4)
        expect(numbers).toStrictEqual([1,10,10,10,5,6,7,8])
    })

})