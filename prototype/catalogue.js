let bibliotheque = JSON.parse(sessionStorage.getItem("bibliotheque")) || [
    { code:1,titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
    { code:2,titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943, disponible: false, prix: 100 },
    { code:3,titre: "L'Alchimiste", auteur: "Paulo Coelho", annee: 1988, disponible: true, prix: 120 },
    { code:4,titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true, prix: 110 },
    { code:5,titre: "Le Seigneur des Anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false, prix: 130 },
    { code:6,titre: "Le Rouge et le Noir", auteur: "Stendhal", annee: 1830, disponible: true, prix: 90 },
    { code:7,titre: "Le Comte de Monte-Cristo", auteur: "Alexandre Dumas", annee: 1844, disponible: true, prix: 140 },
    { code:8,titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943, disponible: false, prix: 100 },
    { code:9,titre: "L'Étranger", auteur: "Albert Camus", annee: 1942, disponible: true, prix: 110 },
    
    ];
    
    
    sessionStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
    
    
        let container = document.querySelector(".container");
        let recherche = document.getElementById("recherche");
        let total = document.getElementById("total");
        let disponibles = document.getElementById("disponibles");
        let indisponibles = document.getElementById("indisponibles");
    
    
        
    
        bibliotheque.forEach(livre => {
        let card = document.createElement("div");
        card.classList.add("card");
    
        card.innerHTML = `
            <h2>${livre.titre}</h2>
            <p>Auteur: ${livre.auteur}</p>
            <p>Année: ${livre.annee}</p>
            <p>Disponible: ${livre.disponible ? "Oui" : "Non"}</p>
            <p>Prix: ${livre.prix} DH</p>
            <button class="btn-supprimer">Supprimer</button>`;
        
    
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
        majStats();
         
    
    
    
        
    
    
    
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