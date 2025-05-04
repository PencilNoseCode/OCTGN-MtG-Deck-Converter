import { X2jOptions, XMLBuilder, XmlBuilderOptions, XMLParser } from 'fast-xml-parser';
import XmlCardNode from '../types/xml-card-node';
import XmlDeckNode from '../types/xml-deck-node';
import XmlSectionNode from '../types/xml-section-node';
import Deck from '../types/deck';
import Zone from '../types/zone';
import Card from '../types/card';

const OCTGN_MTG_GUID = 'a6c8d2e8-7cd8-11dd-8f94-e62b56d89593';

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

export function buildXml(deck: Deck): string {
    return xmlBuilder.build([
        new XmlDeckNode(OCTGN_MTG_GUID, buildXmlSections(deck.zones)),
    ]);
}

function buildXmlSections(zones: Zone[]) {
    return zones.map((zone) => {
        return new XmlSectionNode(
            zone.name,
            zone.shared,
            buildXmlCards(zone.cards)
        );
    });
}

function buildXmlCards(cards: Card[]) {
    return cards.map((card) => {
        return new XmlCardNode(card.quantity, card.id, card.name);
    });
}

export function parseXml(deckName: string, deckXml: string): Deck {
    const deckJson = xmlParser.parse(deckXml).deck;
    return new Deck(deckName, parseSections(deckJson.section));
}

function parseSections(sections: any[]) {
    return sections.map((section: any) => (
        new Zone(section.name, parseCards(section.card), section.shared)
    ));
}

function parseCards(cards: any[]): Card[] {
    return cards ? cards.map((card: any) => (
        new Card(card.qty, card.id, card["#text"])
    )) : [];
}