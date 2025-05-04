import CardNode from './card-node';

export default class SectionNode {
    attr_name: string;
    attr_shared: string;
    card: CardNode[];

    public constructor(name: string, shared: string, cards?: CardNode[]) {
        this.attr_name = name || '';
        this.attr_shared = shared || 'False';
        this.card = cards || [];
    }
}
