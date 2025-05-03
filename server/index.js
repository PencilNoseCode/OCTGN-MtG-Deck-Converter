const express = require('express');
const path = require('path');
const cors = require('cors');
const { pathExists, readSettings, writeSettings } = require('./services/file-service');

const PORT = 8080;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, '../client/build')));

server.post('/api/path-exists', (req, res) => {
    res.send(pathExists(req.body.path));
});

server.post('/api/settings-write', (req, res) => {
    res.send(writeSettings(req.body));
});

server.get('/api/settings-read', (req, res) => {
    res.send(readSettings());
});

server.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});