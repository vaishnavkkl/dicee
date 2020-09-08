var random1 =Math.floor(1+ Math.random()*6);
var random2 =Math.floor(1+ Math.random()*6);
var randomDiceImage1 = "images/dice"+random1+".png";
var randomDiceImage2 = "images/dice"+random2+".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (random1 > random2){
  document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (random1 === random2){
  document.querySelector("h1").innerHTML = "Tied";
}
else {
  document.querySelector("h1").innerHTML = "player 2 wins";
}
