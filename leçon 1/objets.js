//manipulation des objets
//un objet à des propriétés et des méthodes
//declaration des objets
let perssonne = {
	nom: 'abalo',
	prenom: 'afi',
	email: 'afi@mail.com',
	taille: '1.85',
	age: 25,
	blogue: ['tuto js', 'tuto react', 'tuto python'],
	login: function(){
		console.log('utilisateur connecté');
	},
	logout: function(){
		console.log('utilisateur déconnecté');
	},
	afficheblogs: function(){
		//console.log(this);
		this.blogue.forEach((blogue) =>{
			console.log(blogue);

		})
	}
}; //un objet litéral
console.log(perssonne);
console.log(perssonne.blogue);
console.log(perssonne.email);
console.log(perssonne.nom);

//modifier la valeur d'un élément de l'objet
perssonne.nom = 'louize';
console.log(perssonne.nom);
//afficher un élément du tableaux
console.log(perssonne.blogue[1]);
//modifier un element d'un tableaux
perssonne.blogue[1] = 'tuto mongo DB';
console.log(perssonne.blogue[1]);
//autre façon de manipuler les ofjets
console.log(perssonne['nom']);
const key = 'age';
//console.log(perssonne.key);
//ajouter des méthodes à un objet
perssonne.login();
//objet this contexte. sa permet de retourner touus les 
//valeurs de l'objet
perssonne.afficheblogs();


