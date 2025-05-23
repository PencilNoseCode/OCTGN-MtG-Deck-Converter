import { Anchor, Button, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import { DeckBuilderAccordionItem } from './partials/DeckBuilderAccordionItem';
import { useLocation } from 'react-router';
import { Drawer } from '../drawer';
import { CardSearch } from '../card-search/CardSearch';
import { useEffect, useState } from 'react';
import { useDecks } from '../../hooks/use-decks';
import DeckDto from '../../types/dto/deck-dto';
import { Layout } from '../_layout/Layout';
import { getElementById } from '../../helpers/document-helper';

export function DeckBuilder() {
    const location = useLocation();
    const { settings, deckIndex } = location.state;
    const { decks, saveDeck } = useDecks(settings);
    const currentDeck = decks[deckIndex];

    const [showCardSearch, setShowCardSearch] = useState(false);
    const handleCloseCardSearch = () => setShowCardSearch(false);
    const handleShowCardSearch = () => setShowCardSearch(true);

    const saveMessage = getElementById<HTMLSpanElement>('saved-message');
    const saveMessageDuration = 3000;

    const handleSave = () => {
        saveDeck(decks[deckIndex], deckIndex);
        if (saveMessage) {
            saveMessage.innerHTML = " Saved!";
            setTimeout(() => {
                saveMessage.innerHTML = "";
            }, saveMessageDuration);
        }
        
    }

    return (
        <Layout>
            <Container className="DeckBuilder">
                <Anchor className="deckbuilder"></Anchor>
                <br />
                <h1>Deck Builder</h1>
                <Tab.Container>
                    <br/>
                    {currentDeck && (<>
                        <h3>{currentDeck.name}</h3>
                        <Button onClick={handleSave}>Save</Button>
                        <span id="saved-message"></span>
                        <br />
                        <br />
                        <Accordion defaultActiveKey={['0','1']} alwaysOpen>
                            {currentDeck.zones.map((zone, i) => (
                                <DeckBuilderAccordionItem 
                                    key={i}
                                    index={i} 
                                    zone={zone} 
                                    //count={zone.count()}
                                    addCardClick={handleShowCardSearch} />
                            ))}
                        </Accordion>
                    </>)}
                </Tab.Container>
                <br />
                <Drawer 
                    placement="end"
                    show={showCardSearch} 
                    setShow={setShowCardSearch}
                >
                    <CardSearch />
                </Drawer>
            </Container>
        </Layout>
    );
}
