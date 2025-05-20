import ListGroup from "react-bootstrap/ListGroup";

export function DeckViewListGroupItem(
    { name, count , index } : { name: string, count: number, index: number }
) {
    const href: string = `#deck${index}`;

    return (
        <ListGroup.Item action href={href}>
            {`${name.slice(0, name.length - 4)}`}
            {/* {`${name.slice(0, name.length - 4)} (${count})`} */}
        </ListGroup.Item>
    );
}