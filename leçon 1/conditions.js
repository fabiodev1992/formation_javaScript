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