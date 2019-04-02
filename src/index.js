import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import createDeck from "./deck";

const deck = createDeck();

// const cardSymbols = [
//   ...CARDS.CLUBS,
//   ...CARDS.SPADES,
//   ...CARDS.HEARTS,
//   ...CARDS.DIAMONDS
// ];
// const redCards = cardSymbols.map(value => (
//   <Card card={value} cardType="playing-card-red" />
// ));
// const blackCards = cardSymbols.map(value => (
//   <Card card={value} cardType="playing-card-black" />
// ));

// const elements = [...redCards, ...blackCards];

// ReactDOM.render(<div>{elements}</div>, document.getElementById("root"));

const elements = deck.map(value => <Card cardProps={value} />);

ReactDOM.render(<div>{elements}</div>, document.getElementById("root"));