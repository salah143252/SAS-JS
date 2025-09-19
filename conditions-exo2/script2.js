// Demande une note entre 0 et 20 et affiche un message selon la valeur

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Entrez une note entre 0 et 20 : ', (input) => {
    const note = Number(input);
  
    if (isNaN(note) || note < 0 || note > 20) {
      console.log('Veuillez entrer une note valide entre 0 et 20.');
    } else if (note < 10) {
      console.log('Insuffisant');
    } else if (note <= 12) {
      console.log('Passable');
    } else {
      console.log('Bien');
    }
    readline.close();
  });