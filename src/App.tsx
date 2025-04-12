import { useEffect, useState } from 'react';
import './App.css';
import ContentUpload from './components/content-upload';
import ContentDownload from './components/content-download';
import { processCard } from './providers/scryfall-dataprovider';

function App() {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (content) {
            console.log(content);
        }
    }, [content]);

    processCard('Blood Scrivener'); // take the card name from the card object

    return (
        <div className="App">
            <ContentUpload onUpload={setContent} />
            <ContentDownload
                content={content}
                fileType="text/xml"
                fileName="file.o8d"
            />
        </div>
    );
}

export default App;
