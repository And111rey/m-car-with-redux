import { Alert } from "react-native"

import { AUTHENTICATION } from "../types"

//---------------------- function that could always take up the server-----------------------------
const getAllDataFromServInArr = async () => {
    const respons = await fetch("https://car-magage.firebaseio.com/ownerData.json",{
        method: "GET",
        headers: {"Content-Type": "aplication/json"}
    })
    const allData = await respons.json()
    const data = Object.entries(allData)
    return data 
}
//-------------------------------------------------------------------------------------------------


// ----------------------------------fot checking or add data------------------------------------------
const findCreatedUser = async (dataFromServer, dataFromUser) => {

    const dataArray = Object.entries(dataFromServer)
    const ownerFinded = await dataArray.find((el) => {
        return (el[1].name === dataFromUser.name && el[1].pass === dataFromUser.pass)
    })
    if (ownerFinded) {
        Alert.alert("User already exists")
        console.log("Поьзователь уже есть....")
    } else {
        return fetch("https://car-magage.firebaseio.com/ownerData.json",{
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify(dataFromUser)
        })
        .then(response => response.json())
        .then((res) =>{
            return getAllDataFromServInArr()
                .then((data) =>{
                    const freshUser = data.find((el) => {
                        return el[0] === res.name
                    })
                    return freshUser
                })
        })
    }
}



// --------------------------------just for fetching data -------------------------------------------
const fetchingData = (dataFromUser) => {
    console.log(dataFromUser)
    return fetch("https://car-magage.firebaseio.com/ownerData.json",{
        method: "POST",
        headers: {"Content-Type": "aplication/json"},
        body: JSON.stringify(dataFromUser)
    })
    .then(res => res.json())
    .then((res) =>{
        return getAllDataFromServInArr()
            .then((data) =>{
                const freshUser = data.find((el) => {
                    return el[0] === res.name
                })
                return freshUser
            })
    })
}

//---------------------- async action creator--------------------------------------------------------------
export  const registrationActions = (dataFromUser) => {
    console.log("ДАННЫЕ ПРИШЛИ СО СКРИНА --->>>", dataFromUser)
    return  dispatch  =>  {
        
        return  fetch("https://car-magage.firebaseio.com/ownerData.json")
            .then(respons => respons.json(),(err) => console.log("Problem with network", err))
            .then((dataFromServer) => {
                if(dataFromServer) {
                    return findCreatedUser(dataFromServer, dataFromUser)
                        .then((res => {
                            return dispatch({
                                type: AUTHENTICATION,
                                payload: res
                            })
                        }))
                } else {
                    fetchingData(dataFromUser)
                        .then((res => {
                            return dispatch({
                                type: AUTHENTICATION,
                                payload: res
                            })
                        }))    
                }
            })
    }     
}


