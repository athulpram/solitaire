import React from "react";
import ReactDOM from "react-dom";
import Card from "./card.js";
import CARDS from "./cardConstants";

const cardSymbols = Object.values(CARDS);
const redCards = cardSymbols.map(value => (
  <Card card={value} cardType="playing-card-red" />
));
const blackCards = cardSymbols.map(value => (
  <Card card={value} cardType="playing-card-black" />
));

const elements = [...redCards, ...blackCards];

ReactDOM.render(<div>{elements}</div>, document.getElementById("root"));
