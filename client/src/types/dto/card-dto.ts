import { Card } from "scryfall-api";
import { images } from "../../providers/image-provider";

export default class CardDto {
    quantity: string;
    id: string;
    name: string;
    colors: string[];
    image: string;
    type: string;


    public constructor(
        quantity?: string,
        id?: string,
        name?: string,
        colors?: string[],
        image?: string,
        type?: string
    ) {
        this.quantity = quantity || '';
        this.id = id || '';
        this.name = name || '';
        this.colors = colors || [];
        this.image = image || '';
        this.type = type || '';
    }

    public static fromScryfallCard (card: Card, quantity: string): CardDto {
        return new CardDto(
            quantity,
            card.id,
            card.name,
            card.color_identity.length > 0 ? card.color_identity : ["C"],
            images.getSrc(card),
            card.type_line
        );
    }
}
