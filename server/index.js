const express = require('express');
const path = require('path');
const cors = require('cors');
const { pathExists, writeFile, readFile, readFileNames } = require('./services/file-service');

const SETTINGS_FILE_PATH = 'octgnmagic.config.json';

const PORT = 8080;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, '../client/build')));

server.post('/api/path-exists', (req, res) => {
    res.send(pathExists(req.body.path));
});

server.post('/api/settings-write', (req, res) => {
    res.send(writeFile(SETTINGS_FILE_PATH, req.body));
});

server.get('/api/settings-read', (req, res) => {
    res.send(readFile(SETTINGS_FILE_PATH));
});

server.post('/api/decks', (req, res) => {
    console.log(req.body.path);
    res.send(readFileNames(req.body.path));
});

server.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, async () => {
    console.log(`Click 'http://localhost:${PORT}' to open OCTGNMagic`);
});