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

let isGame = true;

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

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  play(data);
}

function generateCards(cards, cardsF, rp = "r") {
  for (let i = 0; i < cards.length; i++) {
    cardsF.innerHTML += `<div id="${rp}c${i}" class="card" draggable="true" ondragstart="drag(event)"><span>${cards[i]}</span></div>`;
  }
}

function newPlay() {
  location.reload();
  return false;
}

function addEventCardList() {
  let cardElements = document.getElementsByClassName("class");
  for (let i = 0; i < cardElements.length; i++) {
    cardElements[i].addEventListener("click", play);
  }
}

function removeCard(cardIndex) {
  playedCards.push(cards[cardIndex]);
  console.log(playedCards);
  cards.splice(cardIndex, 1);
  infoElement.innerHTML = cards;
  realCardsField.innerHTML = "";
  generateCards(cards, realCardsField, "r");
  playedCardsField.innerHTML = "";
  generateCards(playedCards, playedCardsField, "p");
  addEventCardList();
}

function computerMove() {
  isGame = false;
  let rand = Math.floor(Math.random() * cards.length);
  console.log(rand);
  let computerCardId = `rc${rand}`;
  // console.log(computerCardId);
  let computerCard = document.getElementById(computerCardId);
  computerCard.style.top = "400px";
  // computerCard.style.left = 80 * playedCards.length + "px";
  setTimeout(removeCard.bind(this, rand), 200);
  isGame = true;
}

// computerMove();

function myMove(cardId) {
  isGame = false;
  // rc10
  let cardIndex = Number(cardId.slice(2));
  removeCard(cardIndex);
  // setTimeout(removeCard.bind(null, cardIndex), 200);
  isGame = true;
}

function play(cardId) {
  if (!isGame) return;
  try {
    myMove(cardId);
    if (cards.length > 0) {
      setTimeout(computerMove, 300);
    }
  } catch (ex) {
    infoElement.innerHTML = ex.message;
  }
}

function checkWin(gamer, card) {
  if (card == "Q") return true;
  else return false;
}

window.onload = () => {
  generateCards(cards, realCardsField, "r");
  addEventCardList();
  // generateCards(playedCards, playedCardsField);
  reloadButton.addEventListener("click", newPlay);
};
