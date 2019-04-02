import PlayingCard from './playingCard';
import CARDS from "./cardConstants";

const SUITS = {
    HEART : "heart",
    CLUBS : "clubs",
    SPADE : "spade",
    DIAMOND : "diamond"
}

const heartSuit = function(){
    const cardSymbols = CARDS.HEARTS;
    return cardSymbols.map((card,rank)=>new PlayingCard(card,SUITS.HEART,rank));
}

const diamondSuit = function(){
    const cardSymbols = CARDS.DIAMONDS;
    return cardSymbols.map((card, rank) => new PlayingCard(card, SUITS.DIAMOND, rank));
}

const spadeSuit = function(){
    const cardSymbols = CARDS.SPADES;
    return cardSymbols.map((card, rank) => new PlayingCard(card, SUITS.SPADE, rank))
}

const clubSuit = function(){
    const cardSymbols = CARDS.CLUBS;
    return cardSymbols.map((card, rank) => new PlayingCard(card, SUITS.CLUBS, rank))
}

const createDeck = function(){
    const heartCards = heartSuit();
    const diamondCards = diamondSuit();
    const spadeCards = spadeSuit();
    const clubCards = clubSuit();

    return [...heartCards,...diamondCards,...spadeCards,...clubCards];
}

export default createDeck;