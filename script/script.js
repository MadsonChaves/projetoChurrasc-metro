// Carne - 400 gr por pessoa  + de 6 horas - 650
// Cerveja - 1200 ml po Pessoa + 6 horas - 2000ml
// Refrigerante/Agua - 1000ml por pessoa + 6 horas 1500ml

//  crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)  /  2 * criancas);
    let qdtTotalCerveja = CervejaPP(duracao) * adultos ;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (carnePP(duracao)  /  2 * criancas);
    
    
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne</P>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</P>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's  2l de Bebidas</P>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function CervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}