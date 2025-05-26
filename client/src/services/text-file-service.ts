import { MTG, ZONES } from '../constants';
import { scryfall } from '../providers/scryfall-data-provider';
import CardDto from '../types/dto/card-dto';
import DeckDto from '../types/dto/deck-dto';
import ZoneDto from '../types/dto/zone-dto';



class TextFileService {
    public cardToText(card: CardDto): string {
            return `${card.quantity}x ${card.name}`;
        }
    
    public parse(content: string): DeckDto {
        if (!content) {
            //**TODO: THROW CUSTOM ERROR**//
            return new DeckDto(); // abort parsing
        }

        var deck: DeckDto = new DeckDto();
        var currentZone: ZoneDto;
        content.split(/\r?\n/).forEach((element: string) => {
            if (element && MTG === element) {
                return;
            }
            if (element && ZONES.includes(element)) {
                //managing zone content
                var zone: ZoneDto = new ZoneDto(element);
                currentZone = zone;
                deck.push(zone);
            }
            if (element && !ZONES.includes(element)) {
                //managing card content
                currentZone.push(this.textToCard(element));
            }
        });
        return deck;
    }

    public textToCard(element: string): CardDto {
        const xIndex = element.indexOf('x');
        const cardQuant = element.substring(0, xIndex);
        const cardName = element.substring(xIndex + 2).trimStart();

        if (!cardQuant || !cardName) {
            //**TODO: THROW CUSTOM ERROR**//
            console.error('invalid card parameters');
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