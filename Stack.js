class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

/** ABSTRACT DATA TYPE per le linked list
 * @property head -> Nodo di testa
 * @property length -> conta i nodi della lista
 * @method clear -> ritorna il primo elemento della lista
 * @method peek -> ritorna l'ultimo elemento della lista
 * @method find -> cerca un elemento nella lista
 * @method findNth -> recupera l'elemento all aposizione specificata
 * @method insert(data) -> inserisce un elemento nella lista
 * @method remove -> rimuove un elemento dalla lista
 * @method removeNth -> rimuove l'elemento dalla lista alla posizione specificata
 * @method insertFirst -> inserisce un elemento all'inizio della lista
 * @method push -> inserisce un elemento alla fine della lista
 * @method insertAfter -> inserisce un elemento dopo un altro elemento della lista
 * @method insertBefore -> inserisce un elemento prima di un altro elemento della lista
 * @method insertNth -> inserisce un elemento alla posizione specificata nella lista
 * @method display -> stampa gli elementi della lista
 * @method pop -> recupera e rimuove l'ultimo elemento della lista
 */
class LinkedList {
    constructor() {
        this.head = new Node(null)
        this.length = 0
    }

    insert(data, compare) {
        if (this.length === 0) return this.insertFirst(data)
        if (!compare) return this.push(data)
        const newNode = new Node(data)
        const current = this.find(compare)
        newNode.next = current.next // imposto il vecchio next di current al nuovo next di newNode
        current.next = newNode // imposto il nuovo next di current al nuovo nodo
        this.length++
    }

    remove(compare) {
        if (this.length === 0) return
        const prev = this.findPrev(compare)
        if (prev !== null) {
            prev.next = prev.next.next
        }
    }

    insertFirst(data) {
        const newNode = new Node(data)
        this.head = newNode
        this.length++
    }

    push(data) {
        const newNode = new Node(data)
        const last = this.peek()
        last.next = newNode
        this.length++
    }

    find(compare) {
        let currentNode = this.head
        while (compare != currentNode.data) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    findPrev(compare) {
        let currentNode = this.head
        let prev = null
        while (currentNode.next !== null && compare != currentNode.data) {
            prev = currentNode
            currentNode = currentNode.next
        }
        return prev
    }

    clear() {
        return this.head
    }

    peek() {
        let last = this.head
        while (last.next !== null) {
            last = last.next
        }
        return last
    }

    display() {
        let currentNode = this.head
        while (currentNode !== null) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }
    pop() {
        var ultimo = this.peek()
        console.log("pop elemento " + ultimo.data)
        this.remove(ultimo)
    }

}

const stack = new LinkedList()

stack.push('Marco')
stack.push('Davide')
stack.push('Simone')
stack.push('Francesco')
stack.push('Luca')

console.log('lunghezza stack', stack.length)
stack.pop()

stack.push('Matteo')

console.log('testa dello stack', stack.peek().data)

console.log('testa dello stack dopo il clear', stack.clear().data)






