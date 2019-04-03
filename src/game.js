import drawStack from "./drawStack";
import lodash from "lodash";
import CategorizationBoard from "./categorizationBoard";

class Game {
  constructor() {
    this.drawStack = new drawStack();
    this.categorizationBoard = new CategorizationBoard();
  }

  startGame(deck) {
    deck = lodash.shuffle(deck);

    this.categorizationBoard.initialize(deck.splice(deck.length - 28));

    for (let i = 0; i < deck.length; i++) {
      this.drawStack.addCard(deck.pop());
    }
  }

  getTopCardOfDiscardStack() {
    return this.drawStack.getTopCardOfDiscradStack();
  }

  checkCard() {
    this.drawStack.checkCard();
  }

  getCategorizationData() {
    return this.categorizationBoard.getData();
  }
}

export default Game;
