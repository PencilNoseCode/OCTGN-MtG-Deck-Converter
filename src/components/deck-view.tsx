import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export function DeckView() {
    // Some logic goes here

    return (
        <Container className="Deckview">
            <br />
            <h1>My Decks</h1>
            <Tab.Container id="Decks" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                Cool Deck
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Nifty Deck
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link3">
                                Mediocre Deck
                            </ListGroup.Item>
                        </ListGroup>
                        <Row>
                            <Col sm={2}>
                                <br />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Button variant="primary">Add New</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">
                                <Card style={{ width: '28rem' }}>
                                    <Card.Body>
                                        <Card.Title>Cool Deck</Card.Title>
                                        <Card.Img
                                            variant="top"
                                            src="https://cards.scryfall.io/large/front/d/2/d2fa85ea-f5d5-4be3-a874-ce246c3e4245.jpg?1562496102"
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
                                                        <td>
                                                            Adamaro, First to
                                                            Desire
                                                        </td>
                                                        <td>Blue, Red</td>
                                                        <th>April 26, 2025</th>
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
                            <Tab.Pane eventKey="#link2">
                                <Card style={{ width: '28rem' }}>
                                    <Card.Body>
                                        <Card.Title>Nifty Deck</Card.Title>
                                        <Card.Img
                                            variant="top"
                                            src="https://cards.scryfall.io/large/front/6/2/627c392c-4d18-4eb2-a4e8-c668f61f5487.jpg?1699044055"
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
                                                        <td>
                                                            Aclazotz, Deepest
                                                            Betrayal
                                                        </td>
                                                        <td>Black, Red</td>
                                                        <th>July 12, 2024</th>
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
                            <Tab.Pane eventKey="#link3">
                                <Card style={{ width: '28rem' }}>
                                    <Card.Body>
                                        <Card.Title>Mediocre Deck</Card.Title>
                                        <Card.Text>
                                            <Card.Img
                                                variant="top"
                                                src="https://cards.scryfall.io/large/front/9/5/95a87b4e-f0ea-457c-9517-4acf313c4ca6.jpg?1743206852"
                                            />
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
                                                        <td>
                                                            Arasta of the
                                                            Endless Web
                                                        </td>
                                                        <td>Green</td>
                                                        <th>March 1, 2023</th>
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
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <br />
        </Container>
    );
}
