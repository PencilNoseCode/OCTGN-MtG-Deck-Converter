import { AccordionHeader, AccordionItem, Anchor, Button, ButtonGroup, CardBody, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function DeckBuilder() {
    // Some logic goes here

    return (
        <Container className="DeckBuilder">
            <Anchor className="deckbuilder"></Anchor>
            <br />
            <h1>Deck Builder</h1>
            <Tab.Container>
                <br/>
                <h3>Cool Deck</h3>
                <Accordion defaultActiveKey={['0','1']}  alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Commander</Accordion.Header>
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
                                    <tr>
                                        <td>Adamaro, First to Desire</td>
                                        <td>🔵Blue, 🔴Red</td>
                                        <td>Legendary Creature</td>
                                        <td>
                                            <Button size="sm" variant="light">
                                                -
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="light"
                                                disabled
                                            >
                                                1
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
                                </tbody>
                            </Table>
                            <Button variant="primary" size="sm">
                                Add Card
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Main</Accordion.Header>
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
                                    <tr>
                                        <td>Broadside Barrage</td>
                                        <td>🔵Blue, 🔴Red</td>
                                        <td>Instant</td>
                                        <td>
                                            <Button size="sm" variant="light">
                                                -
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="light"
                                                disabled
                                            >
                                                1
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
                                    <tr>
                                        <td>Accumulated Knowledge</td>
                                        <td>🔵Blue</td>
                                        <td>Instant</td>
                                        <td>
                                            <Button size="sm" variant="light">
                                                -
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="light"
                                                disabled
                                            >
                                                1
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
                                    <tr>
                                        <td>Act of Treason</td>
                                        <td>🔴Red</td>
                                        <td>Socery</td>
                                        <td>
                                            <Button size="sm" variant="light">
                                                -
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="light"
                                                disabled
                                            >
                                                1
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
                                    <tr>
                                        <td>Aegis Turtle</td>
                                        <td>🔵Blue</td>
                                        <td>Creature</td>
                                        <td>
                                            <Button size="sm" variant="light">
                                                -
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="light"
                                                disabled
                                            >
                                                1
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
                                </tbody>
                            </Table>
                            <Button variant="primary" size="sm">
                                Add Card
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Sideboard</Accordion.Header>
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
                                    <tr>
                                        <td>No Cards</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                            </Table>
                            <Button variant="primary" size="sm">
                                Add Card
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Plans / Schemes</Accordion.Header>
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
                                    <tr>
                                        <td>No Cards</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                            </Table>
                            <Button variant="primary" size="sm">
                                Add Card
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Tab.Container>
            <br />
        </Container>
    );
}
