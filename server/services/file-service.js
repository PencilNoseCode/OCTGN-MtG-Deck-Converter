const fs = require('fs');
const path = require('path');


function pathExists(path) {
    return fs.existsSync(path);
}

function writeJsonFile(filePath, settings) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(settings));
        return true;
    }
    catch (ex) {
        console.error(ex);
        return false;
    }
}

function writeFile(filePath, fileContent) {
    try {
        fs.writeFileSync(filePath, fileContent);
        return true;
    }
    catch (ex) {
        console.error(ex);
        return false;
    }
}

function readFile(filePath) {
    if (!pathExists(filePath)) {
        fs.writeFileSync(filePath, "{}");
    }
    return fs.readFileSync(filePath);
}

function readFileNames(directoryPath) {
    const files = fs.readdirSync(directoryPath).filter(f => f.endsWith('.o8d'));
    return files;
}

function readDecks(deckDirectory) {
    const deckFiles = [];

    if (deckDirectory) {
        const deckNames = readFileNames(deckDirectory);
        deckNames.forEach(deckName => {
            const deck = {
                name: deckName,
                content: readFile(path.join(deckDirectory, deckName))
            }
            deckFiles.push(deck); 
        })
    }
    
    return deckFiles;
}

module.exports = {
    pathExists,
    writeFile,
    writeJsonFile,
    readFile,
    readFileNames,
    readDecks
}