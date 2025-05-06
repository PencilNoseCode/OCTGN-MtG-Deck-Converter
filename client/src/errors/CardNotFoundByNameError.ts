export class CardNotFoundByNameError extends Error {
    constructor(cardName: string) {
        super();
        this.name = "CardNotFoundByNameError";
        this.message = `${this.name}: Could not find card with the name '${cardName}'`;
    }
}