export class CardNotFoundByIdError extends Error {
    constructor(cardId: string) {
        super();
        this.name = "CardNotFoundByIdError";
        this.message = `${this.name}: Could not find card with the id '${cardId}'`;
    }
}