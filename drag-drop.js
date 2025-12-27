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
const reloadButton = document.getElementById("reload");
const cardsElement = document.getElementById("cards");
const realCardsField = document.getElementById("real_cards");
const playedCardsField = document.getElementById("played_cards");

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

infoElement.innerHTML = cards;

function generateCards(cards, cardsF) {
  for (let i = 0; i < cards.length; i++) {
    cardsF.innerHTML += `<div id="rc${i}" class="card"><span>${cards[i]}</span></div>`;
  }
}

generateCards(cards, realCardsField);
// generateCards(playedCards, playedCardsField);
