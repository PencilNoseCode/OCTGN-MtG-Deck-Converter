import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import { api } from '../../services/api-service';
import { useEffect, useState } from 'react';
import { DeckViewListGroupItem } from './partials/DeckViewListGroupItem';
import { DeckViewTabPane } from './partials/DeckViewTabPane';

export function DeckView() {
    const deckDirectory = "C:/Users/Tyler/AppData/Local/Programs/OCTGN/Data/Decks";
    const [decks, setDecks] = useState<string[]>();

    useEffect(() => {
        const getDecksAsync = async () => {
            const decks = await api.getDecks(deckDirectory)
            if (decks) {
                setDecks(decks.data);
            }
        }
        getDecksAsync();
    }, [])

    return (
        <Container className="Deckview">
            <h1>My Decks</h1>
            <Tab.Container id="Decks" defaultActiveKey="#deck0">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {decks && decks.map((d,i) => (
                                <DeckViewListGroupItem key={i} name={d} index={i}/>
                            ))}
                        </ListGroup>
                        <br />
                        <Row>
                            <Col sm={6}>
                                <Button size="sm" variant="primary">
                                    Add Deck
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {decks && decks.map((d,i) => (
                                <DeckViewTabPane 
                                    key={i}
                                    index={i}
                                    name={d}
                                    image="https://cards.scryfall.io/large/front/9/5/95a87b4e-f0ea-457c-9517-4acf313c4ca6.jpg?1743206852"
                                    firstCard={{
                                        name: "Adamaro, First to Desire",
                                        color: "Blue, Red",
                                        lastUpdated: "April 26, 2025"
                                    }}
                                />
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}
