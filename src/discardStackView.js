import React, { Component } from "react";
import CARDS from "./model/cardConstants";
import Card from "./card";

export default class DiscardStackView extends Component {
  render() {
    return (
      <div className={"discard-stack-set"}>
        <Card cardProps={{ suit: "spade", card: CARDS.BACK }} />
        <Card
          cardProps={{
            card: this.props.topCard.getCard(),
            suit: this.props.topCard.getSuit()
          }}
        />
      </div>
    );
  }
}
