import { Card, Tab, Table } from "react-bootstrap"

interface DeckViewTabPaneProps {
    index: number,
    name: string,
    image: string,
    firstCard: {
        name: string,
        color: string,
        lastUpdated: string
    }

}

export function DeckViewTabPane({ index, name, image, firstCard }: DeckViewTabPaneProps) {
    return (
        <Tab.Pane eventKey={`#deck${index}`}>
            <Card style={{ width: '28rem' }}>
                <Card.Body>
                    <Card.Title>{name.slice(0, name.length - 4)}</Card.Title>
                    <Card.Img
                        variant="top"
                        src={image}
                    />
                    <Card.Text>
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
                                    <td>{firstCard.name}</td>
                                    <td>{firstCard.color}</td>
                                    <th>{firstCard.lastUpdated}</th>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                    <Card.Link href="#">Edit</Card.Link>
                    <Card.Link href="#">
                        Export to Octgn
                    </Card.Link>
                </Card.Body>
            </Card>
        </Tab.Pane>
    );
}