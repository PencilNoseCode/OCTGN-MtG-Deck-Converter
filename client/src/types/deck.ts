import Zone from './zone';
import Card from './card';

export default class Deck {
    name: string;
    zones: Zone[];

    public constructor() {
        this.name = '';
        this.zones = [];
    }

    public push(zone: Zone) {
        this.zones.push(zone);
    }
}
