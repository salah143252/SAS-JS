// Programme qui demande un nombre entre 1 et 7 et affiche le jour correspondant

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Entrez un nombre entre 1 et 7 : ', (input) => {
    const nombre = Number(input);
  
    switch (nombre) {
      case 1:
        console.log("Lundi");
        break;
      case 2:
        console.log("Mardi");
        break;
      case 3:
        console.log("Mercredi");
        break;
      case 4:
        console.log("Jeudi");
        break;
      case 5:
        console.log("Vendredi");
        break;
      case 6:
        console.log("Samedi");
        break;
      case 7:
        console.log("Dimanche");
        break;
      default:
        console.log("Numéro invalide");
    }
  
    readline.close();
  });