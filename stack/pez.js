/** ABSTRACT DATA TYPE STACK 
 * @property store -> array degli elementi dello stack
 * @property top -> posizione della testa dello stack
 * @method push -> inserisce un elemento nella lista
 * @method pop -> recupera e rimuove l'elemento dalla testa della lista
 * @method peek -> recupera l'elemento dalla testa dello stack
 * @method length -> grandezza dello stack
 * @method clear -> resetta il puntatore alla testa dello stack
*/
class Stack {
    constructor() {
        this.store = []
        this.top = 0
    }

    length() {
        return this.store.length
    }

    clear() {
        this.top = 0
    }

    push(data) {
        this.store[this.top++] = data
    }

    pop() {
        return this.store[--this.top]
    }

    peek() {
        return this.store[this.top === 0 ? this.top : this.top - 1]
    }
}

const stackOriginario = new Stack()

const stackAppoggio = new Stack()

const stackFinale = new Stack()

stackOriginario.push('Verde')
stackOriginario.push('Blu')
stackOriginario.push('Giallo')
stackOriginario.push('Rosso')
stackOriginario.push('Giallo')
stackOriginario.push('Verde')
stackOriginario.push('Rosso')
stackOriginario.push('Blu')
stackOriginario.push('Blu')
console.log(stackOriginario.store)
// trasporta sullo stack di appoggio solo quelli diversi da giallo
while (stackOriginario.top > 0) {
    if (stackOriginario.peek() == "Giallo") {
        stackOriginario.pop()
    }
    else {
        stackAppoggio.push(stackOriginario.pop())
    }
}
// rimette in ordine sullo stack finale
while (stackAppoggio.top > 0) {
    stackFinale.push(stackAppoggio.pop())
}
console.log(stackFinale.store)

