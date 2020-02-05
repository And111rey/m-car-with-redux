

export const updateDataSettingsAction = async ({id, settings}) => {
    console.log("DATA from SCREEN has come...",id, "sett--->",settings)
    
    try{
        await fetch(`https://car-magage.firebaseio.com/ownerData/${id}.json`, {
           method: "PATCH",
           headers:{"Content-Type": "aplication/json"},
           body: JSON.stringify({settings})
        })
 
    } catch(e) {
        console.log(e)
    }

}