import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useEffect } from "react";
import { readSettings, writeSettings, setSettingsState } from "../state/slices/settingsSlice";
import { Settings } from "../types/settings";

export function useSettings() {
    const dispatch = useDispatch<AppDispatch>();
    const settings = useSelector((state: RootState) => state.settings.value);
    const status = useSelector((state: RootState) => state.settings.status);
    const error = useSelector((state: RootState) => state.settings.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(readSettings());
        }
    }, [dispatch, status]);

    const saveSettings = (newSettings: Settings) => {
        dispatch(setSettingsState(newSettings));
        dispatch(writeSettings(newSettings));
    }

    return { settings, saveSettings, status, error };
};

/* OLD VERSION
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
    */
