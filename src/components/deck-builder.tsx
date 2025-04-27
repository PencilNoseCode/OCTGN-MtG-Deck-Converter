import { Anchor, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

export function DeckBuilder() {
    // Some logic goes here

    return (
        <Container className="DeckBuilder">
            <Anchor className="deckbuilder"></Anchor>
            <br />
            <h1>Deck Builder</h1>
            <Tab.Container></Tab.Container>
            <br />
        </Container>
    );
}
