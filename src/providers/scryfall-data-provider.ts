import { Cards } from 'scryfall-api'; //https://github.com/MarioMH8/scryfall-api/blob/main/DOCUMENTATION.md

/**
 * @summary Uses a card's name to get its ID from the Scryfal API
 * @param cardName The exact name of the card
 * @returns The card's ID
 */
export async function getCardIdAsync(cardName: string): Promise<string> {
    return await Cards.byName(cardName).then((result) => {
        console.log('Retreiving ID for card: %s', cardName);
        return result ? result.id : 'undefined';
    });
}
