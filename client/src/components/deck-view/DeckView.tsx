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
import { useNavigate } from 'react-router';
import { ZONE } from '../../constants';

export function DeckView({ decks } : { decks: DeckDto[] }) {
    var navigate = useNavigate();

    const TAB_ID_PREFIX = "Decks-tab-#deck"

    const handleClick = () => {
        const tabs = document.querySelectorAll(`a[id^="${TAB_ID_PREFIX}"]`);
        tabs.forEach((t: Element) => {
            if (t.classList.contains('active')) {
                const deckIndex = parseInt(t.id.substring(TAB_ID_PREFIX.length));
                navigate(`/decks/${deckIndex}`, { state: decks[deckIndex]})
            }
        } )
    }

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
                            <Col sm={6}>
                                <Button size="sm" variant="primary" onClick={handleClick}>
                                    Edit Deck
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            {decks && decks.map((d,i) => (
                                renderDeckViewTabPane(d, i)
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

function renderDeckViewTabPane(deck: DeckDto, index: number) {
    const commanderZone = deck.zones.find(z => z.name === ZONE.Command_Zone);
    const mainZone = deck.zones.find(z => z.name === ZONE.Main);
    var coverCard = (commanderZone && commanderZone.cards.length > 0) ?
        commanderZone.cards[0] : (mainZone && mainZone.cards[0]);

    if (!coverCard) {
        coverCard = {
            name: 'N/A',
            quantity: 'N/A',
            id: 'N/A',
            image: 'N/A',
            type: 'N/A',
            colors: []
        } 
    }

    return (
        <DeckViewTabPane 
            key={index}
            index={index}
            name={deck.name}
            image={coverCard.image}
            lastUpdated="April 26, 2025"
            coverCard={coverCard}
        />
    )
}
