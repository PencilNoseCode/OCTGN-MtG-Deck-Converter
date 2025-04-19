import Button from 'react-bootstrap/Button';

interface ContentUploadProps {
    label: string;
    selectedFile: string;
    setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
    onUpload: React.Dispatch<React.SetStateAction<string>>;
}

export function ContentUpload(props: ContentUploadProps) {
    const fr = new FileReader();
    fr.onload = (event: ProgressEvent<FileReader>) => {
        props.onUpload(event.target?.result as string);
    };

    const handleChange = (event: Event) => {
        var inputElement = event?.target as HTMLInputElement;
        if (inputElement.files) {
            fr.readAsText(inputElement.files[0]);
            props.setSelectedFile(inputElement.files[0].name);
        }
    };

    const handleClick = () => {
        const fileInput = document.createElement('input');
        fileInput.id = 'file-input';
        fileInput.name = 'file-input';
        fileInput.type = 'file';
        fileInput.accept = '.txt';
        fileInput.addEventListener('change', (e) => handleChange(e));
        fileInput.click();
    };

    return (
        <>
            <Button onClick={handleClick}>{props.label}</Button>
            <span>{props.selectedFile}</span>
        </>
    );
}
