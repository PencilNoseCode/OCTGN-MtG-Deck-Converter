import { Accordion, Button, Table } from "react-bootstrap";
import { DeckBuilderAccordionItemTableRow } from "./DeckBuilderAccordionItemTableRow";
import ZoneDto from "../../../types/dto/zone-dto";

interface DeckBuilderAccordionItemProps {
    index: number,
    zone: ZoneDto,
    //count: number,
    addCardClick: any
}


export function DeckBuilderAccordionItem (
    { index, zone, addCardClick }: DeckBuilderAccordionItemProps
) {
    return (
        <Accordion.Item key={`${index}`} eventKey={`${index}`}>
            <Accordion.Header>{`${zone.name}`}</Accordion.Header>
            <Accordion.Body>
                <Table>
                    <thead>
                        <tr>
                            <th>Card</th>
                            <th>Color</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {zone.cards && zone.cards.map((card, i) => (
                            <DeckBuilderAccordionItemTableRow 
                                key={i}
                                index={i}
                                card={card}/>
                        ))}
                    </tbody>
                </Table>
                <Button variant="primary" 
                        size="sm"
                        type="button"
                        onClick={addCardClick}>
                    Add Card
                </Button>
            </Accordion.Body>
        </Accordion.Item>
    )
}