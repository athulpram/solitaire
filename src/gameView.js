import Game from "./model/game";
import React, { Component } from "react";
import SuitStackView from "./suitStackView";
import createDeck from "./model/deck";
import DiscardStackView from "./discardStackView";
import Pile from "./pileView";

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
      categorizationBoard: this.createCategorizationBoard(
        this.game.getCategorizationData()
      ),
      suitStack: <SuitStackView piles={this.game.getSuitData()} />
    };
  }
  componentDidMount() {}

  changeCard() {
    this.game.checkCard();
    this.updateState();
  }

  updateState() {
    const suitStackData = this.game.getSuitData();
    const drawData = this.game.getTopCardOfDiscardStack();
    const categorizeData = this.game.getCategorizationData();
    const categorizeBoard = this.createCategorizationBoard(categorizeData);

    console.log("this sadkfdf" +JSON.stringify(drawData));
    
    const state = {
      discardStack: <DiscardStackView topCard={drawData} />,
      categorizationBoard: categorizeBoard,
      suitStack: <SuitStackView piles={suitStackData} />
    };
    this.setState(state);
  }

  onDragOver(e) {
    e.preventDefault();
  }
  onDropFunc(e) {
    const cardId = e.dataTransfer.getData("id");
    this.game.categorizeCard(cardId);
    this.updateState();
  }

  categorizeCard(pileId, e) {
    const cardId = e.dataTransfer.getData("id");

    this.game.rearrangeCard(pileId, cardId);
    this.updateState();
  }

  createCategorizationBoard(categorizeData) {
    console.log("categorize data ..... " + JSON.stringify(categorizeData));
    const piles = categorizeData.map((pile, index) => {
      return (
        <div
          onDragOver={e => {
            this.onDragOver(e);
          }}
          onDrop={e => {
            this.categorizeCard(index, e);
          }}
          className="categorize-pile"
        >
          <Pile cards={pile} />
        </div>
      );
    });

    return <div class="categorization-board">{piles}</div>;
  }

  render() {
    return (
      <div class="game-view">
        <div className="top-half-game-board">
          <div onClick={e => this.changeCard(e)}>{this.state.discardStack}</div>
          <div
            onDragOver={e => {
              this.onDragOver(e);
            }}
            onDrop={e => {
              this.onDropFunc(e);
            }}
          >
            {this.state.suitStack}
          </div>
        </div>
        {this.state.categorizationBoard}
      </div>
    );
  }
}
