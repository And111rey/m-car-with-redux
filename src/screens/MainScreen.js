import React, {useState, useEffect, useReducer} from "react"
import { View, Text, StyleSheet, Button, TextInput, Keyboard ,TouchableWithoutFeedback } from 'react-native'
import { useDispatch } from "react-redux" 
import { loginAction } from "../store/actions/loginAction"

export const MainScreen = ({navigation}) => {
    const dispatch = useDispatch()
    // navigation.navigate("Registration")
 
const [name, setNmae] = useState("")
const [pass, setPass] = useState("")

const hendleSend = () => {
    let data = {name, pass}
    dispatch(loginAction(data))
    console.log("from input   ",data)
}



    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.center}>
            <TextInput placeholder="name"  onChangeText={setNmae} style={styles.textInput}/>
            <TextInput placeholder="password" onChangeText={setPass} style={styles.textInput}/>

        <View style={styles.button} >
            <Button title="Log IN"onPress={hendleSend}/> 
            <Button  title="Sign IN"  onPress={()=>{navigation.navigate("Registration")}}/>
        </View>
            
        </View>
        </TouchableWithoutFeedback>
    )
}

MainScreen.navigationOptions = {
    headerTitle: "Hello in our APP"
}


const styles =  StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3b4045",
    },
    textInput: {
        width: "50%",
        borderWidth: 1, 
        borderColor: "#c8cccf",
        backgroundColor: "#949799",
        borderRadius: 5,
        height: 40,
        padding: 4
    },
    button: {
        padding: 25
    }

})