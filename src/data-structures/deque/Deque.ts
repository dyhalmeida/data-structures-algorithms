export class Deque<T> {
    private count = 0
    private lowestCount = 0
    private items: {[key: string]: T} = {}

    constructor() {}

    addToFront(value: T) {
        if (this.isEmpty()) {
            this.addToBack(value)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = value
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i-1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = value
        }
    }

    addToBack(value: T) {
        this.items[this.count] = value
        this.count++
    }

    removeToFront() {
        if (this.isEmpty()) return undefined
        const item = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return item
    }

    removeToBack() {
        if (this.isEmpty()) return undefined
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peekFront() {
        if (this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }

    peekBack() {
        if (this.isEmpty()) return undefined
        return this.items[this.count - 1]
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString() {
        if (this.isEmpty()) return ''
        let objStr = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            objStr = `${objStr}, ${this.items[i]}`
        }
        return objStr
    }
}