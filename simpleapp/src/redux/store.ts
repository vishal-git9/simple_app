import {legacy_createStore} from "redux"
import { changeReducer } from "./change/change.reducer"
export const store = legacy_createStore(changeReducer)

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch