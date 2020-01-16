import { REGISTRATION_DATA } from "../types"


//// for REGISTARTION......
const initialState = {
    
}
export const registartionReducer =  async (state=initialState, action) => {
    switch(action.type){
        case REGISTRATION_DATA:
        // console.log(" reducer is wirking....")

        let dataUser = {
            ...state,
            name: action.payload.name,
            sureName: action.payload.sureName,
            email: action.payload.email,
            pass: action.payload.pass
        }

        

        const dataForChecking = await fetch("https://car-magage.firebaseio.com/car-magage.json", {
            method: "GET",
            header: {"Content-Type": "appication/json"}
        })
        const dataFromServer = await dataForChecking.json()
        // console.log(Object.values(dataFromServer))
        let newArr = Object.values(dataFromServer).map((el) => {
            return el.dataUser
        })
        let checkRes = newArr.find(el => el.name === dataUser.name && el.pass === dataUser.pass)
        if (checkRes){
            alert("Пользователь с такими данными уже создан")
        } else {
            fetch("https://car-magage.firebaseio.com/car-magage.json",{
                method: "POST",
                header: {"Content-Type": "appication/json"},
                body: JSON.stringify({dataUser})
            })
                console.log( "this is caled on reducer",{
                    ...state,
                    name: action.payload.name,
                    sureName: action.payload.sureName,
                    email: action.payload.email,
                    pass: action.payload.pass
                });
        }
        default: return state
    }
    
}