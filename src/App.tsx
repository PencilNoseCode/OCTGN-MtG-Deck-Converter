import { useEffect, useState } from 'react';
import './App.css';
import ContentUpload from './components/content-upload';
import ContentDownload from './components/content-download';
import { processCard } from './providers/scryfall-data-provider';
import { buildXml } from './services/xml-service';
import O8dXmlCardNode from './types/xml-card-node';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

function App() {
    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState('No file selected');

    useEffect(() => {
        if (content) {
            console.log(content);
        }
    }, [content]);

    processCard('Blood Scrivener'); // takes in card name, returns card id

    // Just for testing the XML service and download
    const c1 = new O8dXmlCardNode('1', 'one', '10');
    const c2 = new O8dXmlCardNode('2', 'two', '20');
    var deckXML = buildXml([c1, c2]); // <== content should be transfored into the deckXML

    return (
        <Container className="App">
            <Stack gap={3}>
                <h3>Select your exported MtG Deck text file from OCTGN</h3>
                <ContentUpload
                    label="Browse"
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                    onUpload={setContent}
                />
                <ContentDownload
                    label="Download"
                    content={deckXML}
                    fileType="text/xml"
                    fileName={selectedFile.replace('.txt', '.o8d')}
                />
            </Stack>
        </Container>
    );
}

export default App;
