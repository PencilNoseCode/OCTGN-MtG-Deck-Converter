import UserCard from './user-card';

export default interface Deck {
    name: string;
    cards: Array<UserCard>;
}

export function newDeck(cards: Array<UserCard>) {
    let newDeck: Deck = {
        name: 'Deck Name',
        cards: cards,
    };
    return newDeck;
}
