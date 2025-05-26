import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { DeckBuilder } from "./components/deck-builder/DeckBuilder";
import { SettingsPage } from "./components/settings-page";
import { QuickBuilder } from "./components/quick-builder/QuickBuilder";

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/decks/:deckIndex" element={<DeckBuilder />} />
                <Route path="/quick" element={<QuickBuilder />} />
                <Route path="/settings" element={<SettingsPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}