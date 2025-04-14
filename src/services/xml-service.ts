import { XMLBuilder } from 'fast-xml-parser';
import XmlCardNode from '../types/xml-card-node';
import XmlDeckNode from '../types/xml-deck-node';
import Card from '../types/card';
import XmlSectionNode from '../types/xml-section-node';

const OCTGN_MTG_GUID = 'a6c8d2e8-7cd8-11dd-8f94-e62b56d89593';

const options = {
    format: true,
    arrayNodeName: 'deck',
    attributeNamePrefix: 'attr_',
    ignoreAttributes: false,
    textNodeName: 'card',
};

const xmlBuilder = new XMLBuilder(options);

export function buildXml(deck: Card[]): string {
    return xmlBuilder.build([
        new XmlDeckNode(OCTGN_MTG_GUID, [
            new XmlSectionNode(
                'Main',
                'False',
                deck.map(
                    (card) => new XmlCardNode(card.quantity, card.id, card.name)
                )
            ),
            new XmlSectionNode('Command Zone', 'False', []),
            new XmlSectionNode('Sideboard', 'False', []),
            new XmlSectionNode('Planes/Schemes', 'False', []),
        ]),
    ]);
}

/*





function buildXmlCards(cards: Card[]): XmlCardNode[] {
    return cards.map(
        (card) => new XmlCardNode(card.id, card.name, card.quantity)
    );
}
*/
