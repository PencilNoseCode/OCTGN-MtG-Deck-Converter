import { useEffect, useState } from 'react';
import './App.css';
import ContentUpload from './components/content-upload';
import ContentDownload from './components/content-download';
import { processCard } from './providers/scryfall-data-provider';
import { buildXml } from './services/xml-service';
import O8dXmlCardNode from './types/xml-card-node';

function App() {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (content) {
            console.log(content);
        }
    }, [content]);

    processCard('Blood Scrivener'); // takes in card name, returns card id

    // Just for testing the XML service and download
    const c1 = new O8dXmlCardNode('1', 'one', '1');
    const c2 = new O8dXmlCardNode('2', 'two', '2');
    const c3 = new O8dXmlCardNode('3', 'three', '3');
    var deckXML = buildXml([c1, c2, c3]);

    return (
        <div className="App">
            <ContentUpload onUpload={setContent} />
            <ContentDownload
                content={deckXML}
                fileType="text/xml"
                fileName="file.o8d"
            />
        </div>
    );
}

export default App;
