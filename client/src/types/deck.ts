import Zone from './zone';

export default class Deck {
    name: string;
    zones: Zone[];

    public constructor(name?: string, zones?: Zone[]) {
        this.name = name || '';
        this.zones = zones || [];
    }

    public push(zone: Zone) {
        this.zones.push(zone);
    }
}
