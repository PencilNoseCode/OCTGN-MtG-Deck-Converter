export default class CardDto {
    quantity: string;
    id: string;
    name: string;

    public constructor(quantity: string, id: string, name: string) {
        this.quantity = quantity;
        this.id = id;
        this.name = name;
    }
}
