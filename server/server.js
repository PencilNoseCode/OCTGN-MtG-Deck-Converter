import express from 'express';
import cors from 'cors';

const PORT = 8080;
const server = express();
server.use(cors());

server.get('/', (req, res) => {
    res.send('Hello from our server!');
})

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});