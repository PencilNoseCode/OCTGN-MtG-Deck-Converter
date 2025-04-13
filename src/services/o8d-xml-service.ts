import { XMLBuilder } from 'fast-xml-parser';
import O8dXmlCardNode from '../types/o8d-xml-card-node';

const options = {
    format: true,
    arrayNodeName: 'card',
    attributeNamePrefix: 'attr_',
    ignoreAttributes: false,
};

const xmlBuilder = new XMLBuilder(options);

export function ToO8dXml(deck: O8dXmlCardNode[]): string {
    return xmlBuilder.build(deck);
}
