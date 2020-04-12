function Node(element) {
    this.element = element;
    this.next = null;
}
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.trovaProssimo = trovaProssimo;
    this.remove = remove;
}
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}
function trovaProssimo(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        (currNode.element != item)) {
        currNode = currNode.next;
    }
    return currNode.next;
}
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
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

function back(n) {
    for (i = 0; i < n + 1; i++) {
        prossimo = cities.findPrevious(elemento2)
        elemento2 = prossimo.element
    }
    return prossimo.element
}
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();



var elemento = "Alma"
var elemento2 = elemento
var prossimo = new Node()
var indietro = 2
var destinazione = back(indietro)

cities.remove(elemento)
cities.insert(elemento, destinazione)
console.log()
console.log("Sposto indietro " + elemento + " di " + indietro + " posti")
cities.display()
