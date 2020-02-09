import { Alert } from "react-native"

import { AUTHENTICATION } from "../types"


// const workkWithSerwer = async (data) => {
    
//    try {const response  = await fetch("https://car-magage.firebaseio.com/ownerData.json", {
//         method:"GET",
//         headers:{"Content-Type": "aplication/json"},
//     })
//     const dataFromServ = await response.json()
//     let dataArray = {}
//     if (dataFromServ === null) {
//         const response = await fetch("https://car-magage.firebaseio.com/ownerData.json",{
//             method:"POST",
//             headers:{"Content-Type": "aplication/json"},
//             body: JSON.stringify({data})
//         })
//         const id = await response.json()
//         return id.name

//     } else {
//          dataArray = Object.values(dataFromServ)    
//     }
//     // return dataArray
//     const owner_Finded = dataArray.find((el) => {
//         return (el.data.name === data.name && el.data.pass === data.pass)
//     })
//     if(owner_Finded) {
//         Alert.alert("Пользователь уже создавался.....")
//     } else {
//        const response = await fetch("https://car-magage.firebaseio.com/ownerData.json",{
//             method: "POST",
//             headers: {"Content-Type": "aplication/json"},
//             body: JSON.stringify({data})
//         })
//         const id = await response.json()
//         // console.log("id: ", id.name)
//         return id.name

//     }
// } catch(err) {
//     console.log("something happened in the regisarationAction.js =>", err)
// }

// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const findCreatedUser = async (dataFromServer, dataFromUser) => {
    // console.log("server***--- ", Object.entries(dataFromServer))
    // console.log("USER***--- ", dataFromUser)
    const dataArray = Object.entries(dataFromServer)
    const ownerFinded = await dataArray.find((el) => {
        // return (el.data.name === data.name && el.data.pass === data.pass)            // old version
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


const getAllDataFromServInArr = async () => {
    const respons = await fetch("https://car-magage.firebaseio.com/ownerData.json",{
        method: "GET",
        headers: {"Content-Type": "aplication/json"}
    })
    const allData = await respons.json()
    const data = Object.entries(allData)
    return data 
}


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
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export  const registrationActions = (dataFromUser) => {
    console.log("ДАННЫЕ ПРИШЛИ СО СКРИНА --->>>", dataFromUser)
    return  dispatch  =>  {
        
        return  fetch("https://car-magage.firebaseio.com/ownerData.json")
            .then(respons => respons.json())
            // .then(respons => respons.json(), reject => console.log("Запрос не произощел", reject))
            .then((dataFromServer) => {
                // console.log(dataFromServer)
                // dataFromServer? findCreatedUser(dataFromServer, dataFromUser): fetchingData(dataFromUser)
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


