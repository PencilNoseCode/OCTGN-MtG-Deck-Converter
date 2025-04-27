import { Button, CardFooter, Container, ListGroup } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export function CardSearch() {
    // Some logic goes here

    return (
        <Container className="CardSearch">
            <br />
            <h1>Card Search</h1>
            <Tab.Container>
                <Form>
                    <Row>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Search card name"
                            />
                        </Col>
                        <Col sm={2}>
                            <Button size="sm">Search</Button>
                        </Col>
                    </Row>
                </Form>
                <br />
                <h4>Search Results</h4>
                <h5>"desire"</h5>
                <Card style={{ width: '75rem' }}>
                    <Card.Body>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Card</th>
                                    <th>Color</th>
                                    <th>Type</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Adamaro, First to Desire</td>
                                    <td>🔵Blue, 🔴Red</td>
                                    <td>Legendary Creature</td>
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
                                <tr>
                                    <td>Depths of Desire</td>
                                    <td>🔵Blue</td>
                                    <td>Instant</td>
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
                                <tr>
                                    <td>Mind's Desire</td>
                                    <td>🔵Blue</td>
                                    <td>Socery</td>
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
                                <tr>
                                    <td>Seton's Desire</td>
                                    <td>🟢Green</td>
                                    <td>Enchantment - Aura</td>
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
                            </tbody>
                        </Table>
                        <div className="d-grid gap-2">
                            <Button variant="light">Load More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <h4>Card Details</h4>
                <Card style={{ width: '35rem' }}>
                    <Card.Body>
                        <Card.Title>Depths of Desire 2🔵</Card.Title>
                        <Card.Title>Instant</Card.Title>
                        <blockquote className="blockquote mb-0">
                            <p>
                                Return target creature to its owner’s hand.
                                Create a Treasure token. It’s an artifact with
                                “Tap, Sacrifice this token: Add one mana of any
                                color.”
                            </p>
                            <footer className="blockquote-footer">
                                Pockets full of gold, lungs full of brine.
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button size="sm" variant="primary">
                        Add to Deck
                    </Button>
                </Card>
                <br />
            </Tab.Container>
        </Container>
    );
}
