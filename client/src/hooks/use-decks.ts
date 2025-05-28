import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useEffect } from "react";
import { readDecks, setDecksState, writeSingleDeck } from "../state/slices/decksSlice";
import DeckDto from "../types/dto/deck-dto";
import { Settings } from "../types/settings";

export function useDecks(settings: Settings) {

    const dispatch = useDispatch<AppDispatch>();
    const decks = useSelector((state: RootState) => state.decks.value);
    const status = useSelector((state: RootState) => state.decks.status);
    const error = useSelector((state: RootState) => state.decks.error);

    useEffect(() => {
        if (settings.deckDirectory) {
            if (status === 'idle') {
                dispatch(readDecks(settings.deckDirectory));
            }
        }
    }, [dispatch, status, settings.deckDirectory]);

    const saveDeck = (newDeck: DeckDto) => {
        const deckIndex = decks.findIndex(d => d.name === newDeck.name);
        const newDecksState = (deckIndex > 0) ? 
            decks.map((d, i) => i === deckIndex ? newDeck : d) : [...decks, newDeck];
        
        dispatch(setDecksState(newDecksState));
        dispatch(writeSingleDeck({ 
            deckFilePath: `${settings.deckDirectory}/${newDeck.name}`,
            updatedDeck: newDeck 
        }));
    }

    return { decks, saveDeck, status, error };
};

/* OLD VERSION
import { useEffect, useState } from "react";
import DeckDto from "../types/dto/deck-dto";
import { Settings } from "../types/settings";
import { api } from "../services/api-service";
import { xml } from "../services/xml-service";
import { bufferToString } from "../helpers/buffer-helper";

export function useDecks(settings: Settings) {
    const [decks, setDecks] = useState<DeckDto[]>([]);

    useEffect(() => {
        const getDecksAsync = async () => {
            if (settings && (!decks || decks.length === 0)) {
                const deckFiles = await api.getDecks(settings.deckDirectory)
                if (deckFiles) {
                    console.log(deckFiles);
                    setDecks(deckFiles.data.map((d: any) => (
                            xml.parse(d.name, bufferToString(d.content))
                        ))
                    )
                }
            }
        }

        getDecksAsync();
    }, [settings]);

    const writeDeckAsync = async (deck: DeckDto) => {
        await api.writeDeck(`${settings.deckDirectory}/${deck.name}`, deck);
    }

    const saveDeck = (updatedDeck: DeckDto, deckIndex?: number) => {
        setDecks(prevDecks => prevDecks.map((d, i) => {
            return (i === deckIndex) ? updatedDeck : d;
        }));
        writeDeckAsync(updatedDeck);
    }

    const saveAllDecks = (allDecks: DeckDto[]) => {
        setDecks(allDecks);
        allDecks.forEach(d => {
            writeDeckAsync(d);
        });
    }

    return { decks, saveDeck, saveAllDecks };
}
    */