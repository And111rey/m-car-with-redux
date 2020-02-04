import { REGISTRATION, LOG_IN } from "../types"

const initialState = ""

 export const registrationReducer = (state= initialState, action) => {
switch (action.type) {
    case REGISTRATION:
        console.log(" DATA IN REDUCER",action.payload) 
        state = action.payload
        return state
    case LOG_IN:
        state = action.payload
        console.log(" STATe form LOF_IN --> ",state)
        return state
}
    return state
}