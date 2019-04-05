class Pile {
  constructor() {
    this.pile = [];
  }

  addCard(card) {
    this.pile.push(card);
  }
  addCards(cards) {
    this.pile = cards.slice();
    this.pile[this.pile.length - 1].setFaceUP();
  }
  getData() {
    return this.pile.slice();
  }
  getTopCard() {
    if (this.pile.length > 1) return this.pile[this.pile.length - 1];
  }

  getCard(cardId) {
    if (this.pile.length > 0) {
      if (cardId == this.pile[this.pile.length - 1].getCard()) {
        return this.pile[this.pile.length - 1];
      }
    }
  }
  removeCard(cardId) {
    if (this.pile.length == 0) {
      return false;
    }
    if (cardId == this.pile[this.pile.length - 1].getCard()) {
      this.pile.pop();
      if (this.pile.length > 0) {
        this.pile[this.pile.length - 1].setFaceUP();
      }
      return true;
    }
    return false;
  }

  categorizeCard(card) {
    if (this.pile.length == 0) {
      if (card.getRank() == 12) {
        this.pile.push(card);
        return true;
      }
      return false;
    }
    const topCard = this.pile[this.pile.length - 1];
    console.log(JSON.stringify(topCard) + JSON.stringify(card));
    console.log(
      JSON.stringify(card) +
        "condition status " +
        card.canCategorizeOnTopOf(topCard)
    );
    if (card.canCategorizeOnTopOf(topCard)) {
      console.log("reached inside");
      this.pile.push(card);
      return true;
    }
    return false;
  }
}

export default Pile;
