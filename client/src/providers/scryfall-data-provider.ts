import { Cards } from 'scryfall-api'; //https://github.com/MarioMH8/scryfall-api/blob/main/DOCUMENTATION.md

/**
 * @summary Uses a card's name to get its ID from the Scryfal API
 * @param cardName The exact name of the card
 * @returns The card's ID
 */
export async function getCardIdAsync(cardName: string): Promise<string> {
    // Check cache first
    const cardId = getCardIdFromCache(cardName);
    if (cardId) {
        console.log(`Retrieved ${cardName} from cache`);
        return cardId;
    }

    // Retrieve from API and add it to cache
    console.log(`${cardName} was not in cache.  Retrieving from API`);
    return await Cards.byName(cardName).then((result) => {
        console.log(`Retreiving ID for card: ${cardName}`, cardName);
        if (result) {
            setCardIdInCache(cardName, result.id);
            return result.id;
        }
        return 'undefined';
    });
}

function setCardIdInCache(cardname: string, cardId: string) {
    localStorage.setItem(cardname, cardId);
}

function getCardIdFromCache(cardName: string): string {
    return localStorage.getItem(cardName) as string;
}
