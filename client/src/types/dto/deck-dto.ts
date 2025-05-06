import ZoneDto from './zone-dto';

export default class DeckDto {
    name: string;
    zones: ZoneDto[];

    public constructor(name?: string, zones?: ZoneDto[]) {
        this.name = name || '';
        this.zones = zones || [];
    }

    public push(zone: ZoneDto) {
        this.zones.push(zone);
    }
}
