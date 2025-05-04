import { Anchor, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Accordion from 'react-bootstrap/Accordion';
import DeckDto from '../../types/dto/deck-dto';
import { DeckBuilderAccordionItem } from './partials/DeckBuilderAccordionItem';

export function DeckBuilder({ deck }: { deck: DeckDto }) {
    return (
        <Container className="DeckBuilder">
            <Anchor className="deckbuilder"></Anchor>
            <br />
            <h1>Deck Builder</h1>
            <Tab.Container>
                <br/>
                {deck && (<>
                    <h3>{deck.name}</h3>
                    <Accordion defaultActiveKey={['0','1']}  alwaysOpen>
                        {deck.zones.map((zone, i) => (
                            <DeckBuilderAccordionItem index={i} zone={zone} />
                        ))}
                    </Accordion>
                </>)}
            </Tab.Container>
            <br />
        </Container>
    );
}
