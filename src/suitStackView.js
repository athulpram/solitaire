import React, { Component } from "react";
import Card from "./card";
const COLOR = {
  heart: "playing-card-red",
  spade: "playing-card-black",
  clubs: "playing-card-black",
  diamond: "playing-card-red"
};

export default class SuitStackView extends Component {
  onDropFunc(e) {
    e.preventDefault();
  }
  onDragOver() {}
  render() {
    const cards = this.props.piles.map(card => {
      let classname = COLOR.spade;
      let cardSymbol = "\uD83C\uDCA0";

      if (card) {
        classname = card.suit ? COLOR[card.suit] : COLOR.spade;

        cardSymbol = card.card ? card.card : "\uD83C\uDCA0";
      }

      return (
        <div className={classname}>
          <span>{cardSymbol}</span>
        </div>
      );
    });
    return <div className="suit-stack">{cards}</div>;
  }
}
