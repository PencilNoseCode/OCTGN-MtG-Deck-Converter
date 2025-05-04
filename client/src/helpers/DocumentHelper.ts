export function getElementById<T extends HTMLElement>(id: string): T | undefined {
    if (typeof document !== 'undefined'){
        return (document.getElementById(id) as T);
    }
    return undefined;
} 