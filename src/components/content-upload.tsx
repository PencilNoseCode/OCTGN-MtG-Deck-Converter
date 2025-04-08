
function ContentUpload(props: { onUpload: React.Dispatch<React.SetStateAction<string>> }) {
    const fr = new FileReader();
    fr.onload = (event: ProgressEvent<FileReader>) => {
        props.onUpload(event.target?.result as string)
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event?.target?.files){
            fr.readAsText(event.target.files[0])
        }
    }

    return (
        <>
            <form id="file-upload-form">
                <label htmlFor="file">File </label>
                <input id="file" name="file" type="file" accept=".txt" onChange={handleChange} />
            </form>
        </>
    )
}

export default ContentUpload;