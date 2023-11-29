//Input player name
var name1 = prompt("Enter player1's name");
document.querySelector(".player1").innerHTML = name1;
var name2 = prompt("Enter player2's name");
document.querySelector(".player2").innerHTML = name2;
//Get the first image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "./images/" + "dice" + randomNumber1 + ".png";
var img1 = document.querySelector(".img1");
img1.setAttribute("src", randomDiceImage1);
//Get the second image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "./images/" + "dice" + randomNumber2 + ".png";
var img2 = document.querySelector(".img2");
img2.setAttribute("src", randomDiceImage2);
//Get title
var title = document.getElementsByTagName("h1")[0];
//determine the winner
if (randomNumber1 > randomNumber2) {
    title.innerHTML = name1 + " Win!";
} else if (randomNumber2 > randomNumber1) {
    title.innerHTML = name2 + " Win!";
} else {
    title.innerHTML = "Draw";
}