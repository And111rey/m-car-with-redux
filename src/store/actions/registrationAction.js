import { Alert } from "react-native"

import { REGISTRATION } from "../types"


const workkWithSerwer = async (data) => {
    
    const response  = await fetch("https://car-magage.firebaseio.com/ownerData.json", {
        method:"GET",
        headers:{"Content-Type": "aplication/json"},
    })
    const dataFromServ = await response.json()
    // console.log(dataFromServ)
    let dataArray = {}
    if (dataFromServ === null) {
        const response = await fetch("https://car-magage.firebaseio.com/ownerData.json",{
            method:"POST",
            headers:{"Content-Type": "aplication/json"},
            body: JSON.stringify({data})
        })
        const id = await response.json()
        return id.name

    } else {
         dataArray = Object.values(dataFromServ)    
    }
    // return dataArray
    const owner_Finded = dataArray.find((el) => {
        return (el.data.name === data.name && el.data.pass === data.pass)
    })
    if(owner_Finded) {
        Alert.alert("Пользователь уже создавался.....")
    } else {
       const response = await fetch("https://car-magage.firebaseio.com/ownerData.json",{
            method: "POST",
            headers: {"Content-Type": "aplication/json"},
            body: JSON.stringify({data})
        })
        const id = await response.json()
        console.log("id: ", id.name)
        return id.name

    }

}



export  const registrationActions = (data) => {
    // console.log("пришли данные от пользователя....  ", data)


    
    return  dispatch  =>  {

        workkWithSerwer(data).then((res) => {
            dispatch({
                type: REGISTRATION,
                payload: res
            })
        })

    }     
}


