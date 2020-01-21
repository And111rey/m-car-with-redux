import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk  from "redux-thunk"
import { registrationReducer } from "./reducers/registrationReducer"


const rootReducer = combineReducers({
    registration: registrationReducer
})


export default createStore(rootReducer, applyMiddleware(thunk))