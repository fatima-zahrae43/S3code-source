

// Exercice 1
let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

for (let i = 0; i < jours.length; i++) {
    console.log("jour de la semaine : " + jours[i]);}



// Exercice 2
let couleurs = ["rouge", "vert", "vleu", "jaune", "orange", "violet"];

for (let i = couleurs.length - 1; i >= 0; i--)
     { console.log(couleurs[i]);}


for (let i = 0; i < couleurs.length; i = i + 2)
     { console.log(couleurs[i]);}



// Exercice 3
let sequence = ["ignition", 1, 2, 3, 4, 5, "préparation"];

for (let i = sequence.length - 1; i >= 0; i--) 
    {console.log(sequence[i]);}

console.log("décollage !");

// On utilise sequence.length - 1 car le dernier index est 6 et non 7, puisque les index commencent à 0.