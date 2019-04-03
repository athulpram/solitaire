import Game from "./game";
import React, { Component } from "react";
import CategorizationBoardView from "./categorizationBoardView";
import createDeck from "./deck";
import DiscardStackView from "./discardStackView";

export default class GameView extends Component {
  constructor(props) {
    super(props);
    console.log("Inside constructor");

    const deck = createDeck();
    const game = new Game();

    game.startGame(deck);
    game.checkCard();
    
    this.state = {
      discardStack: (
        <DiscardStackView topCard={game.getTopCardOfDiscardStack()} />
      ),
      categorizationBoard: (
        <CategorizationBoardView piles={game.getCategorizationData()} />
      )
    };
    console.log(this.state + "state of game");
  }
  componentDidMount() {
    console.log("component mounted successfully");
  }

  render() {
    return (
      <div class="game-view">
        {this.state.discardStack}
        {this.state.categorizationBoard}
      </div>
    );
  }
}
