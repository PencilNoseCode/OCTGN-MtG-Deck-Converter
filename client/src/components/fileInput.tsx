import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

interface FileInputProps {
    setFileContent: React.Dispatch<React.SetStateAction<string>>,
}

export function FileInput({ setFileContent }: FileInputProps) {

    const handleChange = (e: ChangeEvent) => {
        const inputElement = e.target as HTMLInputElement;
        const files = inputElement.files;
        if (files) {
            const fr = new FileReader();
            
            fr.onload = (e: ProgressEvent<FileReader>) => {
                const fileContent = e.target?.result as string;
                setFileContent(fileContent);
            }
            
            fr.onerror = (error) => {
                console.error("error occurred reading file");
            }

            fr.readAsText(files[0]);
        }
    }

    return (
        <Form.Control 
            type="file"
            onChange={handleChange}
        />
    )
}