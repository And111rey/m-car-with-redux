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
import { AUTHENTICATION } from "../types"


//////////////////////////////////////////////////////////////////////////////////

const getAllDataFromServInArr = async () => {
    const respons = await fetch("https://car-magage.firebaseio.com/ownerData.json",{
        method: "GET",
        headers: {"Content-Type": "aplication/json"}
    })
    const allData = await respons.json()
    // const data = Object.entries(allData)
    return allData 
}
//-------------------------------------------------------------------------------------------------


const checkingForLogin = (dataFromUser) => {
    return getAllDataFromServInArr()
        .then(res => Object.entries(res))
        .then((res) => {
            console.log("+++++",res)
            console.log("-----",dataFromUser)
            const userVerified = res.find((el) => {
                    return el[1].name === dataFromUser.name && el[1].pass === dataFromUser.pass
            })
            console.log("FRESH USER", userVerified)
            return userVerified   
        })    
}


export  const loginAction = (dataFromUser) => {
    return  dispatch  =>  {
        console.log("data from USER ->>",dataFromUser)
        checkingForLogin(dataFromUser)
            .then((res) => {
                dispatch({
                    type: AUTHENTICATION,
                    payload: res
                })
            })
        } 

    }     


