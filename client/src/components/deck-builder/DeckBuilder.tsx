import { Anchor, Button, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import { DeckBuilderAccordionItem } from './partials/DeckBuilderAccordionItem';
import { useLocation } from 'react-router';
import { Drawer, DrawerPlacement } from '../drawer';
import { CardSearch } from '../card-search/CardSearch';
import { useEffect, useState } from 'react';
import { useDecks } from '../../hooks/use-decks';
import DeckDto from '../../types/dto/deck-dto';
import { Layout } from '../_layout/Layout';

export function DeckBuilder() {
    const location = useLocation();
    const { settings, deckIndex } = location.state;
    const { decks, saveDeck } = useDecks(settings);
    const currentDeck = decks[deckIndex];

    const [showCardSearch, setShowCardSearch] = useState(false);
    const handleCloseCardSearch = () => setShowCardSearch(false);
    const handleShowCardSearch = () => setShowCardSearch(true);

    const handleSave = () => {
        saveDeck(decks[deckIndex], deckIndex);
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
                    placement={DrawerPlacement.RIGHT}
                    show={showCardSearch} 
                    setShow={setShowCardSearch}
                >
                    <CardSearch />
                </Drawer>
            </Container>
        </Layout>
    );
}
