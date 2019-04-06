import React, { Component } from "react";
import CARDS from "./model/cardConstants";
import Card from "./card";

export default class DiscardStackView extends Component {
  changeCard() {}
  render() {
    let cardSymbol = "";
    let cardSuit = "spade";

    if (this.props.topCard) {
      cardSymbol = this.props.topCard.getCard();
      cardSuit = this.props.topCard.getSuit();
    }

    return (
      <div className={"discard-stack-set"}>
        <div onClick={this.changeCard}>
          <Card cardProps={{ suit: "spade", card: CARDS.BACK }} />
        </div>
        <Card
          cardProps={{
            card: cardSymbol,
            suit: cardSuit
          }}
        />
      </div>
    );
  }
}
