import Game from "./model/game";
import React, { Component } from "react";
import SuitStackView from "./suitStackView";
import CategorizationBoardView from "./categorizationBoardView";
import createDeck from "./model/deck";
import DiscardStackView from "./discardStackView";

export default class GameView extends Component {
  constructor(props) {
    super(props);
    const deck = createDeck();
    this.game = new Game();

    this.game.startGame(deck);
    this.game.checkCard();

    this.state = {
      discardStack: (
        <DiscardStackView topCard={this.game.getTopCardOfDiscardStack()} />
      ),
      categorizationBoard: (
        <CategorizationBoardView piles={this.game.getCategorizationData()} />
      ),
      suitStack: <SuitStackView />
    };
    console.log(this.state + "state of game");
  }
  componentDidMount() {
    console.log("component mounted successfully");
  }

  changeCard() {
    this.game.checkCard();
    const state = {
      discardStack: (
        <DiscardStackView topCard={this.game.getTopCardOfDiscardStack()} />
      ),
      categorizationBoard: (
        <CategorizationBoardView piles={this.game.getCategorizationData()} />
      ),
      suitStack: <SuitStackView />
    };
    this.setState(state);
  }

  render() {
    return (
      <div class="game-view">
        <div className="top-half-game-board">
          <div onClick={e => this.changeCard(e)}>
            {this.state.discardStack}
            {this.state.suitStack}
          </div>
        </div>
        {this.state.categorizationBoard}
      </div>
    );
  }
}
