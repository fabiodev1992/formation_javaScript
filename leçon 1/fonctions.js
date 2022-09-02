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
console.log(` la surface est: ${resulta}`);