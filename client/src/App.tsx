import { useEffect, useState } from 'react';
import './App.css';
import { CardSearch } from './components/card-search';
import { DeckBuilder } from './components/deck-builder';
import { DeckView } from './components/deck-view/DeckView';
import { FileConverter } from './components/file-converter';
import { QuickBuilder } from './components/quick-builder';
import { SettingsPage } from './components/settings-page';
import { Settings } from './types/settings';
import { readSettings } from './services/settings-service';
import { api } from './services/api-service';

function App() {
    const [settings, setSettings] = useState<Settings>();
    const [decks, setDecks] = useState<string[]>();
    
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
                    setDecks(decks.data);
                }
            }
        }
        getDecksAsync();
    }, [settings])

    return (
        <>
            <SettingsPage settings={settings} setSettings={setSettings} />
            { decks && <DeckView decks={decks}/> }
            <DeckBuilder />
            <CardSearch />
            <QuickBuilder />
            <FileConverter />
        </>
    );
}

export default App;
