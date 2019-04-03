import React, { Component } from "react";
const COLOR = {
  heart: "playing-card-red",
  spade: "playing-card-black",
  clubs: "playing-card-black",
  diamond: "playing-card-red"
};

export default class Card extends Component {
  render() {
    return (
      <div className={COLOR[this.props.cardProps.suit]}>
        <span>{this.props.cardProps.card}</span>
      </div>
    );
  }
}
