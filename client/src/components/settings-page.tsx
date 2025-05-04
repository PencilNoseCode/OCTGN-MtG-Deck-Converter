import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { getElementById } from "../helpers/DocumentHelper";
import { Settings } from "../types/settings";
import { writeSettings } from "../services/settings-service";
import { useState } from "react";
import { Notification } from "./notification";
import Container from "react-bootstrap/Container";

interface SettingsPageProps {
    settings: Settings | undefined,
    setSettings: React.Dispatch<React.SetStateAction<Settings | undefined>>
}

export function SettingsPage({ settings, setSettings} : SettingsPageProps) {
    const [showNotification, setShowNotification] = useState(false);
    const [notification, setNotification] = useState("");
    
    const writeSettingsAsync = async() => {
        if (settings) {
            const success = await writeSettings(settings);
            if (success) {
                setNotification(`Save settings ${success.data ? 'succeeded' : 'failed'}`)
                setShowNotification(true);
            }
        }
    }

    const handleSave = async () => {
        const settings = new Settings();
        settings.deckDirectory = getElementById<HTMLInputElement>('deck-directory')?.value ?? '';
        setSettings(settings);
        writeSettingsAsync();
    }

    return (
        <Container>
            <h1>Settings</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Setting</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Deck directory</td>
                        <td>
                            <Form.Control 
                                id="deck-directory" 
                                type="text"
                                defaultValue={
                                    settings ? settings.deckDirectory : ""
                                } />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button type="button" onClick={handleSave}>Save</Button>
            {showNotification && <Notification
                title="Settings"
                message={notification} 
                onClose={() => setShowNotification(false)}
                show={showNotification}
            />}
        </Container>
    )
}