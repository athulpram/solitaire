class PlayingCard {
  constructor(card, suit, rank) {
    this.card = card;
    this.suit = suit;
    this.rank = rank;
    this.faceUp = false;
  }

  getCard() {
    if (this.faceUp) {
      return this.card;
    }
    return "\uD83C\uDCA0";
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

  getSuit() {
    if (this.faceUp) {
      return this.suit;
    }
    return "spade";
  }

  getRank() {
    return this.rank;
  }

  isFaceUp() {
    return this.faceUp;
  }
  setFaceUP() {
    this.faceUp = true;
  }
  setFaceDown() {
    this.faceUp = false;
  }
}

export default PlayingCard;
