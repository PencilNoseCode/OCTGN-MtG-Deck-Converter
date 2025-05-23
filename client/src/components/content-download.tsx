import Button from 'react-bootstrap/Button';

interface ContentDownloadProps {
    disabled: boolean;
    label: string;
    content: string;
    fileType: string;
    fileName: string;
}

export function ContentDownload(props: ContentDownloadProps) {
    const handleClick = () => {
        if (!props.content) {
            alert('No content has been uploaded');
        } else {
            window.URL = window.URL || window.webkitURL;

            const anchor = document.createElement('a');
            const blob = new Blob([props.content], { type: props.fileType });
            anchor.href = window.URL.createObjectURL(blob);
            anchor.download = props.fileName;

            document.body.appendChild(anchor);
            anchor.click();

            window.URL.revokeObjectURL(anchor.href);
        }
    };

    return (
        <>
            <Button disabled={props.disabled} onClick={() => handleClick()}>
                {props.label}
            </Button>
        </>
    );
}
