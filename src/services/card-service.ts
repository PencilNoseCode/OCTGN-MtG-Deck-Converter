import { getCardIdAsync } from '../providers/scryfall-data-provider';
import Card from '../types/card';
import Deck from '../types/deck';
import Zone from '../types/zone';

const ZONES: string[] = ['Main', 'Command Zone', 'Sideboard', 'Planes/Schemes'];

const MTG = 'Magic the Gathering';

/**
 * @param content from uploaded text file
 * @returns Array<UserCard>
 *
 * @todo figure out how to handle Zones
 * @todo return custom error messages
 */
export function parseContent(content: string): Deck {
    console.log('content', content);
    if (!content) {
        //**TODO: THROW CUSTOM ERROR**//
        return new Deck(); // abort parsing
    }

    var deck: Deck = new Deck();
    content.split(/\r?\n/).forEach((element: string) => {
        if (element && MTG === element) {
            return;
        }
        if (element && ZONES.includes(element)) {
            //managing zone content
            var zone: Zone = new Zone();
            zone.name = element;
            deck.push(zone);
        }
        if (element && !ZONES.includes(element)) {
            //managing card content
            var xIndex = element.indexOf('x');
            deck.zones[deck.zones.length - 1].push(
                createCard(
                    element.substring(0, xIndex),
                    element.substring(xIndex + 2).trimStart()
                )
            );
        }
    });
    console.log(deck);
    return deck;
}

/**
 * @param cardQuant quantity of a specific card in the deck
 * @param cardName name of a specific card in the deck
 */
function createCard(cardQuant: string, cardName: string): Card {
    if (!cardQuant || !cardName) {
        //**TODO: THROW CUSTOM ERROR**//
        console.log('invalid card parameters');
    }
    return new Card(cardQuant, '', cardName);
}

/**
 * @param deck
 * @returns deck with cards that have IDs
 *
 * @todo fix optimization
 */
export async function populateCardIds(deck: Deck): Promise<Deck> {
    var card: Card;
    for (let i = 0; i < deck.zones.length; i++) {
        for (let j = 0; j < deck.zones[i].cards.length; j++) {
            card = deck.zones[i].cards[j];
            card.id = await getCardIdAsync(card.name);
        }
    }
    return deck;
}
