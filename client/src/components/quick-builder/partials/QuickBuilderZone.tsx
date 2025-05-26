import { Form } from "react-bootstrap";



export function QuickBuilderZone({ zoneName, rows }: { zoneName: string, rows: number}) {
    const zoneId = zoneName.replace(' ', '');

    return (
        <>
            <h4>{zoneName}</h4>
            <Form.Control
                as='textarea'
                rows={rows}
                placeholder='1x Card Name'
                id={`input${zoneId}Cards`}
                aria-describedby={`${zoneId}Cards`}
            />
            <Form.Text id={`${zoneId}HelpBlock`} muted>
                {`Input your ${zoneName} cards. Each card must be on a new line. Indicate quantity with a number then x.`}
            </Form.Text>
        </>
    )
}