/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".card").classList.add(randomSuits());
  document.querySelector("span").innerHTML = randomNumbers();
};

function randomSuits() {
  let pinta = ["spade", "heart", "diamand", "club"];
  let pintaPosition = Math.floor(Math.random() * pinta.length);
  return pinta[pintaPosition];
}
function randomNumbers() {
  let card = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let cardPosition = Math.floor(Math.random() * card.length);
  return card[cardPosition];
}
