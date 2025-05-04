import SectionNode from './section-node';

export default class DeckNode {
    attr_game: string;
    section: SectionNode[];

    public constructor(game: string, sections: SectionNode[]) {
        this.attr_game = game || '';
        this.section = sections || [];
    }
}
