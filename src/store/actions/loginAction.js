import { LOG_IN } from "../types"



const checkingForLogin = async () => {
    const response  =  await fetch("https://car-magage.firebaseio.com/ownerData.json", {
        method:"GET",
        headers:{"Content-Type": "aplication/json"},
    })
    const dataFromServ =  await response.json()
    const result = Object.keys(dataFromServ).map((id, i) => {
        return {...Object.values(dataFromServ)[i], id }
    })
    return result
 
}


export  const loginAction = (data) => {


    return  dispatch  =>  {
        checkingForLogin()
            .then((res) => {
                let user = res.find((el) => {
                    return (el.data.name === data.name && el.data.pass === data.pass)
                })
                dispatch({
                    type: LOG_IN,
                    payload: user
                })
            })

       
           
        } 
     
    }     



