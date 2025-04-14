import { useEffect, useState } from 'react';
import './App.css';
import ContentUpload from './components/content-upload';
import ContentDownload from './components/content-download';
import { parseContent } from './services/card-service';
import { buildXml } from './services/xml-service';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

function App() {
    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState('No file selected');

    useEffect(() => {
        if (content) {
            //console.log(content);
            parseContent(content); // NEW
        }
    }, [content]);

    var parsedContent = parseContent(content);
    if (!parsedContent) {
        parsedContent = [];
    }
    var deckXML = buildXml(parsedContent);
    console.log(deckXML);

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
