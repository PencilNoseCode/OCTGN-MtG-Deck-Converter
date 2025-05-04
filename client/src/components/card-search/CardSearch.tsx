import { Button, CardFooter, Container, ListGroup } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { CardSearchTableRow } from './partials/CardSearchTablerow';

export function CardSearch() {
    const cardSearchTableRows = [
        {
            name: "Adamaro, First to Desire",
            color: "🔵Blue, 🔴Red",
            type: "Legendary Creature"
        },
        {
            name: "Depths of Desiree",
            color: "🔵Blue",
            type: "Instant"
        },
        {
            name: "Mind's Desire",
            color: "🔵Blue",
            type: "Socery"
        },
        {
            name: "Seton's Desire",
            color: "🟢Green",
            type: "Enchantment - Aura"
        }
    ]

    return (
        <Container className="CardSearch">
            <br />
            <h1>Card Search</h1>
            <Tab.Container>
                <Form>
                    <Row>
                        <Col m="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search card name"
                            />
                        </Col>
                        <Col sm="auto">
                            <Button size="sm">Search</Button>
                        </Col>
                    </Row>
                </Form>
                <br />
                <h4>Results for "desire"</h4>
                <Card style={{ width: '100%' }}>
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
                                {cardSearchTableRows && cardSearchTableRows.map((r: any, i) => (
                                    <CardSearchTableRow 
                                        key={i} 
                                        name={r.name} 
                                        color={r.color} 
                                        type={r.type} 
                                    />
                                ))}
                            </tbody>
                        </Table>
                        <div className="d-grid gap-2">
                            <Button variant="light">Load More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <h4>Card Details</h4>
                <Card style={{ width: '25%' }}>
                    <Card.Body>
                        <Row sm="auto">
                            <Col sm={8}><Card.Title>Depths of Desire</Card.Title></Col>
                            <Col><Card.Title>2🔵</Card.Title>
                            </Col>
                        </Row>
                        <Card.Subtitle>Instant</Card.Subtitle>
                        <Card.Text>
                            Return target creature to its owner’s hand.
                            Create a Treasure token. It’s an artifact with
                            “Tap, Sacrifice this token: Add one mana of any
                            color.”
                        </Card.Text>
                        <CardFooter>
                            Pockets full of gold, lungs full of brine.
                        </CardFooter>
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
