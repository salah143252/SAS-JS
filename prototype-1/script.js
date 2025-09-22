let continueSearch = true;

while(continueSearch) {
    let code = prompt("Entrez le code de compétence") 
    if(code === "c1") {
        alert("Maquettage");
    } else if(code === "c2") {
        alert("HTML/CSS");
    } else if(code === "c3") {
        alert("JavaScript");
    } else if(code === "c4") {
        alert("CMS");
    } else if(code === "c5") {
        alert("SQL");
    } else if(code === "c6") {
        alert("AccesBDD");
    } else if(code === "c7") {
        alert("PHP");
    } else if(code === "c8") {
        alert("Framework JS");
    } else if(code === "t1") {
        alert("Pédagogie");
    } else if(code === "t2") {
        alert("Collaboration");
    } else if(code === "t3") {
        alert("Git & GitHub");
    } else if(code === "exit") {
        continueSearch = false;
        alert("Au revoir");
    } 
    }