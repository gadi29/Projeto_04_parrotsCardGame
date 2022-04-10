let numeroCartas;
let seg = 0;
let clique = 0;
let num1 = 0;
let num2 = 0;
let numCarta1 = 0;
let numCarta2 = 0;

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

    numeroCartas = Number(prompt("Com quantas cartas você deseja jogar? (insira um número par entre 4 e 14)"));
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

    clique ++;

    if (num1 === 0 || num2 === 0) {
        for (let i = 1; i <= cartas.length; i++) {
            let teste = elemento.classList.contains(`numero${i}`);
            let igual;
    
            if (teste && num1 === 0) {
                const esconder = document.querySelector(`.numero${i}`).querySelector(".front-face");
                esconder.classList.remove("front-face");
                esconder.classList.add("virar-front");
                const mostrar = document.querySelector(`.numero${i}`).querySelector(".back-face");
                mostrar.classList.remove("back-face");
                mostrar.classList.add("virar-back");
                num1 = 1;
                numCarta1 = i;
    
                break;
            } else if (teste && num1 === 1) {
                const esconder = document.querySelector(`.numero${i}`).querySelector(".front-face");
                esconder.classList.remove("front-face");
                esconder.classList.add("virar-front");
                const mostrar = document.querySelector(`.numero${i}`).querySelector(".back-face");
                mostrar.classList.remove("back-face");
                mostrar.classList.add("virar-back");
    
                num2 = 2;
                numCarta2 = i;
    
                if (i % 2 === 0) {
                    igual = document.querySelector(`.numero${i-1}`).querySelector(".virar-back");
                } else {
                    igual = document.querySelector(`.numero${i+1}`).querySelector(".virar-back");
                }
    
                if (igual === null) {
                    setTimeout(voltarCarta, 1000);
                } else {
                    num1 = 0;
                    num2 = 0;
                    numCarta1 = 0;
                    numCarta2 = 0;
                }

                let geral = document.querySelectorAll(".front-face");

                if (geral.length === 0) {
                    setTimeout(fimJogo, 400);
                }
                break;
            }
        }
    }
}

function voltarCarta() {
    const esconder1 = document.querySelector(`.numero${numCarta1}`).querySelector(".virar-front");
    esconder1.classList.remove("virar-front");
    esconder1.classList.add("front-face");
    
    const mostrar1 = document.querySelector(`.numero${numCarta1}`).querySelector(".virar-back");
    mostrar1.classList.remove("virar-back");
    mostrar1.classList.add("back-face");

    const esconder2 = document.querySelector(`.numero${numCarta2}`).querySelector(".virar-front");
    esconder2.classList.remove("virar-front");
    esconder2.classList.add("front-face");

    const mostrar2 = document.querySelector(`.numero${numCarta2}`).querySelector(".virar-back");
    mostrar2.classList.remove("virar-back");
    mostrar2.classList.add("back-face");

    num1 = 0;
    num2 = 0;
    numCarta1 = 0;
    numCarta2 = 0;
}

function fimJogo() {
    alert(`Você ganhou em ${clique} jogadas e em ${seg} segundos!`);
    let repetir = prompt("Você gostaria de reiniciar o jogo? (sim/não)");

    while ((repetir !== "sim") && (repetir !== "não")) {
        repetir = prompt("Você gostaria de reiniciar o jogo? (sim/não)");
    }

    if (repetir === "sim") {
        document.location.reload(true);
    } else if (repetir === "não") {
        window.close();
    }
}

function contarTempo() {
    seg ++;

    let cronometro = document.querySelector("h2");
    cronometro.innerHTML = `${seg}`;
}

quantCartas();
setInterval(contarTempo, 1000);