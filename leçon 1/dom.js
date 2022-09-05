//manipulution des HTML
//avec javaa scripte
//console.log(document.URL);
//let h1 = document.querySelector('h1')
//console.log('h1');
//var animal = {
	//cri: '.....',
	//crier: function () {
		//return this.cri;
		// body...
	//}

//Notion objet ritoral: encapsulation


 const utilisateur = {
 	nom: 'abalo',
 	email: 'email@email.com',
 	amis: ['alassani', 'sarah'],
 		//login(){
 			//console.log(`${this.email} est connecté`);
 		//},
 }
 console.log(utilisateur);
 console.log(utilisateur.nom);
 //factory fuction une maqueette pour créer les objets
 let utilisateur2 = (nom, email, amis) =>{
 	return {
 		nom,email,amis,
 		login(){console.log(`${email} est connecté)`);

 		},
 	}
 }
let util1 = utilisateur2('adjo', 'email2@email.com');

console.log(util1.nom);
//utilisateur2.login();
//function constructeur parmet de créer des objets en jS

function utilisacons(nom, email, amis){
	this.nom = nom;
	this.email = email;
	this.amis = amis;
	//login est une fuction qui connecte
	this.login = function(){
		console.log(`${email} est connecté`);
	}

}
//extention de l'bjet
let utilcon = new utilisacons('adovi', 'adjo@gmail.com', 'vivi');
alert(`${utilcon.nom} à pour mail ${utilcon.email}`);