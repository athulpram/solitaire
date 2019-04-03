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
    this.discardStack.addCard(this.drawStack.removeCard());
  }

  selectCardForCategorizing() {
    return this.discardStack.removeCard();
  }

  getTopCardOfDiscradStack() {
    const card = this.discardStack.getTopCard();
    return card;
  }
}

export default DrawStack;
