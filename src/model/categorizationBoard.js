import Pile from "./pile";

class CategorizationBoard {
  constructor() {
    this.categorizationPiles = [
      new Pile(),
      new Pile(),
      new Pile(),
      new Pile(),
      new Pile(),
      new Pile(),
      new Pile()
    ];
  }
  initialize(cards) {
    let numberOfCards = 1;
    this.categorizationPiles.forEach(pile => {
      pile.addCards(cards.splice(cards.length - numberOfCards));
      numberOfCards++;
    });
  }

  getData() {
    return this.categorizationPiles.map(pile => pile.getData());
  }
  getCard(cardId) {
    const searchData = this.categorizationPiles.map((pile, index) => {
      return { card: pile.getCard(cardId), fromPile: index };
    });

    return searchData.find(data => data.card);
  }

  deleteCardFrom(pileId, cardId) {
    return this.categorizationPiles[pileId].removeCard(cardId);
  }

  addCardToPile(pileId, card) {
    const status = this.categorizationPiles[pileId].categorizeCard(card);
    return status;
  }
}

export default CategorizationBoard;
