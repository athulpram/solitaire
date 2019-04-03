import React, { Component } from "react";
import CARDS from "./cardConstants";
import Card from "./card";

export default class DiscardStackView extends Component {
  render() {
    return (
      <div className={"discard-stack-set"}>
        <Card cardProps={{ suit: "heart", card: CARDS.BACK }} />
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
