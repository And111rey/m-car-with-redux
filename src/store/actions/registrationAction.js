import { Alert } from "react-native"

import { REGISTRATION } from "../types"


const postData = async (data) => {
    await fetch("https://car-magage.firebaseio.com/ownerData.json",{
          method:"POST",
          headers:{"Content-Type": "aplication/json"},
          body: JSON.stringify({data})
      })
}

const checkData = (data) => {

}



export  const registrationActions = (data) => {
    // console.log("пришли данные от пользователя....  ", data)


    /////////////////////////////////////////////////
    return async  dispatch  =>  {
        const response = await fetch("https://car-magage.firebaseio.com/ownerData.json", {
            method:"GET",
            headers:{"Content-Type": "aplication/json"},
        })

        const dataFromServ = await response.json()
        const dataArray = Object.values(dataFromServ)
        const owner_Finded = dataArray.find((el) => {
            return (el.data.name === data.name) && (el.data.pass === data.pass)
        })
        if(!owner_Finded) {
            postData(data)
        } else {
            Alert.alert("Такой пользователь уже есть....")
        }
      


      
        dispatch({
            type: REGISTRATION,
            payload: {}
        })
    }     
}







