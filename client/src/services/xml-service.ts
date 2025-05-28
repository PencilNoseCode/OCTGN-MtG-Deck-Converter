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
            new DeckNode(OCTGN_MTG_GUID, this.buildSectionNodes(deck.getZones())),
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
    public async parse(deckName: string, deckXml: string): Promise<DeckDto> {
        const deckJson: DeckJson = xmlParser.parse(deckXml).deck;
        const deck = new DeckDto(deckName);

        deck.setZones(await this.parseSections(deckJson.section));
        return deck;
    }
    
    private async parseSections(sections: SectionJson[]): Promise<ZoneDto[]> {
        const parsedZones = sections.map(async (section: SectionJson) => (
            new ZoneDto(
                section.name,
                section?.card ? await this.parseCards(section.card) : [],
                section.shared
            )
        ));
        return await Promise.all(parsedZones);
    }
    
    // Delete this once I'm sure we don't need it
    private parseCardsOld(cards: any[]): CardDto[] {
        return cards ? cards.map((card: any) => (
            new CardDto(card.qty, card.id, card["#text"])
        )) : [];
    }

    private async parseCards(cards: CardJson[]): Promise<CardDto[]> {
        // Ensure any single objects come in as an array
        if (!Array.isArray(cards)) {
            cards = [cards];
        }
        const parsedCards = cards.map(async (card: CardJson) => {
            try { 
                return await scryfall.getCardbyId(card.id)
                    .then(c => CardDto.fromScryfallCard(c, card.qty)); 
            }
            catch (e) {
                const errorMessage = `Error occured while triyng to parse the card: ${JSON.stringify(card)}`;
                console.error(errorMessage);
                throw new Error(errorMessage);
            }
        });
        return await Promise.all(parsedCards);
    }
}

export const xml = new XmlService();

