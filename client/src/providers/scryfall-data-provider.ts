import { Cards } from 'scryfall-api'; //https://github.com/MarioMH8/scryfall-api/blob/main/DOCUMENTATION.md

class ScryallDataProvider {
    /**
     * @summary Uses a card's name to get its ID from the Scryfal API
     * @param cardName The exact name of the card
     * @returns The card's ID
     */
    public async getCardIdAsync(cardName: string): Promise<string> {
        // Check cache first
        const cardId = this.getCardIdFromCache(cardName);
        if (cardId) {
            console.log(`Retrieved ${cardName} from cache`);
            return cardId;
        }

        // Retrieve from API and add it to cache
        console.log(`${cardName} was not in cache.  Retrieving from API`);
        return await Cards.byName(cardName).then((result) => {
            console.log(`Retreiving ID for card: ${cardName}`, cardName);
            if (result) {
                this.setCardIdInCache(cardName, result.id);
                return result.id;
            }
            return 'undefined';
        });
    }

    private setCardIdInCache(cardname: string, cardId: string) {
        localStorage.setItem(cardname, cardId);
    }

    private getCardIdFromCache(cardName: string): string {
        return localStorage.getItem(cardName) as string;
    }
}

export const scryfall = new ScryallDataProvider();