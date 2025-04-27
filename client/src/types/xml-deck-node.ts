import XmlSectionNode from './xml-section-node';

export default class XmlDeckNode {
    attr_game: string;
    section: XmlSectionNode[];

    public constructor(game: string, sections: XmlSectionNode[]) {
        this.attr_game = game || '';
        this.section = sections || [];
    }
}
