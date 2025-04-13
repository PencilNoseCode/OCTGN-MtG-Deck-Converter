export default class O8dXmlCardNode {
    attr_id: string;
    attr_name: string;
    attr_qty: string;

    public constructor(id: string, name: string, quantity: string) {
        this.attr_id = id || '';
        this.attr_name = name || '';
        this.attr_qty = quantity || '';
    }
}
