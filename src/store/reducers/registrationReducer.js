import { REGISTRATION } from "../types"

const initialState = ""

 export const registrationReducer = (state= initialState, action) => {
switch (action.type) {
    case REGISTRATION:
        console.log(" DATA IN REDUCER",action.payload) 
        state = action.payload
        return state
}
    return state
}