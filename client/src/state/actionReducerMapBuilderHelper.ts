import { ActionReducerMapBuilder, AsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CustomState } from "./types/CustomState";

/**
 * @summary Specifies how to update the state
 * @param none Does nothing
 * @param set state = value
 */
type OnThunkFulfilled = 'none' | 'set';

/**
 * 
 * @param builder The ActionReducerMapBuilder
 * @param asyncThunk The type of ActionThunk action creator
 * @param onThunkFulfilled How to update the state value when the thunk is fulfilled
 * @param errorMessage Error message to display if the thunk fails
 * @returns The updated `builder`
 */
export function addCases<T>(
    builder: ActionReducerMapBuilder<CustomState<T>>,
    asyncThunk: AsyncThunk<any, any, any>,
    onThunkFulfilled: OnThunkFulfilled,
    errorMessage: string
) {
    return builder
        .addCase(asyncThunk.pending, (state: any) => {
            state.status = 'loading';
        })
        .addCase(asyncThunk.fulfilled, (state: any, action: PayloadAction<T>) => {
            state.status = 'succeeded';
            switch(onThunkFulfilled) {
                case 'set': state.value = action.payload; break;
                case 'none':
                default:
                    break;
            }
        })
        .addCase(asyncThunk.rejected, (state: any, action: any) => {
            state.status = 'failed';
            state.error = action.error.message || errorMessage;
        });
}
