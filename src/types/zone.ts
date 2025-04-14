import Card from './card';

export default class Zone {
    name: string;
    cards: Card[];

    public constructor(name: string, shared: string, cards: Card[]) {
        this.name = name || '';
        this.cards = cards || [];
    }
}
