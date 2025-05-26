import { ZONE } from '../../constants';
import ZoneDto from './zone-dto';

export default class DeckDto {
    name: string;
    mainZone: ZoneDto;
    commandZone: ZoneDto;
    sideboardZone: ZoneDto;
    planesSchemesZone: ZoneDto;
    readonly zones: ZoneDto[];

    public constructor(name?: string) {
        this.name = name || '';
        this.mainZone = new ZoneDto(ZONE.Main);
        this.commandZone = new ZoneDto(ZONE.Command_Zone);
        this.sideboardZone = new ZoneDto(ZONE.Sideboard);
        this.planesSchemesZone = new ZoneDto(ZONE.Planes_Schemes);
        this.zones = [this.mainZone, this.commandZone, this.sideboardZone, this.planesSchemesZone];
    }

    public setZones(zones: ZoneDto[]): void { 
        zones.forEach(z => {
            switch(z.name) {
                case ZONE.Main: this.mainZone = z; break;
                case ZONE.Command_Zone: this.commandZone = z; break;
                case ZONE.Sideboard: this.sideboardZone = z; break;
                case ZONE.Planes_Schemes: this.planesSchemesZone = z; break;
                default: throw Error("Someone's been tampering with raw .o8d files huh?");
            }
        });
    }

    public push(zone: ZoneDto): boolean {
        switch (zone.name) {
            case ZONE.Main: this.mainZone = zone; break;
            case ZONE.Command_Zone: this.commandZone = zone; break;
            case ZONE.Sideboard: this.sideboardZone = zone; break;
            case ZONE.Planes_Schemes: this.planesSchemesZone = zone; break;
            default: return false;
        }
        return true;
    }

    public count(): number {
        var total: number = 0;
        this.zones.forEach(z => {
            total += z.count();
        });
        return total;
    }
}
