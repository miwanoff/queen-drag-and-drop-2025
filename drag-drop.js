"use strict";
const cards = [
  "A",
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
  "K",
];

let playedCards = [];

const infoElement = document.getElementById("info");
const reloadElement = document.getElementById("reload");
const cardsElement = document.getElementById("cards");
const realCardsElement = document.getElementById("real_cards");
const playedCardsElement = document.getElementById("played_cards");

infoElement.innerHTML = "Take a card!";

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(shuffle(cards));