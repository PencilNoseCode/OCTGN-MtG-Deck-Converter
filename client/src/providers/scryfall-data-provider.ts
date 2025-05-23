// https://github.com/MarioMH8/scryfall-api/blob/main/DOCUMENTATION.md
import { Card, Cards, CardSearch, MagicPageResult } from 'scryfall-api'; 
import { CardNotFoundByNameError } from '../errors/CardNotFoundByNameError';
import Bottleneck from 'bottleneck';
import { CardNotFoundByIdError } from '../errors/CardNotFoundByIdError';

class ScryallDataProvider {
    private REQUEST_MIN_INTERVAL = 100; // milliseconds

    private limiter = new Bottleneck({
        maxConcurrent: 1,
        minTime: this.REQUEST_MIN_INTERVAL
    });

    public async getCardbyId(cardId: string): Promise<Card> {
        // Get card from cache if available
        const cachedCard = await this.getCardFromCache(cardId);
        if (cachedCard) {
            console.debug(`Retrieving ${cardId} from cache`);
            return cachedCard;
        }
        else {
            console.warn(`Retrieved ${cachedCard} from cache when looking for ${cardId}`);
            // Get card from API but limit how fast we make requests
            
            return await this.limiter.schedule(
                () => this.getCardByIdFromScryfall(cardId)
            );
        }
    }

    public async getCardByName(cardName: string): Promise<Card> {
        // Get card from cache if available
        const cachedCard = await this.getCardFromCache(cardName);
        if (cachedCard) {
            console.debug(`Retrieving ${cardName} from cache`);
            return cachedCard;
        }
        else {
            console.warn(`Retrieved ${cachedCard} from cache when looking for ${cardName}`);
            // Get card from API but limit how fast we make requests
            return await this.limiter.schedule(
                () => this.getCardByNameFromScryfall(cardName)
            );
        }
    }

    public async getCardSearchResults(query: string, numOfResults: number): Promise<Card[]> {
        return await Cards.search(query).get(numOfResults);
    }

    private async getCardByIdFromScryfall(cardId: string): Promise<Card> {
        return await Cards.byId(cardId).then((result) => {
            if (result) {
                // Set card in cache
                this.setCardInCache(result);
                console.warn(`Retrieved "${result.id}" (${cardId}) from scryfall`);
                return result;
            }
            throw new CardNotFoundByIdError(cardId);
        });
    }

    private async getCardByNameFromScryfall(cardName: string): Promise<Card> {
        return await Cards.byName(cardName).then((result) => {
            if (result) {
                // Set card in cache
                this.setCardInCache(result);
                console.warn(`Retrieved "${result.name}" (${cardName}) from scryfall`);
                return result;
            }
            throw new CardNotFoundByNameError(cardName);
        });
    }
    
    private setCardInCache(card: Card) {
        // Create cache entry accessible by id and another by name
        localStorage.setItem(card.id, JSON.stringify(card));
        localStorage.setItem(card.name, JSON.stringify(card));
    }

    /**
     * @param cacheKey Card name or id
     */
    private async getCardFromCache(cacheKey: string): Promise<Card | null> {
        var cachedCard: Card;
        try {
            const cachedCardString = localStorage.getItem(cacheKey);
            if (cachedCardString) {
                cachedCard = JSON.parse(cachedCardString) as Card;
                if (cachedCard) {
                   return cachedCard;
                }
                
                // Entry was invalid, let's remove it
                localStorage.removeItem(cacheKey);
            }
            return null;
        }
        catch {
            console.error(`Error occured while trying to retrieve card '${cacheKey}' from cache`);
            return null;
        }
    }



    /* OLD CODE BELOW, REMOVE ONCE WE NO LONGER USE IT */



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