import { MTG, ZONES } from '../constants';
import { scryfall } from '../providers/scryfall-data-provider';
import CardDto from '../types/dto/card-dto';
import DeckDto from '../types/dto/deck-dto';
import ZoneDto from '../types/dto/zone-dto';



class TextFileService {
    /**
    * @param content from uploaded text file
    * @returns Array<UserCard>
    *
    * @todo figure out how to handle Zones
    * @todo return custom error messages
    */
public parse(content: string): DeckDto {
    console.log('content', content);
    if (!content) {
        //**TODO: THROW CUSTOM ERROR**//
        return new DeckDto(); // abort parsing
    }

    var deck: DeckDto = new DeckDto();
    content.split(/\r?\n/).forEach((element: string) => {
        if (element && MTG === element) {
            return;
        }
        if (element && ZONES.includes(element)) {
            //managing zone content
            var zone: ZoneDto = new ZoneDto(element);
            deck.push(zone);
        }
        if (element && !ZONES.includes(element)) {
            //managing card content
            deck.zones[deck.zones.length - 1].push(
                this.createCard(element)
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
    private createCard(element: string): CardDto {
        const xIndex = element.indexOf('x');
        const cardQuant = element.substring(0, xIndex);
        const cardName = element.substring(xIndex + 2).trimStart();

        if (!cardQuant || !cardName) {
            //**TODO: THROW CUSTOM ERROR**//
            console.log('invalid card parameters');
        }
        return new CardDto(cardQuant, '', cardName);
    }

/**
    * @param deck
    * @returns deck with cards that have IDs
    *
    * @todo fix optimization
    */
    public async populateCardIds(deck: DeckDto): Promise<DeckDto> {
        var card: CardDto;
        for (let i = 0; i < deck.zones.length; i++) {
            for (let j = 0; j < deck.zones[i].cards.length; j++) {
                card = deck.zones[i].cards[j];
                var result = await scryfall.getCardByName(card.name);
                card.id = result.id;
            }
        }
        return deck;
    }
}

export const text = new TextFileService();