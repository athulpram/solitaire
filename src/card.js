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
      <div
        className={COLOR[this.props.cardProps.suit]}
        onDragStart={e => e.dataTransfer.setData(e, this.props.cardProps.card)}
        draggable={this.props.cardProps.card !== "\uD83C\uDCA0"}
        id={this.props.cardProps.card}
      >
        <span>{this.props.cardProps.card}</span>
      </div>
    );
  }
}
