/**
 * ideal processing sequence:
 *  1. parse content per line
 *  2a. if content line element is a Zone then ...
 *  2b. if content line element is not a Zone then treat it as a card
 *      i. update card quantity, card name
 *      ii. get card ID
 *      iii. update card ID
 *      iv. add initialized card to deck
 *  3. after deck has been built, send deck
 */

import { getCardIdAsync } from '../providers/scryfall-data-provider';
import Card from '../types/card';
//import Deck from "../types/deck";
//import { newDeck } from "../types/deck";

const ZONES: string[] = [
    'Main',
    'Command Zone',
    'Sideboard',
    'Planes/Schemes',
    'Magic the Gathering',
];

/**
 * @param content from uploaded text file
 * @returns Array<UserCard>
 *
 * @todo figure out how to handle Zones
 * @todo return custom error messages
 */
export function parseContent(content: string): Card[] {
    console.log('content', content);
    if (!content) {
        return []; // abort parsing
    }

    var deck: Card[] = [];
    content.split(/\r?\n/).forEach((element: string) => {
        if (element && !ZONES.includes(element)) {
            var xIndex = element.indexOf('x');
            createCard(
                deck,
                element.substring(0, xIndex),
                element.substring(xIndex + 2).trimStart()
            );
        }
    });
    //console.log('Content parsing completed. Deck returned.');
    console.log(deck);
    return deck;
}

/**
 * @param cardQuant quantity of a specific card in the deck
 * @param cardName name of a specific card in the deck
 * @implements 100ms delay per card creation
 * ! updates the environmental deck object
 *
 * @todo fix synchronousity issue where card is pushed before getCardID returns
 */
function createCard(deck: Card[], cardQuant: string, cardName: string) {
    if (!cardQuant || !cardName) {
        console.log('invalid card parameters');
        return;
    }

    // TODO: decouple deck push and create card if needed
    deck.push(new Card(cardQuant, '', cardName));
}

export async function populateCardIds(cards: Card[]): Promise<Card[]> {
    var card: Card;
    for (let i = 0; i < cards.length; i++) {
        card = cards[i];
        card.id = await getCardIdAsync(card.name);
    }
    return cards;
}
