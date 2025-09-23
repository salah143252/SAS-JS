let sum = 0;
let count = 0;

while (true) {
  let input = prompt('Saisir une note ou -1 pour arrêter :');
  let grade = parseFloat(input);

  if (isNaN(grade)) {
    console.log('Note non valide');
    continue;
  }

  if (grade === -1) {
    break;
  }

  if (grade < 0 || grade > 20) {
    console.log('Note non valide');
    continue;
  }

  sum += grade;
  count++;
}

if (count > 0) {
  let average = sum / count;
  console.log(`Nombre de notes = ${count}, moyenne = ${average.toFixed(2)}`);
} else {
  console.log('Aucune note valide saisie.');
}