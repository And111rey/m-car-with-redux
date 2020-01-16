import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'

import { useDispatch, useSelector } from "react-redux" 
import { registAction } from "../store/actions/registActions"



export const RegistarationScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const [dataName, setName] = useState("")
    const [dataSureName, setSureName] = useState("")
    const [dataEmail, setEmail] = useState("")
    const [dataPass, setPass] = useState("")
    const [dataRePass, setRePass] = useState("")

    
    const PostDataForRegistration = () => {
        // const goToMainScreen = () => {
        //     navigation.navigate("Main")
        // }
        let data = {}
    if( dataPass === dataRePass && dataPass!= ""  ) {
        data = {
            name: dataName,
            sureName: dataSureName,
            email: dataEmail,
            pass: dataPass
        }
        // console.log("THIS IS DISPACHING",)
        dispatch(registAction(data));
        // console.log("THIS IS DISPACHING",)
        // navigation.navigate("Setting")
        } else {
            Alert.alert("Внимательней с паролем") 
        } 
    }
    return (
        <View style={styles.center}>
            <TextInput style={styles.textInput} onChangeText={setName} placeholder="Name" value={dataName}/>
            <TextInput style={styles.textInput} onChangeText={setSureName}  placeholder="Surename" value={dataSureName}/>
            <TextInput style={styles.textInput} onChangeText={setEmail}  placeholder="Email" value={dataEmail}/>
            <TextInput style={styles.textInput} onChangeText={setPass}  placeholder="Password" value={dataPass}/>
            <TextInput style={styles.textInput} onChangeText={setRePass}  placeholder="Repeat Password" value={dataRePass}/>
            <View style={styles.buttonBlock}>
                <Button  onPress={PostDataForRegistration} title="Go" />
            </View>
        </View>
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