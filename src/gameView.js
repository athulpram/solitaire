import Game from "./model/game";
import React, { Component } from "react";
import SuitStackView from "./suitStackView";
import CategorizationBoardView from "./categorizationBoardView";
import createDeck from "./model/deck";
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
      ),
      suitStack: <SuitStackView />
    };
    console.log(this.state + "state of game");
  }
  componentDidMount() {
    console.log("component mounted successfully");
  }

  render() {
    return (
      <div class="game-view">
        <div className="top-half-game-board">
          {this.state.discardStack}
          {this.state.suitStack}
        </div>
        {this.state.categorizationBoard}
      </div>
    );
  }
}
