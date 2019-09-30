////////////////////////////////////////////////////
/////////////REALISATION EXERCICE sans OBJET
////////////////////////////////////////////////////


function choix(){
	console.log("bienvenue dans le gestionnaire de contacts!")
	let entree;

	while (entree != 0 ){ 	//boucle programme tant que 0 n'est pas choisi
		console.log ("\n1: lister les contacts");
		console.log ("2: Ajouter un contact");
		console.log ("0: quitter");
		let entree = prompt("\nChoisissez une option"); // choix option

		switch(entree){
			case "1":   // choix 1, affichage des contacts
				console.log("\nVoici la liste de tout vos contacts :");
				contacts.forEach(contact =>{console.log(contact);
				});
			break;
			case"2":  //choix 2, creation nouveau contact avec saisie
				const prenom = prompt("prenom:");
				const nom = prompt("nom:");
				contacts.push(prenom + " " + nom);
				console.log("\nLe nouveau contact " +  prenom  + " " + nom + " a bien ete ajoute." );
			break;
		}
	if (entree == 0) { // choix de quitter, sortie de boucle
         break;
      }
	}   
	console.log("\nAu revoir!");
}

	
const contacts =["Carolle Levisse", "Melodie Nelsonne"]; //declaration des premiers contacts presents dans le tableau.
alert("ajout de contacts");
choix();






////////////////////////////////////////////////////
/////////////REALISATION EXERCICE AVEC OBJET
////////////////////////////////////////////////////


/*
//CREATION OBJET
class contact{
	constructor (prenom, nom){
		this.prenom = prenom;
		this.nom = nom;
	}

	ajoutContact(prenom, nom){
		this.prenom = prompt("prenom:");
		this.nom = prompt("nom:");
		contacts.push(new contact(this.prenom + this.nom));
		console.log("\nLe nouveau contact " +  this.prenom  + " " + this.nom + " a bien ete ajoute." );

	}
}

//Programme
function choix(){
	console.log("bienvenue dans le gestionnaire de contacts!")
	let entree;

	while (entree != 0 ){
		console.log ("\n1: lister les contacts");
		console.log ("2: Ajouter un contact");
		console.log ("0: quitter");
		let entree = prompt("\nChoisissez une option");

		switch(entree){
		case "1":
			console.log("\nVoici la liste de tout vos contacts :");
			contacts.forEach(contact =>{console.log(contact);
			});
		break;
		case"2":
			ajoutContact(prenom, nom);
			
		break;
		}
	if (entree == 0) {
         break;
      }
	}   
	console.log("\nAu revoir!");
}

	
const contacts =["Carolle Levisse", "Melodie Nelsonne"];
alert("ajout de contacts");
choix();


*/
 








