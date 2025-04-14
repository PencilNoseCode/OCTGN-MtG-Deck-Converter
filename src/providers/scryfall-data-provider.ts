import { Cards } from 'scryfall-api'; //https://github.com/MarioMH8/scryfall-api/blob/main/DOCUMENTATION.md

/**
 * WARNING: implement window.setTimeout when using this data provider
 */

//PARAMS:
//in --> cardName (string)
//out --> cardID (string) returned from scryfall api
export function getCardID(cardName: string) {
    if (!cardName) {
        console.log('cardName is undefined');
        return;
    }
    Cards.byName(cardName).then((result) => {
        if (!result) {
            console.log('result is undefined');
            return;
        }
        console.log('Retreiving ID for card: %s', cardName);
        return result.id;
    });
}
