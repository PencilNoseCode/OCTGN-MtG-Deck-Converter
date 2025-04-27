import Card from './card';

export default class Zone {
    name: string;
    cards: Card[];
    shared: string;

    public constructor() {
        this.name = '';
        this.cards = [];
        this.shared = 'False';
    }

    public push(card: Card) {
        this.cards.push(card);
    }
}
