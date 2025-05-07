import ListGroup from "react-bootstrap/ListGroup";

export function DeckViewListGroupItem({ name , index } : { name: string, index: number }) {
    const href: string = `#deck${index}`;

    return (
        <ListGroup.Item action href={href}>
            {name.slice(0, name.length - 4)}
        </ListGroup.Item>
    );
}