import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'

export const MainScreen = ({navigation}) => {

const toReg =() =>{navigation.navigate("Registration")}
toReg()
    return (
        <View style={styles.center}>
            <TextInput  placeholder="name"  style={styles.textInput}/>
            <TextInput  placeholder="password" style={styles.textInput}/>

        <View style={styles.button} >
            <Button title="Log IN" /> 
            <Button title="Sign IN" />
        </View>
            
        </View>
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