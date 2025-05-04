import Card from './card-dto';

export default class ZoneDto {
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
