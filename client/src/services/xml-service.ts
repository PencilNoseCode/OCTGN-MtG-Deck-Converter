import { X2jOptions, XMLBuilder, XmlBuilderOptions, XMLParser } from 'fast-xml-parser';
import CardNode from '../types/xml/card-node';
import DeckNode from '../types/xml/deck-node';
import SectionNode from '../types/xml/section-node';
import DeckDto from '../types/dto/deck-dto';
import ZoneDto from '../types/dto/zone-dto';
import CardDto from '../types/dto/card-dto';
import { scryfall } from '../providers/scryfall-data-provider';
import { OCTGN_MTG_GUID } from '../constants';
import { SectionJson } from '../types/json/section-json';
import { DeckJson } from '../types/json/deck-json';
import { CardJson } from '../types/json/card-json';

const builderOptions: XmlBuilderOptions = {
    format: true,
    arrayNodeName: 'deck',
    attributeNamePrefix: 'attr_',
    ignoreAttributes: false,
    textNodeName: 'card',
};

const parserOptions: X2jOptions = {
    ignoreAttributes: false,
    attributeNamePrefix: ''
}

const xmlBuilder = new XMLBuilder(builderOptions);
const xmlParser = new XMLParser(parserOptions);

class XmlService {
    
    // Building the .o8d files
    public build(deck: DeckDto): string {
        return xmlBuilder.build([
            new DeckNode(OCTGN_MTG_GUID, this.buildSectionNodes(deck.zones)),
        ]);
    }
    
    private buildSectionNodes(zones: ZoneDto[]): SectionNode[] {
        return zones.map((zone) => {
            return new SectionNode(
                zone.name,
                zone.shared,
                this.buildCardNodes(zone.cards)
            );
        });
    }
    
    private buildCardNodes(cards: CardDto[]): CardNode[] {
        return cards.map((card) => {
            return new CardNode(card.quantity, card.id, card.name);
        });
    }
    
    // Parsing the .o8d files
    public parse(deckName: string, deckXml: string): DeckDto {
        const deckJson: DeckJson = xmlParser.parse(deckXml).deck;
        const deck = new DeckDto(deckName);
        deck.setZones(this.parseSections(deckJson.section));
        return deck;
    }
    
    private parseSections(sections: SectionJson[]): ZoneDto[] {
        return sections.map((section: SectionJson) => (
            new ZoneDto(section.name, this.parseCards(section.card), section.shared)
        ));
    }
    
    // Delete this once I'm sure we don't need it
    private parseCardsOld(cards: any[]): CardDto[] {
        return cards ? cards.map((card: any) => (
            new CardDto(card.qty, card.id, card["#text"])
        )) : [];
    }

    private parseCards(cards: CardJson[]): CardDto[] {
        var parsedCards: CardDto[] = [];
        if (cards) {
            // Ensure any single objects come in as an array
            if (!Array.isArray(cards)) {
                cards = [cards];
            }

            cards.forEach( async (card: CardJson) => {
                const scryfallCard = await scryfall.getCardbyId(card.id);                //const scryfallCard = await scryfall.getCardByName(card["#text"]);
                if (scryfallCard) {
                    parsedCards.push(
                        CardDto.fromScryfallCard(scryfallCard, card.qty)
                    );
                }
            });
        }
        return parsedCards;
    }
}

export const xml = new XmlService();

