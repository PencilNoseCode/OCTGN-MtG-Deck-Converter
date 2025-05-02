import { Settings } from "../types/settings";
import { api } from "./api-service";

export async function writeSettings(settings: Settings) {

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

export async function readSettings() {
    return await api.readSettings();
}