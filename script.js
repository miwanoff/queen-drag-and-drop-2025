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

function play(cards) {
  let card = "";
  console.log(shuffle(cards));

  while (cards.length > 0) {
    alert("Your turn!");
    let n = prompt("Choose a card");
    if (isNaN(n)) {
      return;
    }
    alert(cards[n]);
    if (cards[n] === "Q") {
      alert("Your win!");
      return;
    }
    cards.splice(n, 1);
    console.log(cards);
    alert("My turn!");
    let rand = Math.floor(Math.random() * cards.length);
    alert(rand + " " + cards[rand]);
    if (cards[rand] === "Q") {
      alert("I win!");
      return;
    }
    cards.splice(rand, 1);
    console.log(cards);
  }
}

play(cards);
