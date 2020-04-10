class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.fuoriUltimo = fuoriUltimo;
        this.dequeue = dequeue;
        this.dentroPrimo = dentroPrimo;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}
// aggiunge un elemento alla fine della coda
function enqueue(element) {
    this.dataStore.push(element);
}
// rimuove un elemento dalla fine della coda
function fuoriUltimo() {
    this.dataStore.pop();
}
// rimuove un elemento dall'inizio della coda
function dequeue() {
    return this.dataStore.shift();
}
// aggiunge un elemento all'inizio della coda
function dentroPrimo(element) {
    return this.dataStore.unshift(element);
}
// legge l'elemento all'inizio della coda
function front() {
    return this.dataStore[0];
}
// legge l'ultimo elemento della coda
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
// visualizza tutti gli elementi di una coda
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
// esamina se una coda è vuota
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

var codaBifronte = new Queue()
// aggiunge in fondo
codaBifronte.enqueue("in coda")
codaBifronte.enqueue("ancora più dietro")
// aggiunge in testa 
codaBifronte.dentroPrimo("in testa")
codaBifronte.dentroPrimo("ancora più avanti")

console.log(codaBifronte.toString())

// toglie dal fondo
codaBifronte.fuoriUltimo()

console.log(codaBifronte.toString())

// toglie dalla testa
codaBifronte.dequeue()
console.log(codaBifronte.toString())



