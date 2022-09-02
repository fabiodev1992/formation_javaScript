//alert('Donnée depuis notre fichier js externe')
//console.log('salut depuis la console');
//les variables dans javascripte
//variable de type strring
//console.log('salut les debutans');
//alert('salut un string depuis alert');
let prenom = 'Fabio';
let nom = 'Tchaa';
nom = 'mawake';
//console.log(nom, prenom);
//concatenations
let nom_prenom = nom +' '+ prenom +' est mon nom et prenom';
console.log(nom_prenom);
//une forme de concatenation
let concat = `je m'appel ${prenom} et  mon nom est ${nom}`;
console.log(concat);
let email = 'mail@mail.com';
let nom_email = `l'eamil de ${nom} est ${email}`;
//alert('nom_email');
//console.log(nom_email);
//recuperation de caractères
console.log(email[3]);
///recuppérer la longeur d'une chaine 
//la longeur d'un string
let longeur = nom.length;
console.log(longeur);

//fonctions et méthod
//console.log(prenom.toUpperCase());
//les méthodes
//indexof() cette retourne la position d'une chaine ou d'un carractère
//donne la position d'une lètre dans un
//let position = 'Tanizi';
//console.log(position.indexof('z')); 
let affiche = 'salut les zero';
let temp = affiche.split(' ');
console.log(temp);
console.log(temp.join(' '));
// split afiche sousforme la chaine de caractère sour forme de ta
//bleaux
//les opérateurs mathématique
console.log(10+3);
let num = 10;
let chif = 2
console.log( num/chif);
console.log(num%chif);
//surface d'un cercle
let ray = 10;
let pi = 3.14;
let long = 45;
let larg =10;
let surfacecercle = pi * ray**2;
let surfacerect = long * larg;

let perimetre = 2 * pi * ray;
let resulta = `mon cercle a pour perimètre: ${perimetre} et pour surface ${surfacecercle}`;
console.log(resulta);
//operateures de décrémentationl
let like = 0;
like += 2;
console.log(like);
//variable -> array
let fruis = ['banane', 'ananas', 'papaye'];
 fruis[1] = 'tomate';
console.log(fruis);
console.log(fruis[1]);
console.log(fruis.length);//afficher le nonbre d'éléments du tableaux
 //les methodes appliqué à un tablaeux

//à qu'elle position ce trouve un élément dans un tableau
console.log(fruis.join(','));
//imbriquer un tableaux
console.log(fruis.concat(['1, 2, 3, 4']));
fruis.push('soja');
console.log(fruis);
let age = null;
console.log(`mon age est: ${age}, et d'ici 2ans j'aurai ${age + 5}`);
//NAN not a number
//variable de type boolean
console.log(true, false);
let e_mail = 'dmxmawake@gmail.com'
console.log(e_mail.includes('@'));
console.log(fruis.includes('soja'));
//operation de comparaison
let monage = 25;
console.log(a=monage != 22);
//le comparateur avec les types 
let monagenum = 30;
console.log(monagenum != '30');
// convertire number en string
 let numchif = 100;
 let string_number = String(numchif);
 console.log(string_number, typeof string_number);
 //les conditions en java script
 //boucl for = pour rpètte la condition tant qu'elle est véifier
 for(let i=1; i !=5; i++){
 	console.log(`la boucle ${i}`)
 }
 console.log('Fin de la boucle .....');
 //boucle whille = tant que
 let i = 0;
 while(i<5){
    console.log(`la boucle en condition tant que ${i}`);
    i++;
 }
 console.log('Fin de la boucle tant que');
//afichage d'un tableaux avec les boucles
;
//avec la boucle 
let tabnom = ['Abalo', 'Afi', 'Kodjo'];
let a = 0;
while(a<tabnom.length){
   console.long(`le nom en miniscule: ${tabnom[a]}`) ;
    a++;
}

 
