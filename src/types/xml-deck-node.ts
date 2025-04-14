import XmlSectionNode from './xml-section-node';

export default class XmlDeckNode {
    attr_game: string;
    sections: XmlSectionNode[];

    public constructor(game: string, sections: XmlSectionNode[]) {
        this.attr_game = game || '';
        this.sections = sections || [];
    }
}
