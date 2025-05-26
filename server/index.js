const express = require('express');
const path = require('path');
const cors = require('cors');
const { pathExists, writeFile, readFile, readDecks, writeJsonFile } = require('./services/file-service');

const SETTINGS_FILE_PATH = './octgnmagic.config.json';
const settings = require('./octgnmagic.config.json');

const PORT = 8080;
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, '../client/build')));

if (settings?.octgnDataDirectory) {
    const imagePath = path.join(
        settings.octgnDataDirectory, 
        'ImageDatabase',
        'A6C8D2E8-7CD8-11DD-8F94-E62B56D89593',
        'Sets'
    );
    server.use('/images', express.static(imagePath));
}

server.post('/api/path-exists', (req, res) => {
    res.send(pathExists(req.body.path));
});

server.post('/api/settings-write', (req, res) => {
    res.send(writeJsonFile(SETTINGS_FILE_PATH, req.body));
});

server.get('/api/settings-read', (req, res) => {
    res.send(readFile(SETTINGS_FILE_PATH));
});

server.post('/api/decks/write', (req, res) => {
    res.send(writeFile(req.body.path, req.body.content));
})

server.post('/api/decks', (req, res) => {
    res.send(readDecks(req.body.path));
});



/*
server.post('/api/decks', (req, res) => {
    console.log(req.body.path);
    res.send(readFileNames(req.body.path));
});
*/

server.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, async () => {
    console.log(`server listening on 'http://localhost:${PORT}'`);
});