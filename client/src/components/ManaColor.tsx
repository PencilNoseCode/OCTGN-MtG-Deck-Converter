import { MANA } from "../constants";

export function ManaColors(colors: string[]) {
    return colors.map(c => <ManaColor key={c} color={c} />);
}

export function ManaColor({ color }: { color: string }) {
    /*
        Expected values of 'color' are: G, R, B, W, U
        Depending on the value we recieve we'll want to return the correct mana image

        I've saved the mana images as assets in our project, and set their paths
        in a constant.  Sample usage looks like this: MANA["W"] />
    */


    return (
        <>
            {color}
        </>
    )
}