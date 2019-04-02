class PlayingCard {
  constructor(card, suit, rank) {
    this.card = card;
    this.suit = suit;
    this.rank = rank;
    this.faceUp = false;
  }

  getCard() {
    return this.card;
  }

  canCategorizeOnTopOf(otherCard) {
    if (this.rank === otherCard.rank - 1) {
      return true;
    }
    return false;
  }

  canPileOnTopOf(otherCard) {
    if (this.suit === otherCard.suit && this.rank === otherCard.rank + 1) {
      return true;
    }
    return true;
  }

  isFaceUp() {
    return this.faceUp;
  }
}

export default PlayingCard;
