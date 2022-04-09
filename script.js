function distribuirCartas () {

    const pares = prompt("Com quantos pares de cartas você deseja jogar?");
    const numeroCartas = pares * 2;

    let quant = 0;

    while (quant < numeroCartas) {
        const cartasJogo = document.querySelector("ul");
        cartasJogo.innerHTML += `<li class="carta"><img src="img/front.png" alt=""></li>`;

        quant ++;
    }
}

distribuirCartas();