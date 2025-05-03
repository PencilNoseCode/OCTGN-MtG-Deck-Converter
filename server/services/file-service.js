const fs = require('fs');


module.exports = {
    pathExists(path) {
        console.log('file-service', path)
        return fs.existsSync(path);
    },
    
    writeFile(filePath, settings) {
        try {
            fs.writeFileSync(filePath, JSON.stringify(settings));
            return true;
        }
        catch (ex) {
            console.error(ex);
            return false;
        }
    },
    
    readFile(filePath) {
        return fs.readFileSync(filePath);
    }, 

    readFileNames(filePath) {
        const files = fs.readdirSync(filePath).filter(f => f.endsWith('.o8d'));
        return files;
    }
}