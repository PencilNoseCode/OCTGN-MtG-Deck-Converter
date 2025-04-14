import XmlCardNode from './xml-card-node';

export default class XmlSectionNode {
    attr_name: string;
    attr_shared: string;
    card: XmlCardNode[];

    public constructor(name: string, shared: string, cards?: XmlCardNode[]) {
        this.attr_name = name || '';
        this.attr_shared = shared || 'False';
        this.card = cards || [];
    }
}
