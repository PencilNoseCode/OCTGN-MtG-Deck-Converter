import Zone from './zone-dto';

export default class DeckDto {
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
