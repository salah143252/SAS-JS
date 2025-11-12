let bibliotheque = JSON.parse(sessionStorage.getItem("bibliotheque")) || [];

const form = document.getElementById("form-ajout");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nouveauLivre = {
    code: Number(document.getElementById("code").value),
    titre: document.getElementById("titre").value,
    auteur: document.getElementById("auteur").value,
    annee: Number(document.getElementById("annee").value),
    prix: Number(document.getElementById("prix").value),
    disponible: document.getElementById("disponible").value === "true",
  };

  bibliotheque.push(nouveauLivre);
  sessionStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));

  alert("Livre ajouté avec succès !");
  form.reset();
});