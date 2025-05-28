import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DeckDto from "../../types/dto/deck-dto";
import { CustomState } from "../types/CustomState";


export interface CurrentDeckState extends CustomState<DeckDto> { }

const initialState: CurrentDeckState = {
    value: new DeckDto(),
    status: 'idle',
    error: null
};

const currentDeckSlice = createSlice({
    name: 'currentDeck',
    initialState: initialState,
    reducers: {
        setCurrentDeckState(state, action: PayloadAction<DeckDto>) {
            state.value = action.payload;
        }
    }
});

export const { setCurrentDeckState } = currentDeckSlice.actions;
export default currentDeckSlice.reducer;