export default interface UserCard {
    quantity: number;
    name: string;
    id: string;
}

export function newCard(cardQuant: number, cardName: string, cardID: string) {
    let newCard: UserCard = {
        quantity: cardQuant,
        name: cardName,
        id: cardID,
    };
    //console.log('Created new card object. Name: "%s" Quant: %d ID: %s',
    //    newCard.name, newCard.quantity, newCard.id
    //)
    return newCard;
}
