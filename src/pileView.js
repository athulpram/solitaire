import React from "react";
import Card from "./card";

const Pile = function(props) {
  const cards = props.cards.map(card => {
    return <Card cardProps={{ card: card.getCard(), suit: card.getSuit() }} />;
  });
  return <div className="categorizing-pile">{cards}</div>;
};

export default Pile;
