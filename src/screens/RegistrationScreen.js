import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, Button, TextInput, Alert, Keyboard ,TouchableWithoutFeedback } from 'react-native'

import { useDispatch, useSelector } from "react-redux" 



export const RegistarationScreen = ({navigation}) => {
    const dispatch = useDispatch()
     
    const [name, setName] = useState("")
    const [sureName, setSureName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [rePass, setRePass] = useState("")

    console.log(name)
    
    const saveHandler = () => {
        let dataForRegistarnito = {}
        if(pass === rePass) {
            dataForRegistarnito= {
                name: name,
                sureName: sureName,
                email: email,
                pass: pass
            }
        }
    } 


  
    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.center}>
            <TextInput  onChangeText={setName} value={name} style={styles.textInput}  placeholder="Name" />
            <TextInput  onChangeText={setSureName} value={sureName} style={styles.textInput}  placeholder="Surename" />
            <TextInput  onChangeText={setEmail} value={email} style={styles.textInput}  placeholder="Email" />
            <TextInput  onChangeText={setPass} value={pass} style={styles.textInput}  placeholder="Password" />
            <TextInput  onChangeText={setRePass} value={rePass} style={styles.textInput}  placeholder="Repeat Password" />
            
            <View style={styles.buttonBlock}>
                <Button   title="Go" />
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}


RegistarationScreen.navigationOptions = {
    headerTitle: "Registration"
}

const styles =  StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#3b4045",
    },
    textInput: {
        width: "50%",
        backgroundColor: "#585425",
        borderWidth: 1,
        borderColor: "#c8cccf",
        backgroundColor: "#949799",
        borderRadius: 5,
        height: 40,
        marginTop: 4,
        padding: 4
    },
    buttonBlock: {
        // flexDirection: "row",
        padding: 5,
        width: "50%",
    },
    btn: {
        paddingTop: 10
    }
})