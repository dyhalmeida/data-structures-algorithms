export class Queue<T> {
    private count = 0
    private lowestCount = 0
    private items: {[key: string]: T} = {}
    
    constructor() {}

    enqueue(value: T) {
        this.items[this.count] = value
        this.count++
    }

    denqueue() {
        if (this.isEmpety()) return undefined
        const item = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return item
    }

    peek() {
        if (this.isEmpety()) return undefined
        return this.items[this.lowestCount]
    }

    isEmpety() {
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
        if (this.isEmpety()) return ''
        let objStr = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++) {
            objStr = `${objStr}, ${this.items[i]}`
        }
        return objStr
    }
}