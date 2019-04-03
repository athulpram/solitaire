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
    console.log(cards.length);
  }
}

export default CategorizationBoard;
