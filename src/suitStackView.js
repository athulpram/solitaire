import React, { Component } from "react";
import Card from "./card";

export default class SuitStackView extends Component {
  onDropFunc(e) {
    console.log("on Drop triggered");
    e.preventDefault();
    console.log("Fsadfds" + e.target.id);
  }
  onDragOver() {
    // console.log("onDragOver");
  }
  render() {
    return (
      <div
        className="suit-stack"
        onDragOver={e => {
          this.onDragOver(e);
        }}
        onDrop={e => {
          this.onDropFunc(e);
        }}
      >
        <Card cardProps={{ suit: "heart", card: "\uD83C\uDCA0" }} />
        <Card cardProps={{ suit: "heart", card: "\uD83C\uDCA0" }} />
        <Card cardProps={{ suit: "heart", card: "\uD83C\uDCA0" }} />
        <Card cardProps={{ suit: "heart", card: "\uD83C\uDCA0" }} />
      </div>
    );
  }
}
