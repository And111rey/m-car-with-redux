import { createStore, combineReducers } from "redux"
import {registartionReducer} from "./reducers/registartionReducer"


const rootReducer = combineReducers({
    registartionReducer: registartionReducer
})

export default createStore(rootReducer) 