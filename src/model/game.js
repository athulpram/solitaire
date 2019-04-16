import drawStack from "./drawStack";
import lodash from "lodash";
import CategorizationBoard from "./categorizationBoard";
import SuitStack from "./suitStack";

const CARDS_IN_CATEGORIZATION_BOARD = 28;

class Game {
  constructor() {
    this.drawStack = new drawStack();
    this.categorizationBoard = new CategorizationBoard();
    this.suitStack = new SuitStack();
  }

  startGame(deck) {
    deck = lodash.shuffle(deck);
    this.categorizationBoard.initialize(
      deck.splice(deck.length - CARDS_IN_CATEGORIZATION_BOARD)
    );
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

  findCard(cardId) {
    let searchData = this.categorizationBoard.getCard(cardId);

    if (!searchData) {
      searchData = {};
      searchData.card = [this.getTopCardOfDiscardStack()];
      searchData.fromPile = undefined;
    }
    return searchData;
  }

  categorizeCard(cardId) {
    const searchData = this.findCard(cardId);
    if (searchData.fromPile && searchData.card.length > 1) {
      return;
    }

    searchData.card = searchData.card[0];

    if (this.suitStack.addCard(searchData.card)) {
      if (searchData.fromPile >= 0) {
        this.categorizationBoard.deleteCardFrom(searchData.fromPile, cardId);
        return;
      }
      searchData.card = this.drawStack.removeCard();
    }
  }

  rearrangeCard(pileId, cardId) {
    const searchData = this.findCard(cardId);
    const status = this.categorizationBoard.addCardToPile(
      pileId,
      searchData.card
    );
    if (status) {
      if (searchData.fromPile >= 0) {
        this.categorizationBoard.deleteCardFrom(searchData.fromPile, cardId);
        return;
      }
      searchData.card = this.drawStack.removeCard();
    }
  }
}

export default Game;
