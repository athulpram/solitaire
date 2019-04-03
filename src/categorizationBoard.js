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
      console.log(cards.length);
    });
  }
  getData() {
    return this.categorizationPiles.map(pile => pile.getData());
  }
}

export default CategorizationBoard;
