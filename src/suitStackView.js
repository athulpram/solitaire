import React, { Component } from "react";
import Card from "./card";

export default class SuitStackView extends Component {
  render() {
    return (
      <div className = "suit-stack">
        <Card cardProps={{ suit: "heart", card: "\uD83C\uDCA0" }} />
        <Card cardProps={{ suit: "heart", card: "\uD83C\uDCA0" }} />
        <Card cardProps={{ suit: "heart", card: "\uD83C\uDCA0" }} />
        <Card cardProps={{ suit: "heart", card: "\uD83C\uDCA0" }} />
      </div>
    );
  }
}
