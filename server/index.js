const express = require('express');
const path = require('path');

const PORT = 8080;
const server = express();

server.use(express.static(path.join(__dirname, '../client/build')));

server.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/*
server.get('/', (req, res) => {
    res.send('Hello from our server!');
})
*/

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});