import { useEffect, useState } from 'react';
import './App.css';
import { CardSearch } from './components/card-search/CardSearch';
import { DeckView } from './components/deck-view/DeckView';
import { FileConverter } from './components/file-converter';
import { QuickBuilder } from './components/quick-builder';
import { SettingsPage } from './components/settings-page';
import { Settings } from './types/settings';
import { config } from './services/config-service';
import { api } from './services/api-service';
import { xml } from './services/xml-service';
import { bufferToString } from './helpers/buffer-helper';
import DeckDto from './types/dto/deck-dto';

function App() {
    const [settings, setSettings] = useState<Settings>();
    const [decks, setDecks] = useState<DeckDto[]>();
    
    useEffect(() => {
        const getSettingsAsync = async () => {
            const settingsData = await config.read();
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
                            xml.parse(d.name, bufferToString(d.content))
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
            <QuickBuilder />
            <FileConverter />
        </>
    );
}

export default App;
