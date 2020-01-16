import {  REGISTRATION_DATA } from "../types"

export const registAction = (data) => {
    // console.log("on action ", data)
    return {
        type: REGISTRATION_DATA,
        payload: data
    }
}