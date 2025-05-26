import './App.css';
import { DeckView } from './components/deck-view/DeckView';
import { FileConverter } from './components/file-converter';
import { Layout } from './components/_layout/Layout';
import { useSettings } from './hooks/use-settings';


function App() {
    const { settings } = useSettings();

    return (
        <Layout>
            <DeckView settings={settings}/>
            <FileConverter />
        </Layout>
    );
}

export default App;
