import { Anchor, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import DeckDto from '../../types/dto/deck-dto';
import { DeckBuilderAccordionItem } from './partials/DeckBuilderAccordionItem';
import { useLocation } from 'react-router';
import { Drawer, DrawerPlacement } from '../drawer';
import { CardSearch } from '../card-search/CardSearch';
import { useState } from 'react';

export function DeckBuilder() {
    var location = useLocation();
    const deck: DeckDto = location.state;

      const [showCardSearch, setShowCardSearch] = useState(false);
      const handleCloseCardSearch = () => setShowCardSearch(false);
      const handleShowCardSearch = () => setShowCardSearch(true);

    return (
        <Container className="DeckBuilder">
            <Anchor className="deckbuilder"></Anchor>
            <br />
            <h1>Deck Builder</h1>
            <Tab.Container>
                <br/>
                {deck && (<>
                    <h3>{deck.name}</h3>
                    <Accordion defaultActiveKey={['0','1']} alwaysOpen>
                        {deck.zones.map((zone, i) => (
                            <DeckBuilderAccordionItem 
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
    );
}
