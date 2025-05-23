import { Button } from "react-bootstrap";
import { ManaColors } from "../../ManaColor";

interface CardSearchTableRowProps {
    name: string, 
    colors: string[],
    type: string,
}
export function CardSearchTableRow({ name, colors, type }: CardSearchTableRowProps) {
    return (
        <tr>
            <td>{name}</td>
            <td>{ManaColors(colors)}</td>
            <td>{type}</td>
            <td>
                <Button type="button" size="sm" variant="light">
                    Details
                </Button>
            </td>
            <td>
                <Button type="button" size="sm" variant="primary">
                    Add
                </Button>
            </td>
        </tr>
    )
}