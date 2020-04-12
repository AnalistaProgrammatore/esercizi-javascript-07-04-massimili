function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element);
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
function Patient(name, code) {
    this.name = name;
    this.code = code;
}
function dequeue() {
    var priority = this.dataStore[0].code;
    var posizione
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code > priority) {
            priority = this.dataStore[i].code;
            posizione = i
        }
    }
    return this.dataStore.splice(posizione, 1);
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " codice: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var ed = new Queue();

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var leggiInput = function () {
    rl.question("Scegli una funzione:\n"
        + "digita nome, priorità = Aggiungi un paziente con la priorità separati da virgola. Oppure\n"
        + "b = Chiama a visita\n"
        + "c = Vedi coda\n"
        + "d = Esci\n"
        , function (line) {

            switch (line) {
                case "b":
                    var seen = ed.dequeue();
                    console.log("Paziente a visita: " + seen[0].name);
                    break;
                case "c":
                    console.log("Pazienti in coda: ")
                    console.log(ed.toString());
                    break
                case "d":
                    return rl.close();
                default:
                    var input = line.split(",")
                    var p = new Patient(input[0], input[1]);
                    ed.enqueue(p);

            }
            leggiInput();
        });
};

leggiInput();


