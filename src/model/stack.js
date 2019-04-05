class Stack {
  constructor() {
    this.stack = [];
  }

  addCard(card) {
    this.stack.push(card);
  }

  addCards(cards) {
    this.stack = this.stack.concat(cards);
  }

  removeCard() {
    return this.stack.pop();
  }

  removeAllCards() {
    const cards = this.stack.slice();
    this.stack = [];
    return cards;
  }

  getTopCard() {
    console.log(this.stack.length);
    if (this.stack.length) {
      return this.stack[this.stack.length - 1];
    }
  }
  getLength() {
    return this.stack.length;
  }
}

export default Stack;
