export default class Card {
    id: string;
    name: string;
    quantity: string;

    public constructor(id: string, name: string, quantity: string) {
        this.id = id || '';
        this.name = name || '';
        this.quantity = quantity || '';
    }
}
