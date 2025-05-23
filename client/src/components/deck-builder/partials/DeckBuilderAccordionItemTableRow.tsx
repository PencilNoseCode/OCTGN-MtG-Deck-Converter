import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import Card from "../../../types/dto/card-dto";
import { ManaColors } from "../../ManaColor";

export function DeckBuilderAccordionItemTableRow({ index, card }: { index: number, card: Card}) {
    return (
        <tr key={`${index}`}>
            <td>{card.name}</td>
            <td>{ManaColors(card.colors)}</td>
            <td>{card.type}</td>
            <td>
                <Button size="sm" variant="light">
                    -
                </Button>
                <Button
                    size="sm"
                    variant="light"
                    disabled
                >
                    {card.quantity}
                </Button>
                <Button size="sm" variant="light">
                    +
                </Button>
            </td>
            <td>
                <DropdownButton
                    id="dropdown-basic-button"
                    variant="light"
                    title="Actions"
                >
                    <Dropdown.Item href="#/move">
                        Move
                    </Dropdown.Item>
                    <Dropdown.Item href="#/delete">
                        Delete
                    </Dropdown.Item>
                </DropdownButton>
            </td>
        </tr>
    )
}