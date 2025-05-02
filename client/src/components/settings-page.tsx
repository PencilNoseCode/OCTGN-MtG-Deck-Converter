import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { getElementById } from "../helpers/document-helper";
import { Settings } from "../types/settings";
import { readSettings, writeSettings } from "../services/settings-service";
import { useEffect, useState } from "react";
import { Notification } from "./notification";

export function SettingsPage() {
    const [settings, setSettings] = useState<Settings>();
    const [showNotification, setShowNotification] = useState(false);
    const [notification, setNotification] = useState("");

    useEffect(() => {
        const getSettingsAsync = async () => {
            const settingsData = await readSettings();
            if (settingsData) {
                setSettings(settingsData.data as Settings);
            }
        } 
        getSettingsAsync();
    }, [])

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
        <>
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
        </>
    )
}