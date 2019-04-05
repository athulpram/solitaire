export default class SuitStack {
  constructor(props) {
    this.suits = {
      heart: [],
      clubs: [],
      spade: [],
      diamond: []
    };
  }

  getLastCardOf(array) {
    if (array.length != 0) {
      return array[array.length - 1];
    }
  }

  getData() {
    return [
      this.getLastCardOf(this.suits.heart),
      this.getLastCardOf(this.suits.clubs),
      this.getLastCardOf(this.suits.spade),
      this.getLastCardOf(this.suits.diamond)
    ];
  }

  addCard(card) {
    if (this.suits[card.getSuit()].length != 0) {
      if (
        card.canPileOnTopOf(
          this.suits[card.getSuit()][this.suits[card.getSuit()].length - 1]
        )
      ) {
        this.suits[card.getSuit()].push(card);
        return true;
      }
      return false;
    }
    if (card.getRank() == 0) {
      this.suits[card.getSuit()].push(card);
      return true;
    }
    return false;
  }
}
