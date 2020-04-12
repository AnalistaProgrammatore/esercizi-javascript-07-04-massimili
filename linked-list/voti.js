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
    this.show = show;
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

function show() {
    var currNode = this.head;
    while (currNode.next != null) {
        currNode = currNode.next;
    }
    console.log(currNode.element);
}
var ultimoInserito = "head"
var Voti = new LList();
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var leggiInput = function () {
    rl.question("Digita il voto da inserire\n"
        + "oppure digita x per uscire\n"
        , function (line) {
            switch (line) {
                case "x":
                    console.log("\nlista voti")
                    Voti.display()
                    return rl.close();
                default:
                    Voti.insert(line, ultimoInserito);
                    ultimoInserito = line
            }
            leggiInput();
        });
};
leggiInput();
