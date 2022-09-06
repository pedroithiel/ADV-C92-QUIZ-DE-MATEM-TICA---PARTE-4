function Enviar() {
    var playerOne = document.getElementById("player1").value;
    var playerTwo = document.getElementById("player2").value;

    localStorage.setItem("jogador1", playerOne);
    localStorage.setItem("jogador2", playerTwo);

    window.location = "segundaTela.html";
   
}