import { useState } from 'react';
import './App.css';
import ContentUpload from './components/content-upload';
import ContentDownload from './components/content-download';
import { parseContent, populateCardIds } from './services/card-service';
import { buildXml } from './services/xml-service';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function App() {
    const [selectedFile, setSelectedFile] = useState('No file selected');
    const [content, setContent] = useState('');
    const [deckXML, setDeckXML] = useState('');
    const [showAlert, setShowAlert] = useState(true);

    var uploadError = false;

    const convert = async () => {
        var parsedContent = parseContent(content);
        if (parsedContent) {
            setDeckXML(buildXml(await populateCardIds(parsedContent)));
            console.log(await populateCardIds(parsedContent));
        } else {
            uploadError = true;
            setShowAlert(true);
            console.log('parsed content is undefined');
        }
    };

    if (showAlert && uploadError) {
        return (
            <Alert
                variant="danger"
                onClose={() => setShowAlert(false)}
                dismissible
            >
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Change this and that and try again. Duis mollis, est non
                    commodo luctus, nisi erat porttitor ligula, eget lacinia
                    odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
            </Alert>
        );
    }

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
                <Button onClick={convert}>Convert File</Button>
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
