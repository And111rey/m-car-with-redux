import { Alert } from "react-native"

import { REGISTRATION } from "../types"


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

const findCreatedUser =  (dataFromServer, dataFromUser ) => {
    console.log("server***--- ", Object.values(dataFromServer))
    console.log("USER***--- ", dataFromUser)
    const dataArray = Object.values(dataFromServer)
    const owner_Finded = dataArray.find((el) => {
        // return (el.data.name === data.name && el.data.pass === data.pass)            // old version
        return (el.name === dataFromUser.name && el.pass === dataFromUser.pass)
    })
    if (owner_Finded) {
        Alert.alert("User already exists")
    } else {
        return fetch("https://car-magage.firebaseio.com/ownerData.json",{
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify(dataFromUser)
        })
        .then(async (response) => {                    //проверить этот async - без ASYNC пиходит пустой промис 
            const id = await response.json()
            console.log("ВОзврвт ключа из ПОЛНОЙ БАЗЫ", id)
            return id
        })

    }
}
const fetchingData = (dataFromUser) => {
    console.log(dataFromUser)
    fetch("https://car-magage.firebaseio.com/ownerData.json",{
        method: "POST",
        headers: {"Content-Type": "aplication/json"},
        body: JSON.stringify(dataFromUser)
    })
    .then(async (response) => {                    //проверить этот async - без ASYNC пиходит пустой промис 
        const id = await response.json()
        console.log("ВОзврвт ключа пустой БАЗЫ", id)
        return id
    })
}

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
                    findCreatedUser(dataFromServer, dataFromUser)
                        .then((res => {
                            return dispatch({
                                type: REGISTRATION,
                                payload: res
                            })
                        }))
                } else {
                    fetchingData(dataFromUser)
                        .then((res => {
                            return dispatch({
                                type: REGISTRATION,
                                payload: res
                            })
                        }))    
                }
            })




            // dispatch({
            //     type: REGISTRATION,
            //     payload: ""
            // })
    }     
}


