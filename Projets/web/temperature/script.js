function convertir() {
    let temperature = parseFloat(document.getElementById("premier_temp").value);
    let premier_temp = document.getElementById("Premier").value;
    let deuxieme_temp = document.getElementById("Deuxieme").value;
    let resultat;

    if (isNaN(temperature)){
        resultat = "Veuillez entrer une température valide.";
    }
    else{
        if (premier_temp === "CEL"){
            if(deuxieme_temp === "FAH"){
                resultat = (temperature * 9/5 )+32;
            } else if (deuxieme_temp === "KEL") {
                resultat = temperature + 273.15;
            } else {
                resultat = temperature; 
            }
        } else if (premier_temp === "FAH"){
            if (deuxieme_temp === "CEL"){
                resultat = (temperature - 32) * 5/9;
            } else if (deuxieme_temp === "KEL"){
                resultat = (temperature - 32) * 5/9 + 273.15;
            } else {
                reusltat = temperature;
            }

        } else {
            if (deuxieme_temp === "CEL"){
                resultat = temperature - 273.15;
            } else if (deuxieme_temp === "FAH"){
                resultat = (temperature - 273.15) * 9/5 +32;
            } else {
                resultat = temperature
            }
        }

    }
    document.getElementById("deuxieme_temp").value = resultat.toFixed(2);

}
function reset(){
    document.getElementById("premier_temp").value = "";
    document.getElementById("deuxieme_temp").value = "";
    document.getElementById("resultatFinal").innerText = ""; // si tu utilises un <span> ou <p> pour afficher le résultat

}