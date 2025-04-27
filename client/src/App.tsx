import './App.css';
import { CardSearch } from './components/card-search';
import { DeckBuilder } from './components/deck-builder';
import { DeckView } from './components/deck-view';
import { FileConverter } from './components/file-converter';
import { QuickBuilder } from './components/quick-builder';
import { ServerRequestTest } from './components/server-request-test';

function App() {
    return (
        <>
            <ServerRequestTest />
            <DeckView />
            <DeckBuilder />
            <CardSearch />
            <QuickBuilder />
            <FileConverter />
        </>
    );
}

export default App;
