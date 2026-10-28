// Exercice 1


let mots = ["chat", "ordinateur", "table", "programmation", "js"];
let motsLongs = 0;

for (let i = 0; i < mots.length; i++)
     {  if (mots[i].length > 5)
         { motsLongs++; }  }

console.log("Nombre de mots longs :", motsLongs);


// Exercice 2
let nombres = [4, 7, 2, 9, 5, 8];
let sommePairs = 0;

for (let i = 0; i < nombres.length; i++)
     {  if (nombres[i] % 2 === 0)
         { sommePairs = sommePairs + nombres[i]; }  }

console.log("Somme des nombres pairs :", sommePairs);


// Exercice 3

let panier = [15, 42, 5, 89, 12, 50, 8];

let somme = 0;
let nombreChers = 0;
let sommeChers = 0;

/* La variable somme est déclarée avant la boucle
   pour conserver le total à chaque tour. */

for (let i = 0; i < panier.length; i++)
     {  somme = somme + panier[i];
    if (panier[i] >= 20) 
        { nombreChers++;
        sommeChers = sommeChers + panier[i] }  }

console.log("Total du panier :", somme);
console.log("Nombre d'articles chers :", nombreChers);
console.log("Montant des articles chers :", sommeChers);