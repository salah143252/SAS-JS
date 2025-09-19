// Programme calculatrice : demande deux nombres et un opérateur, affiche le résultat

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Entrez le premier nombre : ', (a) => {
    readline.question('Entrez le deuxième nombre : ', (b) => {
      readline.question('Entrez un opérateur (+, -, *, /) : ', (operateur) => {
        const num1 = Number(a);
        const num2 = Number(b);
        let resultat;
  
        if (isNaN(num1) || isNaN(num2)) {
          console.log('Veuillez entrer des nombres valides.');
        } else {
          switch (operateur) {
            case '+':
              resultat = num1 + num2;
              console.log(`Résultat : ${resultat}`);
              break;
            case '-':
              resultat = num1 - num2;
              console.log(`Résultat : ${resultat}`);
              break;
            case '*':
              resultat = num1 * num2;
              console.log(`Résultat : ${resultat}`);
              break;
            case '/':
              if (num2 === 0) {
                console.log('Division par zéro interdite !');
              } else {
                resultat = num1 / num2;
                console.log(`Résultat : ${resultat}`);
              }
              break;
            default:
              console.log('Opérateur invalide.');
          }
        }
        readline.close();
      });
    });
  });