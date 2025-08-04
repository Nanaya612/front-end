function CalcularIMC() {
    let valorP = document.getElementById("peso").value;
    let valorA = document.getElementById("altura").value;

    let valorIMC =  valorP / (valorA * valorA);
    document.getElementById("resultado").textContent= "Seu IMC é " + valorIMC;

    if (valorIMC < 18.5){
        document.getElementById("classe").textContent= "Sua Classificação é Baixo Peso";
    } else if (valorIMC >= 18.5 & valorIMC < 25 ){
        document.getElementById("classe").textContent= "Sua Classificação é Normal";
    } else if (valorIMC >= 25 & valorIMC < 30 ){
        document.getElementById("classe").textContent= "Sua Classificação é Sobrepeso";
    } else if (valorIMC >= 30 ){
        document.getElementById("classe").textContent= "Sua Classificação é Obesidade";
    }
    
}