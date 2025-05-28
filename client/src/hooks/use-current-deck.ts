import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import DeckDto from "../types/dto/deck-dto";
import { setCurrentDeckState } from "../state/slices/currentDeckSlice";

export function useCurrentDeck() {
    const dispatch = useDispatch<AppDispatch>();
    const currentDeck = useSelector((state: RootState) => state.currentDeck.value);

    const setCurrentDeck = (currentDeck: DeckDto) => {
        dispatch(setCurrentDeckState(currentDeck));
    };

    return { currentDeck, setCurrentDeck };
}