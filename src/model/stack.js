class Stack {
  constructor() {
    this.stack = [];
  }

  addCard(card) {
    this.stack.push(card);
  }

  addCards(cards) {
    this.stack.concat(cards);
  }

  removeCard(card) {
    return this.stack.pop();
  }

  removeAllCards() {
    const cards = this.stack.slice();
    this.stack = [];
    return cards;
  }

  getTopCard() {
    return this.stack[this.stack.length - 1];
  }
}

export default Stack;
