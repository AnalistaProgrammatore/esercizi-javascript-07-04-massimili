/*
* PROGRAMMA ANCORA DA CORREGGERE
*/
function Node(element) {
    this.element = element;
    this.next = "head";
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.trovaProssimo = trovaProssimo;
    this.remove = remove;
    this.show = show;
}
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == "head")) {
        prevNode.next = prevNode.next.next;
    }
}
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == "head") &&
        (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}
function trovaProssimo(item) {
    var currNode = this.head;
    while (!(currNode.next == "head") &&
        (currNode.element != item)) {
        currNode = currNode.next;
    }
    return currNode.next;
}
function display() {
    var currNode = this.head;
    while (!(currNode.next == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function show() {
    var currNode = this.head;
    while (currNode.next != "head") {
        currNode = currNode.next;
    }
    console.log(currNode.element);
}
function advance(n) {
    for (i = 1; i <= n; i++) {
        prossimo = Soldati.trovaProssimo(elemento2)
        elemento2 = prossimo.element
    }
    return prossimo.element
}

var Soldati = new LList()

var ultimoInserito = "head"

var totaleSoldati = 10
var fattore = 3

for (i = 1; i <= totaleSoldati; i++) {
    Soldati.insert(i, ultimoInserito);
    ultimoInserito = i

}
Soldati.display()


var elemento2 = "head"
var prossimo = new Node()
var precedente = new Node()
while (totaleSoldati > 2) {
    var destinazione = advance(fattore)
    var precedente = findPrevious(destinazione)
    remove(destinazione)
    console.log("Ucciso il numero " + destinazione)
    totaleSoldati = totaleSoldati - 1
    elemento2 = precedente
}
Soldati.display()
