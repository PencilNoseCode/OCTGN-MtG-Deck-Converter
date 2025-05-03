import ListGroup from "react-bootstrap/ListGroup";

export function DeckViewListGroupItem({ name , index } : { name: string, index: number }) {
    return (
        <ListGroup.Item action href={`#deck${index}`}>
            {name.slice(0, name.length - 4)}
        </ListGroup.Item>
    );
}