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
    const card = this.drawStack.removeCard();
    console.log(card);
    card.setFaceUP();
    this.discardStack.addCard(card);
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
