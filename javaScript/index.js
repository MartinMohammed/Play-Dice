
function play(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // range = 0 <= x < 6 -> 1 <= x <= 7
var imageSrc1 = "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src", imageSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // range = 0 <= x < 6 -> 1 <= x <= 7
var imageSrc2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src", imageSrc2);

if (randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins! 🏆"
}
else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw!"
}
else {
  document.querySelector("h1").textContent = "🏆 Player 1 Wins!"
}};

document.querySelector(".myButton").addEventListener("click", function(){
  play();
});
