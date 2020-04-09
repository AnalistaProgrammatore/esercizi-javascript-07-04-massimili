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

const stack = new Stack()

const espressione = "2*3+(4-5*2*10/(9-8)"

for (i = 0; i < espressione.length; i++) {
    if (espressione[i] == "(") {
        stack.push(i + 1)
        console.log(i + 1)
    }
    if (espressione[i] == ")") {
        stack.pop()
    }
}
let posizione = stack.pop()
if (posizione != undefined) {
    console.log("Rimane aperta la parentesi in posizione " + posizione)
}
else {
    console.log("Parentesi OK")
}
