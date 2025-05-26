import { useEffect, useState } from "react";
import { Settings } from "../types/settings";
import { config } from "../services/config-service";

export function useSettings(onSaveSettingsSuccess?: Function) {
    const [settings, setSettings] = useState(new Settings());
    const updateSettings = (newSettings: Settings) => setSettings(newSettings);
    
    const readSettingsAsync = async () => {
        const settingsData = await config.read();
        if (settingsData) {
            setSettings(settingsData.data as Settings);
        }
    } 
    
    const writeSettingsAsync = async() => {
        if (settings) {
            const success = await config.write(settings);
            if (success && onSaveSettingsSuccess) {
                onSaveSettingsSuccess();
            }
        }
    }

    useEffect(() => {
        readSettingsAsync();
    }, [])  

    useEffect(() => {
        writeSettingsAsync();
    }, [settings])

    return { settings, updateSettings };
}
