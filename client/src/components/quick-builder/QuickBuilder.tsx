import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import { AlertHeading, Form, FormText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { FileInput } from '../fileInput';
import { useState } from 'react';
import { Layout } from '../_layout/Layout';
import { QuickBuilderZone } from './partials/QuickBuilderZone';
import { text } from '../../services/text-file-service';
import { getElementById } from '../../helpers/document-helper';
import { useSettings } from '../../hooks/use-settings';
import { useDecks } from '../../hooks/use-decks';
import DeckDto from '../../types/dto/deck-dto';
import { useNavigate } from 'react-router';
import ZoneDto from '../../types/dto/zone-dto';
import CardDto from '../../types/dto/card-dto';

export function QuickBuilder() {
    var navigate = useNavigate();
    const [fileContent, setFileContent] = useState("");
    const { settings } = useSettings();
    const { decks, saveDeck } = useDecks(settings);

    const commandZone = getElementById<HTMLTextAreaElement>('inputCommandZoneCards');
    const mainZone = getElementById<HTMLTextAreaElement>('inputMainCards');
    const sideboardZone = getElementById<HTMLTextAreaElement>('inputSideboardCards');
    const planesSchemesZone = getElementById<HTMLTextAreaElement>('inputPlanes/SchemesCards');

    const copyToZones = () => {
        const deck = text.parse(fileContent);

        if (commandZone) {
            commandZone.value = deck.commandZone.cards.map(c => (
                `${text.cardToText(c)}`
            )).join('\n');
        } 
        if (mainZone) {
            mainZone.value = deck.mainZone.cards.map(c => (
                `${text.cardToText(c)}`
            )).join('\n');
        } 
        if (sideboardZone) {
            sideboardZone.value = deck.sideboardZone.cards.map(c => (
                `${text.cardToText(c)}`
            )).join('\n');
        } 
        if (planesSchemesZone) {
            planesSchemesZone.value = deck.planesSchemesZone.cards.map(c => (
                `${text.cardToText(c)}`
            )).join('\n');
        } 
    }

    const handleAutoFill = () => {
        if (fileContent) {
            copyToZones()
        }
        else {
            console.warn('fileContent:', JSON.stringify(fileContent));
        }
    }

    const parseCardsFromZones = (zone: ZoneDto, zoneTextArea: HTMLTextAreaElement | undefined) => {
        if (zoneTextArea) {
            var cards: CardDto[] = [];
            const lines = zoneTextArea.value.split(/\n/);
            if (lines && lines.length > 0) {
                 lines.forEach(line => {
                    if (line) {
                        cards.push(text.textToCard(line));
                    }
                });
            }
            zone.cards = cards;
        }
    }

    const handleBuild = async () => {
        const newDeck: DeckDto = new DeckDto("New Deck.o8d");
        parseCardsFromZones(newDeck.commandZone, commandZone);
        parseCardsFromZones(newDeck.mainZone, mainZone);
        parseCardsFromZones(newDeck.sideboardZone, sideboardZone);
        parseCardsFromZones(newDeck.planesSchemesZone, planesSchemesZone);

        const deckIndex = decks.length;
        const newDeckWithIds = await text.populateCardIds(newDeck);
        saveDeck(newDeckWithIds);

        navigate(`/decks/${deckIndex}`, { 
            state: { 
                settings: settings,
                deckIndex: deckIndex,
                deck: newDeckWithIds
            }
        });
    }

    return (
        <Layout>
            <Container className="QuickBuilder">
                <br />
                <h1>Quick Builder</h1>
                <br />
                <Tab.Container>
                    <h3>Add Your Deck Information</h3>
                    <Row>
                        <Col sm={7}>
                            <Alert variant='light'>
                                Already have your deck information? Upload your plain text (.txt) file.
                                <br/>
                                <br/>
                                <Form.Group controlId="formFile" className="mb-3">
                                <FileInput setFileContent={setFileContent} />
                                <FormText>
                                    <br/>
                                    <Row>
                                        <Col sm={2}>
                                            <Button 
                                                size='sm'
                                                onClick={handleAutoFill}>
                                                Auto Fill
                                            </Button>
                                        </Col>
                                    </Row>
                                </FormText>
                                </Form.Group>
                            </Alert>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col sm={1}><Button>Validate</Button></Col>
                        <Col sm={2}><Button onClick={handleBuild}>Build</Button></Col>
                    </Row>
                    <br/>
                    <QuickBuilderZone zoneName='Command Zone' rows={3} />
                    <br />
                    <br />
                    <QuickBuilderZone zoneName='Main' rows={10} />
                    <br />
                    <br />
                    <QuickBuilderZone zoneName='Sideboard' rows={5} />
                    <br />
                    <br />
                    <QuickBuilderZone zoneName='Planes/Schemes' rows={3} />
                    <br />
                    <br />

                </Tab.Container>
                <br/>
                <br/>
            </Container>
        </Layout>
        
    );
}
