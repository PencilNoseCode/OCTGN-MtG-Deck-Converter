import CardDto from "./card-dto";

export default class ZoneDto {
    name: string;
    cards: CardDto[];
    shared: string;

    public constructor(name?: string, cards?: CardDto[], shared?: string) {
        this.name = name || '';
        this.cards = cards || [];
        this.shared = shared || 'False';
    }

    public push(card: CardDto) {
        this.cards.push(card);
    }

    public count(): number {
        var total: number = 0;
        this.cards.forEach(c => {
            total += parseInt(c.quantity);
        });
        return total;
    }
}
