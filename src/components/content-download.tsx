
interface ContentDownloadProps {
    content: string
    fileType: string
    fileName: string
}

function ContentDownload(props: ContentDownloadProps) {
    const blob = new Blob([props.content], { type: props.fileType });
    const fileURL = URL.createObjectURL(blob);

    const handleClick = () => {
        if (!props.content) {
            alert("No content has been uploaded");
        }
        else {
            URL.revokeObjectURL(fileURL)
        }
    }

    return (
        <>
            <a href={props.content ? fileURL : "#"} 
                download={props.fileName} 
                onClick={() => handleClick()}>
                    {props.fileName}
            </a>
        </>
    )
}

export default ContentDownload;