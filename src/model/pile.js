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
      const card = this.pile.find(card => card.getCard() == cardId);
      if (card) {
        const index = this.pile.findIndex(arrayCard => arrayCard == card);
        return this.pile.slice(index);
      }
    }
  }
  removeCard(cardId) {
    if (this.pile.length == 0) {
      return false;
    }
    const card = this.pile.find(card => card.getCard() == cardId);
    if (card) {
      const index = this.pile.findIndex(arrayCard => arrayCard == card);
      this.pile.splice(index);
      if (this.pile.length > 0) {
        this.pile[this.pile.length - 1].setFaceUP();
      }
      return true;
    }
    return false;
  }

  categorizeCard(cards) {
    if (this.pile.length == 0) {
      if (cards[0].getRank() == 12) {
        this.pile = this.pile.concat(cards);
        return true;
      }
      return false;
    }
    const topCard = this.pile[this.pile.length - 1];

    if (cards[0].canCategorizeOnTopOf(topCard)) {
      console.log("reached inside");
      this.pile = this.pile.concat(cards);
      return true;
    }
    return false;
  }
}

export default Pile;
