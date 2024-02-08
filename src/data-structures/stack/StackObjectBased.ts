export class StackObjectBased<T> {

    private count = 0
    private items: { [key:number]: T } = {}

    constructor() {}

    push(value: T) {
        this.items[this.count] = value
        this.count++
    }

    pop() {
        if (this.isEmpty()) return undefined
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count === 0
    }

    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.count - 1]
    }

    clear() {
        this.items = {}
        this.count = 0
    }

    toString() {
        if (this.isEmpty()) return ''
        let objStr =  `${this.items[0]}`
        for (let i = 1; i < this.count; i++) {
            objStr += `${this.items[i]}`
        }
        return objStr
    }
}