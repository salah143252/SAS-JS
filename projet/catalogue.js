let bibliotheque = JSON.parse(sessionStorage.getItem("bibliotheque")) ||[
    { code: 1, titre: "Rich Dad Poor Dad", auteur: "Robert Kiyosaki", annee: 1997, disponible: false, prix: 120 },
    { code: 2, titre: "Principles", auteur: "Ray Dalio", annee: 2017, disponible: true, prix: 135 },
    { code: 3, titre: "Atomic Habits", auteur: "James Clear", annee: 2018, disponible: true, prix: 140 },
    { code: 4, titre: "Deep Work", auteur: "Cal Newport", annee: 2016, disponible: false, prix: 130 },
    { code: 5, titre: "Sapiens: A Brief History of Humankind", auteur: "Yuval Noah Harari", annee: 2011, disponible: true, prix: 150 },
    { code: 6, titre: "Meditations", auteur: "Marcus Aurelius", annee: 180, disponible: true, prix: 110 },
    { code: 7, titre: "Educated", auteur: "Tara Westover", annee: 2018, disponible: false, prix: 125 },
    { code: 8, titre: "Grit", auteur: "Angela Duckworth", annee: 2016, disponible: true, prix: 115 },
    { code: 9, titre: "The War of Art", auteur: "Steven Pressfield", annee: 2002, disponible: true, prix: 145 },
    { code: 10, titre: "Outliers", auteur: "Malcolm Gladwell", annee: 2008, disponible: true, prix: 130 }
];

sessionStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
    let container = document.querySelector(".container");
    let recherche = document.getElementById("recherche");
    let total = document.getElementById("total");
    let disponibles = document.getElementById("disponibles");
    let indisponibles = document.getElementById("indisponibles");

    let btntrier = document.getElementById("btn-trier");
    let ordreAsc = true;
    btntrier.addEventListener("click", function() {
        bibliotheque.sort((a, b) => (ordreAsc)? a.titre.localeCompare(b.titre):b.titre.localeCompare(a.titre));
        ordreAsc = !ordreAsc;
        container.innerHTML = "";
        aficherLivre();
    });
    

    function aficherLivre() {
    bibliotheque.forEach(livre => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h2>${livre.titre}</h2>
        <p>Auteur: ${livre.auteur}</p>
        <p>Année: ${livre.annee}</p>
        <p class="disponible">Disponible: ${livre.disponible ? "Oui" : "Non"}</p>
        <p >Prix: ${livre.prix} DH</p>
        <button class="btn-resver">${livre.disponible ? "Reserver" : "Rendre"}</button>
        <button class="btn-supprimer">Supprimer</button>`;

        let btnreserver = card.querySelector(".btn-resver");
        btnreserver.addEventListener("click", function() {
            if(livre.disponible==true){
                livre.disponible = false;
                btnreserver.textContent = "Rendre";
                card.querySelector(".disponible").textContent = "Disponible: Non"; 
                sessionStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
                majStats();
            }
        });
        
     let btnsupprimer = card.querySelector(".btn-supprimer");
     btnsupprimer.addEventListener("click", function() {
        bibliotheque = bibliotheque.filter((liv) => liv.code !== livre.code);
        console.log(bibliotheque);
        sessionStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
        card.remove();
        majStats();
     });
      container.appendChild(card);  

    }); 
}
       
    majStats();
    aficherLivre();
                
    recherche.addEventListener("input", function() {
        let searchTerm = recherche.value.toLowerCase();
        let cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
        let titre=card.querySelector("h2").textContent.toLowerCase();
        if(titre.includes(searchTerm)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
    });

    function majStats() { 
    total.innerText = ` Total des livres: ${bibliotheque.length}`  ;
    disponibles.textContent = ` Disponibles: ${bibliotheque.filter((dis) => dis.disponible).length} `;        
    indisponibles.textContent = ` Indisponibles: ${bibliotheque.filter((ind) => !ind.disponible).length} `;
    }