const colour = ["Red", "Yellow", "Black"];
const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let deck = [];
let compare1 = [];
let compare2 = [];

// create a deck of cards.
for (let i = 0; i < colour.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Colour: colour[i] };
        deck.push(card);
    }
}

// This shuffles the cards.
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}


// This displays all 30 results, so i know they are correct.
let deckOverall = [];
for (let i = 0; i < 30; i++) {
  deckOverall = deck;
}

let player1 = [];
let player2 = [];
//This now makes sure that all cards are in a new deck.
console.log('This is all the cards and their values ' + deckOverall)

while (deckOverall.length > 0)
  player1[] = deckOverall[0];
  deckOverall.splice(0, 1);

  player2[] = deckOverall[0];
  deckOverall.splice(0, 1);

console.log(player1);
console.log(player2);
//all cards are now given to the players.
