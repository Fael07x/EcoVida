function respostaCorreta(){
    document.getElementById("resultado").innerHTML =
    "✅ Correto! A lixeira verde é destinada ao vidro.";
}

function respostaErrada(){
    document.getElementById("resultado").innerHTML =
    "❌ Resposta incorreta. Tente novamente.";
}

function calcular(){

    let quantidade =
    Number(document.getElementById("pet").value);

    let resultado =
    quantidade * 12;

    document.getElementById("calcResultado").innerHTML =
    "♻️ Você pode reciclar aproximadamente " +
    resultado +
    " garrafas PET por ano.";
}

let contador1 = document.getElementById("contador1");
let contador2 = document.getElementById("contador2");

let valor1 = 0;
let valor2 = 0;

let animacao1 = setInterval(() => {

    valor1++;

    contador1.innerHTML = valor1;

    if(valor1 >= 75){
        clearInterval(animacao1);
    }

}, 25);

let animacao2 = setInterval(() => {

    valor2++;

    contador2.innerHTML = valor2;

    if(valor2 >= 60){
        clearInterval(animacao2);
    }

}, 30);