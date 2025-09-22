// Jeu éducatif de mémorisation des 8 compétences (C1 à C8)

const readline = require('readline');

// Liste des compétences et codes associés selon votre table
const competences = [
    { code: 'C1', nom: 'Maquettage' },
    { code: 'C2', nom: 'HTML/CSS' },
    { code: 'C3', nom: 'JS' },
    { code: 'C4', nom: 'CMS' },
    { code: 'C5', nom: 'SQL' },
    { code: 'C6', nom: 'AccèsBDD' },
    { code: 'C7', nom: 'PHP' },
    { code: 'C8', nom: 'FrameworkJS' }
];

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let tentatives = 0;
const maxTentatives = 10;
let score = 0;

console.log('=== Jeu des Compétences (C1 à C8) ===');
console.log('À chaque tour, entrez le code (ex: C1, C2, ...) correspondant à la compétence affichée.\n');

function poserQuestion() {
    const index = Math.floor(Math.random() * competences.length);
    const question = competences[index];

    rl.question(`Quel est le code de la compétence : "${question.nom}" ? `, (reponse) => {
        tentatives++;
        if (reponse.trim().toUpperCase() === question.code) {
            console.log('✅ Correct !');
            score++;
        } else {
            console.log(`❌ Incorrect. La bonne réponse était : ${question.code}`);
        }
        console.log(`Score actuel : ${score}/${tentatives}\n`);

        if (tentatives < maxTentatives) {
            poserQuestion();
        } else {
            console.log('--- Jeu terminé ---');
            console.log(`Votre score final : ${score} / ${maxTentatives}`);
            rl.close();
        }
    });
}

poserQuestion();