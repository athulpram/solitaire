import drawStack from "./drawStack";
import lodash from "lodash";
import CategorizationBoard from "./categorizationBoard";
import SuitStack from "./suitStack";

class Game {
  constructor() {
    this.drawStack = new drawStack();
    this.categorizationBoard = new CategorizationBoard();
    this.suitStack = new SuitStack();
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

  getSuitData() {
    const data = this.suitStack.getData();
    return data;
  }

  categorizeCard(cardId) {
    let searchData = this.categorizationBoard.getCard(cardId);
    if (!searchData) {
      searchData = {};
      searchData.card = this.getTopCardOfDiscardStack();
      searchData.fromPile = undefined;
    }

    if (this.suitStack.addCard(searchData.card)) {
      if (searchData.fromPile >= 0) {
        this.categorizationBoard.deleteCardFrom(searchData.fromPile, cardId);
      } else {
        searchData.card = this.drawStack.removeCard();
      }
    }
  }

  rearrangeCard(pileId, cardId) {
    let searchData = this.categorizationBoard.getCard(cardId);
    if (!searchData) {
      searchData = {};
      searchData.card = this.getTopCardOfDiscardStack();
      searchData.fromPile = undefined;
    }
    const status = this.categorizationBoard.addCardToPile(
      pileId,
      searchData.card
    );
    if (status) {
      if (searchData.fromPile >= 0) {
        console.log("reached here " + status);

        this.categorizationBoard.deleteCardFrom(searchData.fromPile, cardId);
      } else {
        searchData.card = this.drawStack.removeCard();
      }
    }
  }
}

export default Game;
