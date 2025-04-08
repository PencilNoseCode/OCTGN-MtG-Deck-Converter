import { useEffect, useState } from 'react';
import './App.css';
import ContentUpload from './components/content-upload';

function App() {

  const [content, setContent] = useState("");

  useEffect(() => {
    if (content){
      console.log(content);
    }
  }, [content])

  return (
    <div className="App">
      <ContentUpload onUpload={setContent} />
    </div>
  );
}

export default App;
