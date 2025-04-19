import Button from 'react-bootstrap/Button';

interface ConvertButtonProps {
    label: string;
    onConvert: React.MouseEventHandler<HTMLButtonElement>;
}

export function ConvertButton(props: ConvertButtonProps) {
    return (
        <>
            <Button onClick={props.onConvert}>{props.label}</Button>
        </>
    );
}
