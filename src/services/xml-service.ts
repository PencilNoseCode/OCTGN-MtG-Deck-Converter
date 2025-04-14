import { XMLBuilder } from 'fast-xml-parser';
import XmlCardNode from '../types/xml-card-node';

const options = {
    format: true,
    arrayNodeName: 'card',
    attributeNamePrefix: 'attr_',
    ignoreAttributes: false,
};

const xmlBuilder = new XMLBuilder(options);

export function buildXml(deck: XmlCardNode[]): string {
    return xmlBuilder.build(deck);
}
