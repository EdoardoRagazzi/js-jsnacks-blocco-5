// nome repo di oggi: js-jsnacks-blocco-5
// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

//---------------------------------------------1--------------------------------------//
// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var bicicletta = [
    {
        nome: 'bianchi',
        peso: 12
    },
    {
        nome: 'trek',
        peso: 9
    },
    {
        nome: 'giant',
        peso: 14
    }
];

console.log(bicicletta);
var pesoMin = bicicletta[0];


for (var i = 1; i < bicicletta.length; i++) {

    if (bicicletta[i].peso < pesoMin.peso) {
        pesoMin = bicicletta[i];

    }
};
console.log(pesoMin);


//---------------------------------------------2--------------------------------------//
// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var zucchine = [
    {
        varieta: 'zucchina1',
        peso: 23,
        lunghezza: 8

    },
    {
        varieta: 'zucchina2',
        peso: 2,
        lunghezza: 7

    },
    {
        varieta: 'zucchina3',
        peso: 23,
        lunghezza: 7

    },
    {
        varieta: 'zucchina4',
        peso: 4,
        lunghezza: 6

    },
    {
        varieta: 'zucchina5',
        peso: 23,
        lunghezza: 7

    },
    {
        varieta: 'zucchina6',
        peso: 23,
        lunghezza: 29

    },
    {
        varieta: 'zucchina7',
        peso: 5,
        lunghezza: 4

    },
    {
        varieta: 'zucchina8',
        peso: 1,
        lunghezza: 1

    },
    {
        varieta: 'zucchina9',
        peso: 3,
        lunghezza: 2

    },
    {
        varieta: 'zucchina10',
        peso: 7,
        lunghezza: 9

    }
];

var pesoTotale = 0;

for (i = 0; i < zucchine.length; i++) {
    var peso = zucchine[i].peso;
    var pesoTotale = (pesoTotale + peso);
}
console.log(pesoTotale);

//---------------------------------------------3--------------------------------------//
// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine

var arrayPrimo = [];
var arraySecondo = [];

for (i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        arrayPrimo.push(zucchine[i]);
    } else {
        arraySecondo.push(zucchine[i]);
    }
}

var pesoArrayPrimo = 0;

for (i = 0; i < arrayPrimo.length; i++) {
    var peso = arrayPrimo[i].peso;
    var pesoArrayPrimo = (pesoArrayPrimo + peso);
}
console.log(pesoArrayPrimo);

var pesoArraySecondo = 0;
for (i = 0; i < arraySecondo.length; i++) {
    var peso = arraySecondo[i].peso;
    var pesoArraySecondo = (pesoArraySecondo + peso);
}
console.log(pesoArraySecondo);

console.log(arrayPrimo);
console.log(arraySecondo);
