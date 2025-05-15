import { NavigationBar } from "./partials/NavigationBar";


export function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    )
}