import { Alert } from "react-native"

import { REGISTRATION } from "../types"


const workkWithserwer = async (data) => {
    const response  = await fetch("https://car-magage.firebaseio.com/ownerData.json", {
        method:"GET",
        headers:{"Content-Type": "aplication/json"},
    })
    const dataFromServ = await response.json()
    console.log(dataFromServ)
    let dataArray = {}
    if (dataFromServ === null) {
        await fetch("https://car-magage.firebaseio.com/ownerData.json",{
            method:"POST",
            headers:{"Content-Type": "aplication/json"},
            body: JSON.stringify({data})
        })
    } else {
         dataArray = Object.values(dataFromServ)    
    }
    // console.log(Object.values(dataFromServ))
    // const dataArray = Object.values(dataFromServ)

    
    return dataArray
}



export  const registrationActions = (data) => {
    // console.log("пришли данные от пользователя....  ", data)


    
    return  dispatch  =>  {

        workkWithserwer(data)
            .then((e) => {
                // console.log(e)
                const owner_Finded = e.find((el) => {
                    return (el.data.name === data.name && el.data.pass === data.pass)
                })
                console.log("профильтрований овнер во ВТОРОЙ зене..... ",owner_Finded)
                if(owner_Finded) {
                    Alert.alert("Пользователь уже создавался.....")
                } else {
                    fetch("https://car-magage.firebaseio.com/ownerData.json",{
                        method:"POST",
                        headers:{"Content-Type": "aplication/json"},
                        body: JSON.stringify({data})
                    })


                }
                
            })


      
        dispatch({
            type: REGISTRATION,
            payload: {}
        })
    }     
}


