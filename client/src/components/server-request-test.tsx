import axios from 'axios';
import { Button } from 'react-bootstrap';

export function ServerRequestTest() {
    const request = () => {
        axios.get('http://localhost:8080').then((data) => {
            console.log(data);
        });
    }
    
    return (
        <div>
            <span>Click this, and check the console to see a message from the server: </span>
            <Button type='button' onClick={request}>Send request</Button>
        </div>
    )
}