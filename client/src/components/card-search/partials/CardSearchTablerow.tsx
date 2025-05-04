import { Button } from "react-bootstrap";

interface CardSearchTableRowProps {
    name: string, 
    color: string,
    type: string,
}
export function CardSearchTableRow({ name, color, type }: CardSearchTableRowProps) {
    return (
        <tr>
            <td>{name}</td>
            <td>{color}</td>
            <td>{type}</td>
            <td>
                <Button size="sm" variant="light">
                    Details
                </Button>
            </td>
            <td>
                <Button size="sm" variant="primary">
                    Add
                </Button>
            </td>
        </tr>
    )
}