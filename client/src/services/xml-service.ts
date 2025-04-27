import { XMLBuilder } from 'fast-xml-parser';
import XmlCardNode from '../types/xml-card-node';
import XmlDeckNode from '../types/xml-deck-node';
import XmlSectionNode from '../types/xml-section-node';
import Deck from '../types/deck';
import Zone from '../types/zone';
import Card from '../types/card';

const OCTGN_MTG_GUID = 'a6c8d2e8-7cd8-11dd-8f94-e62b56d89593';

const options = {
    format: true,
    arrayNodeName: 'deck',
    attributeNamePrefix: 'attr_',
    ignoreAttributes: false,
    textNodeName: 'card',
};

const xmlBuilder = new XMLBuilder(options);

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
