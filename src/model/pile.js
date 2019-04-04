class Pile {
  constructor() {
    this.pile = [];
  }

  addCards(cards) {
    this.pile = cards.slice();
    this.pile[this.pile.length - 1].setFaceUP();
  }
  getData() {
    return this.pile.slice();
  }
}

export default Pile;
