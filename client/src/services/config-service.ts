import { Settings } from "../types/settings";
import { api } from "./api-service";

class ConfigService {
    async write(settings: Settings) {

        // Validate settings
        if (!settings.deckDirectory) {
            return false;
        }

        if (!settings.octgnDataDirectory) {
            return false;
        }
    
        const deckDirectoryExists = await api.pathExists(settings.deckDirectory);
        if (!deckDirectoryExists) {
            console.warn(`Specified deck directory does not exist`);
            return false;
        }

        const octgnDataDirectory = await api.pathExists(settings.octgnDataDirectory);
        if (!octgnDataDirectory) {
            console.warn(`Specified OCTGN data directory does not exist`);
            return false;
        }
        
        // If all validation was passed, save the settings
        return await api.writeSettings(settings);
    }
    
    async read() {
        return await api.readSettings();
    }
}

export const config = new ConfigService();