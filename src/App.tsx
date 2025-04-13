import { useEffect, useState } from 'react';
import './App.css';
import ContentUpload from './components/content-upload';
import ContentDownload from './components/content-download';
import { processCard } from './providers/scryfall-data-provider';
import { ToO8dXml } from './services/o8d-xml-service';
import O8dXmlCardNode from './types/o8d-xml-card-node';

function App() {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (content) {
            console.log(content);
        }
    }, [content]);

    processCard('Blood Scrivener'); // takes in card name, returns card id

    const c1 = new O8dXmlCardNode('1', 'one', '1');
    const c2 = new O8dXmlCardNode('2', 'two', '2');
    const c3 = new O8dXmlCardNode('3', 'three', '3');

    console.log(ToO8dXml([c1, c2, c3]));

    return (
        <div className="App">
            <ContentUpload onUpload={setContent} />
            <ContentDownload
                content={ToO8dXml([c1, c2, c3])} // <== replace this array with the deck
                fileType="text/xml"
                fileName="file.o8d"
            />
        </div>
    );
}

export default App;
