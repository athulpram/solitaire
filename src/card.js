import React, { Component } from "react";
const COLOR = {
  heart: "playing-card-red",
  spade: "playing-card-black",
  clubs: "playing-card-black",
  diamond: "playing-card-red"
};

export default class Card extends Component {
  onDragStart(ev) {
    ev.dataTransfer.setData("id", this.props.cardProps.card);
  }
  render() {
    return (
      <div
        className={COLOR[this.props.cardProps.suit]}
        onDragStart={e => this.onDragStart(e)}
        draggable={this.props.cardProps.card !== "\uD83C\uDCA0"}
        id={this.props.cardProps.card}
      >
        <span>{this.props.cardProps.card}</span>
      </div>
    );
  }
}
