import { Error } from "./Error";
import { Status } from "./Status";

export type CustomState<T> = {
    value: T;
    status: Status;
    error: Error;
}