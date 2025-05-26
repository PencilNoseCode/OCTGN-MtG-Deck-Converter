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