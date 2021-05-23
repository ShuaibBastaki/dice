var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var diceNum1 = document.src="images/dice" + randomNumber1 +".png";
var diceNum2 = document.src="images/dice" + randomNumber2 +".png";

document.querySelector(".img1").setAttribute("src", diceNum1);
document.querySelector(".img2").setAttribute("src", diceNum2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw :)";
}