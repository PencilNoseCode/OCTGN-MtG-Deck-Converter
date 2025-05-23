import { Button, CardFooter, Container, ListGroup } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { CardSearchTableRow } from './partials/CardSearchTablerow';
import { scryfall } from '../../providers/scryfall-data-provider';
import { getElementById } from '../../helpers/document-helper';
import { useState } from 'react';
import CardDto from '../../types/dto/card-dto';

export function CardSearch() {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<CardDto[]>([]);

    const handleSearch = async () => {
        const cardSearch = getElementById<HTMLInputElement>('card-search');
        if (cardSearch) {
            setSearchQuery(cardSearch.value);
            const results = await scryfall.getCardSearchResults(cardSearch.value, 5);
            if (results) {
                setSearchResults(results.map(
                    result => CardDto.fromScryfallCard(result, "1")
                ));
            }
        }
    }

    return (
        <Container className="CardSearch">
            <br />
            <h1>Card Search</h1>
            <Tab.Container>
                <Form>
                    <Row>
                        <Col m="auto">
                            <Form.Control
                                id="card-search"
                                type="text"
                                placeholder="Search card name"
                            />
                        </Col>
                        <Col sm="auto">
                            <Button size="sm" type="button" onClick={handleSearch}>Search</Button>
                        </Col>
                    </Row>
                </Form>
                <br />
                { searchResults && <>
                    { searchQuery && <h4>Results for "{searchQuery}"</h4> }
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
                                    {searchResults && searchResults.map((result, index) => (
                                        <CardSearchTableRow 
                                            key={index} 
                                            name={result.name} 
                                            colors={result.colors} 
                                            type={result.type} 
                                        />
                                    ))}
                                </tbody>
                            </Table>
                            <div className="d-grid gap-2">
                                <Button type="button" variant="light">Load More</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </> }
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
                    <Button type="button" size="sm" variant="primary">
                        Add to Deck
                    </Button>
                </Card>
                <br />
            </Tab.Container>
        </Container>
    );
}
