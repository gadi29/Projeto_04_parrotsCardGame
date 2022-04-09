let numeroCartas;
let imagem;

let cartas = [{num: 1, imagem:"img/bobrossparrot.gif"},
{num: 2, imagem:"img/bobrossparrot.gif"},
{num: 3, imagem:"img/explodyparrot.gif"},
{num: 4, imagem:"img/explodyparrot.gif"},
{num: 5, imagem:"img/fiestaparrot.gif"},
{num: 6, imagem:"img/fiestaparrot.gif"},
{num: 7, imagem:"img/metalparrot.gif"},
{num: 8, imagem:"img/metalparrot.gif"},
{num: 9, imagem:"img/revertitparrot.gif"},
{num: 10, imagem:"img/revertitparrot.gif"},
{num: 11, imagem:"img/tripletsparrot.gif"},
{num: 12, imagem:"img/tripletsparrot.gif"},
{num: 13, imagem:"img/unicornparrot.gif"},
{num: 14, imagem:"img/unicornparrot.gif"}];

function quantCartas () {

    numeroCartas = Number(prompt("Com quantas cartas você deseja jogar?"));
    let cartasPar = (numeroCartas % 2) === 0;
    let numMin = numeroCartas < 4;
    let numMax = numeroCartas > 14;

    while (!cartasPar | numMin | numMax) {
        numeroCartas = Number(prompt("Com quantas cartas você deseja jogar? (insira um número par entre 4 e 14)"));
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
        cartasJogo.innerHTML += 
        `<div class="principal numero${cartas[quant].num}" onclick="virarCarta(this)">
        <li class="carta front-face"><img src="img/front.png" alt=""></li>
        <li class="carta back-face"><img src="${cartas[quant].imagem}" alt="">
        </div>`;

        quant ++;
    }

}

function virarCarta(elemento) {

    for (let i = 0; i <= cartas.length; i++) {
        let teste = elemento.classList.contains(`numero${i}`);

        if (teste) {
            const esconder = document.querySelector(`.numero${i}`).querySelector(".front-face");
            esconder.classList.remove("front-face")
            esconder.classList.add("virar-front");
            const mostrar = document.querySelector(`.numero${i}`).querySelector(".back-face");
            mostrar.classList.remove("back-face");
            mostrar.classList.add("virar-back");
        }

    }
}

quantCartas();