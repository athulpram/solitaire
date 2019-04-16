import React, { Component } from "react";
import CARDS from "./model/cardConstants";
import Card from "./card";

export default class DiscardStackView extends Component {
  changeCard() {}
  render() {
    let topCard = "";
    if (this.props.topCard) {
      topCard = (
        <Card
          cardProps={{
            card: this.props.topCard.getCard(),
            suit: this.props.topCard.getSuit()
          }}
        />
      );
    }
    return (
      <div className={"discard-stack-set"}>
        <div onClick={this.changeCard}>
          <Card cardProps={{ suit: "spade", card: CARDS.BACK }} />
        </div>
        {topCard}
      </div>
    );
  }
}
