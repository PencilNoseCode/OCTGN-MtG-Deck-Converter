import fs from 'fs';

const SETTINGS_FILE_PATH = 'octgnmagic.config.json';

export function pathExists(path) {
    console.log('file-service', path)
    return fs.existsSync(path);
}

export function writeSettings(settings) {
    try {
        fs.writeFileSync(SETTINGS_FILE_PATH, JSON.stringify(settings));
        return true;
    }
    catch (ex) {
        console.error(ex);
        return false;
    }
}

export function readSettings() {
    return fs.readFileSync(SETTINGS_FILE_PATH);
}