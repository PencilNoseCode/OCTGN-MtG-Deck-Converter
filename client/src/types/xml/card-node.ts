export default class CardNode {
    attr_qty: string;
    attr_id: string;
    card: string;

    public constructor(quantity: string, id: string, name: string) {
        this.attr_qty = quantity || '';
        this.attr_id = id || '';
        this.card = name || '';
    }
}
