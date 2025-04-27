import { Anchor, Button, ButtonGroup, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function DeckBuilder() {
    // Some logic goes here

    return (
        <Container className="DeckBuilder">
            <Anchor className="deckbuilder"></Anchor>
            <br />
            <h1>Deck Builder</h1>
            <Tab.Container>
                <Accordion defaultActiveKey={['0,1']} alwaysOpen>
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
                </Accordion>
            </Tab.Container>
            <br />
        </Container>
    );
}
