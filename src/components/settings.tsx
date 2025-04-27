import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

export function Settings() {
    const DECK_DIRECTORY_KEY = 'DECK_DIRECTORY_KEY';
    const deckDirectory = localStorage.getItem(DECK_DIRECTORY_KEY) || '';

    /*
    const handleBrowse = () => {
        const fileInput = document.createElement('input');
        fileInput.id = 'deck-directory-browse';
        fileInput.name = 'deck-directory-browse';
        fileInput.type = 'file';
        // @ts-ignore
        fileInput.directory = 'directory';
        fileInput.webkitdirectory = true;
        fileInput.accept = '.txt';
        fileInput.addEventListener('change', (e) => handleBrowseDeckDirectory(e));
        fileInput.click();
    };
    const handleBrowseDeckDirectory = (event: Event) => {
        var inputElement = event?.target as HTMLInputElement;
        const deckDirectoryInput = document.getElementById('deck-directory') as HTMLInputElement;
        if (inputElement.files){
            deckDirectoryInput.value = inputElement.files[0].name;
        }
    };
    */

    const handleSave = () => {
        const deckDirectoryInput = document.getElementById(
            'deck-directory'
        ) as HTMLInputElement;
        const deckDirectory = deckDirectoryInput
            ? deckDirectoryInput.value
            : undefined;
        if (!deckDirectory) {
            alert("Please enter a value for the 'Deck directory' and save.");
            return;
        }
        localStorage.setItem(DECK_DIRECTORY_KEY, deckDirectory);
    };

    return (
        <>
            <Form>
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
                            {/* <td><Button 
                                    type="button"
                                    onClick={handleBrowse}>Browse</Button></td> */}
                            <td>
                                <Form.Control
                                    id="deck-directory"
                                    type="text"
                                    defaultValue={deckDirectory}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={handleSave} type="button">
                    Save
                </Button>
            </Form>
        </>
    );
}
