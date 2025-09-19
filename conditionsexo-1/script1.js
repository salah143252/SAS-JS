// Demande un mot de passe à l'utilisateur et vérifie s'il correspond à "user@123"

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Entrez votre mot de passe : ', (motdepasse) => {
    if (motdepasse === 'user@123') {
      console.log('Accès autorisé');
    } else {
      console.log('Accès refusé');
    }
    readline.close();
  });