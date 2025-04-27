import { useEffect, useState } from 'react';
import { parseContent, populateCardIds } from '../services/card-service';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { ContentUpload } from './content-upload';
import { ConvertButton } from './convert-button';
import { ContentDownload } from './content-download';
import { buildXml } from '../services/xml-service';

export function FileConverter() {
    const [selectedFile, setSelectedFile] = useState('No file selected');
    const [content, setContent] = useState('');
    const [deckXML, setDeckXML] = useState('');
    const [disableDownload, setDisableDownload] = useState(true);
    const [isConverting, setIsConverting] = useState(false);

    useEffect(() => {
        setDisableDownload(true);
    }, [selectedFile]);

    useEffect(() => {
        setDisableDownload(isConverting);
    }, [isConverting]);

    const handleConvert = async () => {
        setIsConverting(true);
        var parsedContent = parseContent(content);
        if (parsedContent) {
            setDeckXML(buildXml(await populateCardIds(parsedContent)));
            console.log(await populateCardIds(parsedContent));
        } else {
            console.log('parsed content is undefined');
        }
        setIsConverting(false);
    };

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
                <ConvertButton
                    onConvert={handleConvert}
                    label={isConverting ? 'Converting file...' : 'Convert file'}
                />
                <ContentDownload
                    disabled={disableDownload}
                    label={
                        disableDownload
                            ? 'File not ready for download'
                            : 'Download file'
                    }
                    content={deckXML}
                    fileType="text/xml"
                    fileName={selectedFile.replace('.txt', '.o8d')}
                />
            </Stack>
        </Container>
    );
}
