import { Card, CardGroup, Col, Row } from "react-bootstrap";

export function DeckViewFavouriteDecks() {
    return (
        <>
            <br/>
            <h2>Favourite Decks</h2>
            <Row>
                <CardGroup>
                    <Col xs={3}>
                        <Card>
                            <Card.Img variant="top" src="https://cards.scryfall.io/large/front/d/2/d2fa85ea-f5d5-4be3-a874-ce246c3e4245.jpg?1562496102"/>
                            <Card.Body>
                            <Card.Title>Cool Deck</Card.Title>
                            <Card.Subtitle>Adamaro, First to Desire</Card.Subtitle>
                            <Card.Text>🔵Blue, 🔴Red</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated April 26, 2025</small>
                            </Card.Footer>
                        </Card> 
                    </Col>
                    <Col xs={3}>
                    <Card>
                        <Card.Img variant="top" src="https://cards.scryfall.io/large/front/6/2/627c392c-4d18-4eb2-a4e8-c668f61f5487.jpg?1699044055" />
                        <Card.Body>
                            <Card.Title>Nifty Deck</Card.Title>
                            <Card.Subtitle>Aclazotz, Deepest Betrayal</Card.Subtitle>
                            <Card.Text>⚫Black, 🔴Red</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated July 12, 2025</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={3}>
                    <Card>
                        <Card.Img variant="top" src="https://cards.scryfall.io/large/front/9/5/95a87b4e-f0ea-457c-9517-4acf313c4ca6.jpg?1743206852" />
                        <Card.Body>
                            <Card.Title>Mediocre Deck</Card.Title>
                            <Card.Subtitle>Arasta of the Endless Web</Card.Subtitle>
                            <Card.Text>🟢Green</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated March 1, 2023</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </CardGroup>    
            </Row>
            <br/>
        </>
    )
}