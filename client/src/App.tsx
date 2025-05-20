import { useState } from 'react';
import './App.css';
import { DeckView } from './components/deck-view/DeckView';
import { FileConverter } from './components/file-converter';
import { QuickBuilder } from './components/quick-builder';
import { Layout } from './components/_layout/Layout';
import { useSettings } from './hooks/use-settings';
import { useDecks } from './hooks/use-decks';
import { SettingsPage } from './components/settings-page';
import { useNavigate } from 'react-router';

const LOCAL_STORAGE_INIT = "LOCAL_STORAGE_INIT";

function App() {
    const [isLocalStorageReady, setIsLocalStorageReady] = useState(false);
    //const [initLocalStorageAttempt, setInitLocalStorageAttempt] = useState(1);
    const { settings } = useSettings();

    /*
    useEffect(() => {
        console.log("LS", localStorage);
        if (initLocalStorageAttempt > 0) {
            localStorage.setItem(LOCAL_STORAGE_INIT, LOCAL_STORAGE_INIT);
            localStorage.removeItem(LOCAL_STORAGE_INIT);
            setIsLocalStorageReady(true);
            setInitLocalStorageAttempt(0);
        }
        setTimeout(() => setInitLocalStorageAttempt(initLocalStorageAttempt + 1), 1000);
    }, [initLocalStorageAttempt]);
    */

    return (
        <Layout>
            <DeckView settings={settings}/>
            <QuickBuilder />
            <FileConverter />
        </Layout>
    );
}

export default App;
