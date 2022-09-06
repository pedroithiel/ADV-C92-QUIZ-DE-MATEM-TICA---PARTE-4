var primeiroNumero;
var segundoNumero;


var player1Name = localStorage.getItem("jogador1");
var valorLocalPlayer2 = localStorage.getItem("jogador2");
var pontuacao1 = 0;
var pontuacao2 = 0;

document.getElementById("player1Name").innerHTML = player1Name;
document.getElementById("player2Name").innerHTML = valorLocalPlayer2;

document.getElementById("TurnoPergunta").innerHTML = "Turno de Pergunta - " + player1Name;
document.getElementById("TurnoResposta").innerHTML = "Turno de Resposta - " + valorLocalPlayer2

var perguntaTurn = player1Name;
var resposTurn = valorLocalPlayer2;


function Enviar() {

    primeiroNumero = pegarObjeto("primera").value;
    segundoNumero = pegarObjeto("segunda").value;

    pegarObjeto("resultado").style.display = "none";

    pegarObjeto("output").style.display = "inline-block";
    pegarObjeto("conta").innerHTML = primeiroNumero + " X " + segundoNumero;
}

function Verificar() {

    pegarObjeto("output").style.display = "none";
    
    var resultadoDIV = document.getElementById("resultado");
    resultadoDIV.style.display = "inline-block";

    var respondendo = pegarObjeto("respondendo");    
    var resultadoVerdadeiro = primeiroNumero * segundoNumero;
    
    if (respondendo.value == resultadoVerdadeiro) {

        if(perguntaTurn == "jogador1") {
            pontuacao1++;
            pegarObjeto("pontuacao").innerHTML = pontuacao1;
        } else {
            pontuacao2++;
            pegarObjeto("pontuacao2").innerHTML = pontuacao2;
        }
}

if(perguntaTurn == "jogador1"){

    perguntaTurn = "jogador2";
    pegarObjeto("TurnoPergunta").innerHTML = "Turno de Pergunta - " + valorLocalPlayer2;
    pegarObjeto("TurnoResposta").innerHTML = "Turno de Resposta - " + player1Name;
} else {

    perguntaTurn = "jogador1";
    pegarObjeto("TurnoPergunta").innerHTML = "Turno de Pergunta - " + player1Name;
    pegarObjeto("TurnoResposta").innerHTML = "Turno de Resposta - " + valorLocalPlayer2;
}

if(resposTurn == "jogador1") {

    resposTurn = "jogador2";
    pegarObjeto("TurnoResposta").innerHTML = "Turno de Resposta - " + valorLocalPlayer2;
    pegarObjeto("TurnoPergunta").innerHTML = "Turno de Pergunta - " + player1Name;
} else {

    resposTurn = "jogador1";
    pegarObjeto("TurnoResposta").innerHTML = "Turno de Resposta - " + player1Name;
    pegarObjeto("TurnoPergunta").innerHTML = "Turno de Pergunta - " + valorLocalPlayer2;
}

respondendo.value = "";



}
function pegarObjeto(nome) {
    return document.getElementById(nome);
}
