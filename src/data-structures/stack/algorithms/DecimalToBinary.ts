import { StackObjectBased } from "../StackObjectBased";

export class DecimalToBinary {
    private stack: StackObjectBased<number>

    constructor() {
        this.stack = new StackObjectBased()
    }

    private convertDecimalToBinary(decimalValue: number) {
        let num = decimalValue
        let rem;
        while(num > 0) {
                rem = Math.floor(num % 2)
                this.stack.push(rem)
                num = Math.floor(num / 2)
        }
    }

    execute(decimalValue: number) {
        let result = ''
        this.convertDecimalToBinary(decimalValue)
        while(!this.stack.isEmpty()) {
            result += this.stack.pop()?.toString()
        }
        return result
    }
}
