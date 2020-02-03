import React from "react"
import { AppNavigation } from "./src/navigation/AppNavigation"
import { AppNavagationLevel2 } from "./src/navigation/AppNavagationLevel2"
import {useSelector} from "react-redux"




export const Project = () => {

    const dataFromReducer = useSelector(state => state.registration)
    // console.log("DAtA on  App.js ->>> ", dataFromReducer)
    return (
        !dataFromReducer? <AppNavigation />: < AppNavagationLevel2 />
        )    
  }