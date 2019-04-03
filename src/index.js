import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import createDeck from "./deck";
import Game from "./game";
import CARDS from "./cardConstants";

const deck = createDeck();
const game = new Game();
game.startGame(deck);
game.checkCard();

const DiscardStack = function() {
  console.log("dasfsdf" + game.getTopCardOfDiscardStack());
  return (
    <div className={"discard-stack-set"}>
      <Card cardProps={{suit : "heart",card : CARDS.BACK}}/>
      <Card cardProps={game.getTopCardOfDiscardStack()} />
    </div>
  );
};

const GameBoard = function() {
  return (
    <div>
      <DiscardStack />
    </div>
  );
};

ReactDOM.render(
  <div>
    <GameBoard />
  </div>,
  document.getElementById("root")
);

//----------------Show Cards-------------------------//
// const elements = deck.map(value => <Card cardProps={value} />);

// ReactDOM.render(<div>{elements}</div>, document.getElementById("root"));
