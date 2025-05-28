import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Settings } from "../../types/settings";
import { CustomState } from "../types/CustomState";
import { addCases } from "../actionReducerMapBuilderHelper";
import { config } from "../../services/config-service";

export interface SettingsState extends CustomState<Settings> { }

const initialState: SettingsState = {
    value: new Settings(), 
    status: 'idle',
    error: null
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: { 
        setSettingsState(state, action: PayloadAction<Settings>) {
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        addCases(builder, readSettings, 'set', 'failed to get settings'); 
        addCases(builder, writeSettings, 'set', 'failed to update settings'); 
    }
});

export const readSettings = createAsyncThunk<Settings, void>('settings/readSettings', async () => {
    return await config.read();
});

export const writeSettings = createAsyncThunk('settings/writeSettings', async (updatedSettings: Settings, { rejectWithValue }) => {
    try {
        const res = await config.write(updatedSettings);
        if (!res) {
            throw new Error('API responded with false while trying to update the settings');
        }
    }
    catch (error: any) {
        return rejectWithValue(error.message || 'An error occured while trying to update the settings');
    }
});

export const { setSettingsState } = settingsSlice.actions;
export default settingsSlice.reducer;