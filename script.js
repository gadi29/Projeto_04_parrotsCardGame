let numeroCartas;
let imagem;

let cartas = ["img/bobrossparrot.gif",
"img/bobrossparrot.gif",
"img/explodyparrot.gif",
"img/explodyparrot.gif",
"img/fiestaparrot.gif",
"img/fiestaparrot.gif",
"img/metalparrot.gif",
"img/metalparrot.gif",
"img/revertitparrot.gif",
"img/revertitparrot.gif",
"img/tripletsparrot.gif",
"img/tripletsparrot.gif",
"img/unicornparrot.gif",
"img/unicornparrot.gif"];

function quantCartas () {

    numeroCartas = prompt("Com quantas cartas você deseja jogar?");
    let cartasPar = (numeroCartas % 2) === 0;
    let numMin = numeroCartas < 4;
    let numMax = numeroCartas > 14;

    while (!cartasPar | numMin | numMax) {
        numeroCartas = prompt("Com quantas cartas você deseja jogar? (insira um número par entre 4 e 14)");
        cartasPar = (numeroCartas % 2) === 0;
        numMin = numeroCartas < 4;
        numMax = numeroCartas > 14;
    }

    cartas = cartas.slice([0],[numeroCartas]);
    cartas.sort(sortear);


    distribuirCartas();
}

function sortear () {
    return Math.random() - 0.5;
}

function distribuirCartas () {
    
    let quant = 0;

    while (quant < numeroCartas) {
        const cartasJogo = document.querySelector("ul");
        cartasJogo.innerHTML += `<li class="carta" onclick="virarCarta(this)"><img class="front escondida" src="img/front.png" alt=""><img class="verso" src="${cartas[quant]}" alt=""></li>`;

        quant ++;
    }

}

function virarCarta(elemento) {
    console.log(elemento);
    const imagem = document.querySelector("img");
    console.log(imagem);
}

quantCartas();