import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import DeckDto from "../../types/dto/deck-dto";
import { api } from "../../services/api-service";
import { CustomState } from "../types/CustomState";
import { addCases } from "../actionReducerMapBuilderHelper";
import { xml } from "../../services/xml-service";
import { bufferToString } from "../../helpers/buffer-helper";
import { DeckFile } from "../../types/DeckFile";

export interface DecksState extends CustomState<DeckDto[]> { }

const initialState: DecksState = {
    value: [], 
    status: 'idle',
    error: null
}

const decksSlice = createSlice({
    name: 'decks',
    initialState: initialState,
    reducers: { 
        setDecksState(state, action: PayloadAction<DeckDto[]>) {
            console.log('payload:', action.payload);
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        addCases(builder, readDecks, 'set', 'failed to get settings'); 
        addCases(builder, writeSingleDeck, 'set', 'failed to update settings'); 
    }
});

export const readDecks = createAsyncThunk<Promise<DeckDto[]>, string>('decks/readDecks', async (
    decksDirectory: string
) => {
    const decksFiles: DeckFile[] = await api.getDecks(decksDirectory);
    const parsedDeckFiles = await decksFiles.map(async (d) => {
        const deckFile = await xml.parse(d.name, bufferToString(d.content));
        return deckFile;
    });
    return await Promise.all(parsedDeckFiles);
});

export const writeSingleDeck = createAsyncThunk('decks/writeSingleDeck', async (
    args: { deckFilePath: string, updatedDeck: DeckDto }, { rejectWithValue }
) => {
    try {
        const res = await api.writeDeck(args.deckFilePath, args.updatedDeck);
        if (!res) {
            throw new Error('API responded with false while trying to update the deck');
        }
    }
    catch (error: any) {
        return rejectWithValue(error.message || 'An error occured while trying to update the deck');
    }
});

export const { setDecksState } = decksSlice.actions;
export default decksSlice.reducer;