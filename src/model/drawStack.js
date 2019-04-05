import Stack from "./stack";

class DrawStack {
  constructor() {
    this.drawStack = new Stack();
    this.discardStack = new Stack();
  }

  addCard(card) {
    this.drawStack.addCard(card);
  }

  checkCard() {
    if (this.drawStack.getLength() <= 0) {
      const cards = this.discardStack.removeAllCards();
      this.drawStack.addCards(cards);
    }

    const card = this.drawStack.removeCard();
    card.setFaceUP();
    this.discardStack.addCard(card);
  }

  selectCardForCategorizing() {
    return this.discardStack.removeCard();
  }

  removeCard() {
    this.discardStack.removeCard();
  }

  getTopCardOfDiscradStack() {
    const card = this.discardStack.getTopCard();
    return card;
  }
}

export default DrawStack;
