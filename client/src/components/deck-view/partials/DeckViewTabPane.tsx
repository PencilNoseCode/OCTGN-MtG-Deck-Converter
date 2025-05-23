import { Card, Tab, Table } from "react-bootstrap"
import CardDto from "../../../types/dto/card-dto";

interface DeckViewTabPaneProps {
    index: number,
    name: string,
    image: string,
    lastUpdated: string,
    coverCard: CardDto
}

export function DeckViewTabPane({
    index, name, image, lastUpdated, coverCard 
}: DeckViewTabPaneProps) {
    return (
        <Tab.Pane eventKey={`#deck${index}`}>
            <Card style={{ width: '28rem' }}>
                <Card.Body>
                    <Card.Title>{name.slice(0, name.length - 4)}</Card.Title>
                    { image?.length > 0 && 
                        <Card.Img
                            variant="top"
                            src={image}
                        />
                    }
                    <Table>
                        <thead>
                            <tr>
                                <th>Commander</th>
                                <th>Color</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{coverCard.name}</td>
                                <td>{coverCard.colors}</td>
                                <td>{lastUpdated}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#">Export to Octgn</Card.Link>
                    <Card.Link href="#">Add to Favourites</Card.Link>
                </Card.Body>
            </Card>
        </Tab.Pane>
    );
}