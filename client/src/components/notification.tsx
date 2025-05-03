import Toast from 'react-bootstrap/Toast';

export function Notification(props: any) {
    return (
        <Toast 
            onClose={props.onClose} 
            show={props.show} 
            delay={3000} 
            animation={true} 
            autohide={true}
        >
            <Toast.Header>{props.title}</Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    );
}