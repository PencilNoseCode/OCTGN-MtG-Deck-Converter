import { useEffect, useState } from 'react';
import './App.css';
import { CardSearch } from './components/card-search';
import { DeckBuilder } from './components/deck-builder/DeckBuilder';
import { DeckView } from './components/deck-view/DeckView';
import { FileConverter } from './components/file-converter';
import { QuickBuilder } from './components/quick-builder';
import { SettingsPage } from './components/settings-page';
import { Settings } from './types/settings';
import { readSettings } from './services/settings-service';
import { api } from './services/api-service';
import { parseXml } from './services/xml-service';
import { bufferToString } from './helpers/BufferHelper';
import Deck from './types/deck';

function App() {
    const [settings, setSettings] = useState<Settings>();
    const [decks, setDecks] = useState<Deck[]>();
    
    useEffect(() => {
        const getSettingsAsync = async () => {
            const settingsData = await readSettings();
            if (settingsData) {
                setSettings(settingsData.data as Settings);
            }
        } 
        getSettingsAsync();
    }, [])   

    useEffect(() => {
        const getDecksAsync = async () => {
            if (settings) {
                const decks = await api.getDecks(settings.deckDirectory)
                if (decks) {
                    setDecks(
                        decks.data.map((d: any) => (
                            parseXml(d.name, bufferToString(d.content))
                        ))
                    )
                }
            }
        }
        getDecksAsync();
    }, [settings])

    return (
        <>
            <SettingsPage settings={settings} setSettings={setSettings} />
            { decks && <DeckView decks={decks}/> }
            { decks && <DeckBuilder deck={decks[0]}/> }
            <CardSearch />
            <QuickBuilder />
            <FileConverter />
        </>
    );
}

export default App;
