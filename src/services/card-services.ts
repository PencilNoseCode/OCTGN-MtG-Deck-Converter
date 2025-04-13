//import { ScriptElementKind } from 'typescript'
//import { getCardID } from '../providers/scryfall-data-provider'

const ZONES: string[] = [
    'Main',
    'Command Zone',
    'Sideboard',
    'Planes/Schemes',
    'Magic the Gathering',
];
//const DECK:string[] = [];

export function parseContent(content: string) {
    if (!content) {
        console.log('content undefined');
    }
    let deck = content.split(/\r?\n/);
    deck.forEach((element: string) => {
        if (!element) {
            console.log('element is undefined');
        }
        if (ZONES.includes(element)) {
            console.log('element is not a card'); // skip for now
        } else {
            window.setTimeout(() => {
                buildDeck(
                    Number(element.substring(0, element.indexOf('x'))),
                    String(element.split('x')[element.indexOf('x')]).trimStart()
                );
            }, 100);
        }
    });
}

function buildDeck(cardQuant: number, cardName: string) {
    if (!cardQuant || !cardName) {
        console.log('invalid buildDeck parameters');
    }
    console.log('Adding %d of card named "%s"', cardQuant, cardName);
    //console.log('CardID: %s', getCardID(cardName))
    //console.log(getCardID(cardName)); // takes in card name, returns card id
}
