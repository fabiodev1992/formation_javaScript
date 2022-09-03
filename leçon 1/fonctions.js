console.log('les fonctions');
//fonction basic
function test(){
	console.log('ma fonctions');
}
//appel de la conftion
test();
//fonction par extression
//consite a affecter à une variable la fonction
let salutation = function(){
	console.log(` salut boss`);
};
salutation();
//fonction qui retourne une valeur

function surfacerectangle(){
	let longueure = 6;
	let laargeure = 3;
	return longueure * laargeure;
}
let resulta = surfacerectangle();
console.log(` la surface est: ${resulta} m²`);
//passer des paraètres à une fonction

//function veriable(p1){}
function salutations(p1,p2){
	console.log('salut,', p1, 'et', p2);
}
salutations('fabio', 'sarah');//on a placé le para mètre de la fonction
function surfrec(L,l){
let resolt = l*L;
return resolt;
}
console.log(`La surace de mon rectangle est: ${surfrec(5, 2)}`);
//	Arow function
//let salut = () =>{//instrution

//};
//une fonction par expression en une fonction arow
let salut = function(){
	console.log('bonjour fuction expretion');

};
salut();
//arow fuction
let arowsalut = (name, prnom) =>{
console.log('salut arow fuction', name, prnom);
};
arowsalut('Tchaa', 'fabio');
//calcul de la surface rectangle avec arow fonction
let arowsurf = (l, L) =>{
	let resulta = l*L;
	return resulta;
};
console.log(`la surface en arow fuction est: ${arowsurf(4, 5)}`);
//arow fuction peux s'écrire également
let arfuncsimple = (l, L) => l*L;
console.log(`la surface avec arow function simplifier set: ${arfuncsimple(4, 8)}`);
