import { Card } from "scryfall-api";

export default class CardDto {
    quantity: string;
    id: string;
    name: string;
    colors: string[];
    image: string;
    type: string;


    public constructor(quantity?: string, id?: string, name?: string) {
        this.quantity = quantity || '';
        this.id = id || '';
        this.name = name || '';
        this.colors = [];
        this.image = '';
        this.type = '';
    }

    public static fromScryfallCard(card: Card, quantity: string): CardDto {
        return {
            quantity: quantity,
            id: card.id,
            name: card.name,
            image: card.image_uris?.normal || '',
            colors: card.colors || [],
            type: card.type_line
        };
    }
}
