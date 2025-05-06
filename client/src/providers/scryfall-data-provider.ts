// https://github.com/MarioMH8/scryfall-api/blob/main/DOCUMENTATION.md
import { Card, Cards } from 'scryfall-api'; 
import { CardNotFoundByNameError } from '../errors/CardNotFoundByNameError';

class ScryallDataProvider {
    public async getCardAsync(cardName: string): Promise<Card> {
        // Get card from cache if available
        const cachedCard = this.getCardFromCache(cardName);
        if (cachedCard) {
            return cachedCard;
        }
        
        // Get card from API
        return await Cards.byName(cardName).then((result) => {
            if (result) {
                // Set card in cache
                this.setCardInCache(result);
                return result;
            }
            throw new CardNotFoundByNameError(cardName);
        });
    }

    private setCardInCache(card: Card) {
        localStorage.setItem(card.name, JSON.stringify(card));
    }

    private getCardFromCache(cardName: string): Card | null {
        const cachedCard = localStorage.getItem(cardName);
        return cachedCard ? JSON.parse(cachedCard) as Card : null;
    }

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