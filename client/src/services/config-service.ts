import { Settings } from "../types/settings";
import { api } from "./api-service";

class ConfigService {
    async write(settings: Settings) {
    
        // Validate settings
        if (!settings.deckDirectory){
            return false;
        }
    
        const deckDirectoryExists = await api.pathExists(settings.deckDirectory);
        if (!deckDirectoryExists) {
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