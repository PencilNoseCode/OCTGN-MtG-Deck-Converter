import Card from './card';

export default class Zone {
    name: string;
    cards: Card[];
    shared: string;

    public constructor(name?: string, cards?: Card[], shared?: string) {
        this.name = name || '';
        this.cards = cards || [];
        this.shared = shared || 'False';
    }

    public push(card: Card) {
        this.cards.push(card);
    }
}
