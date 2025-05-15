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

    public count(): number {
        var total: number = 0;
        this.zones.forEach(z => {
            total += z.count();
        });
        return total;
    }
}
