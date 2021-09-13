import { phoneReducer } from './phoneReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    phone: phoneReducer
})

export type RootState = ReturnType<typeof rootReducer>
