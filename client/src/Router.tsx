import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { DeckBuilder } from "./components/deck-builder/DeckBuilder";


export function Router() {

    console.log("router");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/decks/:deckIndex" element={<DeckBuilder />} />
            </Routes>
        </BrowserRouter>
    );
}