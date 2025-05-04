import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import { DeckViewListGroupItem } from './partials/DeckViewListGroupItem';
import { DeckViewTabPane } from './partials/DeckViewTabPane';
import { DeckViewFavouriteDecks } from './partials/DeckViewFavouriteDecks';
import DeckDto from '../../types/dto/deck-dto';

export function DeckView({ decks } : { decks: DeckDto[] }) {


    return (
        <Container className="Deckview">            
            <h1>My Decks</h1>
            <DeckViewFavouriteDecks />
            <h2>All Decks</h2>
            <Tab.Container id="Decks" defaultActiveKey="#deck0">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {decks && decks.map((d,i) => (
                                <DeckViewListGroupItem key={i} name={d.name} index={i}/>
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
                                    name={d.name}
                                    image="https://cards.scryfall.io/large/front/9/5/95a87b4e-f0ea-457c-9517-4acf313c4ca6.jpg?1743206852"
                                    lastUpdated="April 26, 2025"
                                    firstCard={{
                                        name: d.zones[0]?.cards[0].name,
                                        color: "Blue, Red"
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
