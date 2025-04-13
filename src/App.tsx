import { useEffect, useState } from 'react';
import './App.css';
import ContentUpload from './components/content-upload';
import ContentDownload from './components/content-download';
import { processCard } from './providers/scryfall-data-provider';
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
                    content={content}
                    fileType="text/xml"
                    fileName={selectedFile.replace('.txt', '.o8d')}
                />
            </Stack>
        </Container>
    );
}

export default App;
