var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

if(player1>player2){
document.querySelector("h1").textContent = "Player 1 WON";
}
else if(player1<player2){
    document.querySelector("h1").textContent = "Player 2 WON";
}
else{
    document.querySelector("h1").textContent = "DRAW";
}

document.querySelector(".img1").setAttribute("src", "images/dice"+player1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+player2+".png");

