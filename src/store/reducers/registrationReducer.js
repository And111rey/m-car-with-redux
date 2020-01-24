import { REGISTRATION } from "../types"

const initialState = ""

 export const registrationReducer = (state= initialState, action) => {
switch (action.type) {
    case REGISTRATION:
        console.log(" Yrrra ",action.payload) 
}
    return state
}