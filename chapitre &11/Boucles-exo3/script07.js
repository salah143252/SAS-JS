let input = prompt('Saisir un nombre X :');
let x = parseInt(input);

if (isNaN(x) || x <= 0) {
  console.log('Veuillez saisir un nombre entier positif valide.');
} else {
  let diviseurs = [];

  // Optimisation : on va seulement jusqu'à la racine carrée de x
  for (let i = 1; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      diviseurs.push(i); // Ajoute le diviseur i
      
      // Si i n'est pas la racine carrée exacte, ajoute aussi x/i
      if (i !== x / i) {
        diviseurs.push(x / i);
      }
    }
  }

  // Trie les diviseurs dans l'ordre croissant
  diviseurs.sort((a, b) => a - b);

  console.log(`Les diviseurs de ${x} : ${diviseurs.join(', ')}`);
}