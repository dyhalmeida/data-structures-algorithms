export class StackArrayBased<T> {

    constructor(public items: T[] = []) {}

    /**
     * Método que adiciona um novo elemento (ou
     * vários elementos) no topo da pilha.
     */
    push(value: T) {
        this.items.push(value)
    }

    /**
     * Método que remove o elemento que está no topo da pilha
     */
    pop() {
        return this.items.pop()
    }

    /**
     * Método que devolve o elemento que está no topo da pilha. A
     * pilha não é modificada (o elemento não é removido; ele é devolvido
     * apenas como informação).
     */
    peek() {
        const index = this.items.length - 1
        return this.items[index]
    }

    /**
     * Método que devolve true se a pilha não contiver nenhum
     * elemento e false se o tamanho da pilha for maior que 0
     */
    isEmpty() {
        return this.items.length === 0
    }

    /**
     * Método que remove todos os elementos da pilha
     */
    clear() {
        this.items = []
    }

    /**
     * Método que devolve o número de elementos contidos na pilha
     */
    size() {
        return this.items.length
    }
}
