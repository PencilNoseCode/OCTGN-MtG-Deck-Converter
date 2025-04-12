import { Cards } from 'scryfall-api'; //https://github.com/MarioMH8/scryfall-api/blob/main/DOCUMENTATION.md

//PARAMS:
//in --> cardName (string)
//out --> cardID (string) returned from scryfall api
export function processCard(cardName: any) {
    if (cardName) {
        Cards.byName(cardName).then((result) => {
            if (result) {
                console.log(result.id);
                if (result.id) {
                    return result.id;
                }
                console.log('result.id is undefined');
            } else {
                console.log('result is undefined');
            }
        });
    } else {
        console.log('cardName is undefined');
    }
}
