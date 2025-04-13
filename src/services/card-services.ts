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

import { getCardID } from '../providers/scryfall-data-provider';
import UserCard from '../types/user-card';
import { newCard } from '../types/user-card';
//import Deck from "../types/deck";
//import { newDeck } from "../types/deck";

const ZONES: string[] = [
    'Main',
    'Command Zone',
    'Sideboard',
    'Planes/Schemes',
    'Magic the Gathering',
];

var deck: Array<UserCard> = []; // consider not having an environmental variable

/**
 * @param content from uploaded text file
 * @returns Array<UserCard>
 *
 * @todo figure out how to handle Zones
 * @todo return custom error messages
 */
export function parseContent(content: string) {
    if (!content) {
        return; // abort parsing
    }
    content.split(/\r?\n/).forEach((element: string) => {
        if (!element) {
            return; // skip element
        }
        if (ZONES.includes(element)) {
            return; // skip element, for now
        } else {
            createCard(
                Number(element.substring(0, element.indexOf('x'))),
                String(element.split('x')[element.indexOf('x')]).trimStart()
            );
        }
    });
    console.log('Content parsing completed. Deck returned.');
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
function createCard(cardQuant: number, cardName: string) {
    if (!cardQuant || !cardName) {
        console.log('invalid card parameters');
    }
    window.setTimeout(() => {
        deck.push(newCard(cardQuant, cardName, String(getCardID(cardName)))); // TODO: decouple deck push and create card if needed
    }, 100);
}
