//pour afficher les élément d'un tablaeux il faut 
//utillise la boucle wile

let i = 0;
 while(i<5){
    console.log(`la boucle en condition tant que ${i}`);
    i++;
 }
 console.log('fin de la boucle tant que');

 let tabnom = ['Abalo', 'Afi', 'Kodjo'];
let a = 0;
while(a<tabnom.length){
   console.log(`le nom en miniscule: ${tabnom[a]}`) ;
   console.log(` le nom en majuscule: ${tabnom[a].toUpperCase()}`);
    a++;
}
//condition do wile vérifier si une des condition est bonne
 let cereales = ['soja', 'mais', 'mile'];
 let j = 0;
 do{
console.log(` le nom des céréales en miniscule: ${cereales[j]}`);
j++;
 }while(j<cereales.length);
 //condition if end if else
 //if(cindition){
   //instruction
 let psw = 'secret123';
 if(psw == 'secret1232'){
   console.log('votre mot de pass est correcte');
 }
 let heure = 14;
 let age = 25;
 if(age >= 25){
   console.log('vous pouvez visitez la page');
 }

 //if(heure < 12){
   //console.log('bonjour');
 //}
 let ages = 2;
 if(ages <= 2){
   console.log(`bonjour bébé`);
 }else if (ages <= 10) {
   console.log(`bonjour adolesent`);
 }else if(ages <= 20){
   console.log(`bonjour mineure`);
 }
 //condition switch s'utilise quant on a à utiliser plusieur if
 //pongramme sui retourne le mois en fonction du chiffr
let numdate = 7;
switch(numdate){
   case 1:
   console.log(`Janvier`);
   break;
   case 2:
   console.log(`Février`);
   break;
   case 3:
   console.log(`Mars`);
   break;
   case 4:
   console.log(`Avril`);
   break;
   case 5:
   console.log(` Mai`);
   break;
   case 6:
   console.log(`Juin`);
   break;
   default:
   console.log(`chiffre ne correspond en au qu'un moi`)
}
