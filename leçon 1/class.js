//notion de classes
class Utilasateur{
	//il faaut un constructeur
	constructor(nom,email,amis){
		this.nom = nom;
		this.email = email;
		this.amis = amis;

	} 
	login(){
		console.log(`${this.email} utilisateur connecté `);
	}
}
let util = new Utilasateur('suzo', 'ds@mail.com', 'sandra');
console.log(util.nom);
console.log(util.email);
console.log(util.amis);
