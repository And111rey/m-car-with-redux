// import { LOG_IN } from "../types"



// const checkingForLogin = async () => {
//     const response  =  await fetch("https://car-magage.firebaseio.com/ownerData.json", {
//         method:"GET",
//         headers:{"Content-Type": "aplication/json"},
//     })
//     const dataFromServ =  await response.json()
//     const result = Object.keys(dataFromServ).map((id, i) => {
//         return {...Object.values(dataFromServ)[i], id }
//     })
//     return result
 
// }


// export  const loginAction = (data) => {


//     return  dispatch  =>  {
//         checkingForLogin()
//             .then((res) => {
//                 let user = res.find((el) => {
//                     return (el.data.name === data.name && el.data.pass === data.pass)
//                 })
//                 dispatch({
//                     type: LOG_IN,
//                     payload: user
//                 })
//             })
//         } 
//     }     

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
import { LOG_IN } from "../types"

const checkingForLogin_1 = async () => {
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
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

const checkingForLogin = (dataFromUser) => {
    return fetch("https://car-magage.firebaseio.com/ownerData.json")
        .then(res => res.json())
        .then(res => {
            let obj = Object.values(res)
            let res1 = Object.entries(res)
            let result1 = res1.find((el) => {
                return el[1].name == dataFromUser.name
            })
           //el[1].name == "Q"
            console.log(result1 )
        })

        
}



export  const loginAction = (dataFromUser) => {


    return  dispatch  =>  {
        console.log("data from USER ->>",dataFromUser)
        checkingForLogin(dataFromUser)
        

        

        dispatch({
            type: LOG_IN,
            payload: ""
        })

        } 

    }     


