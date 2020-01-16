import React from "react"
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

export const SettingScreen = ({navigation}) => {
   
    return (
        <View style={styles.center}>
            <Text> NAME: </Text>
            <Text> SureName:</Text>
            <Text> Email: </Text>
            <View style={styles.button}>
                <Button title="Create car control" />
            </View>
        </View>
    );}


SettingScreen.navigationOptions = {
    headerTitle: "Wellcome"
}


const styles =  StyleSheet.create({
    center: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3b4045",
    },
    textInput: {
        width: "50%",
        borderWidth: 1, 
        borderColor: "#c8cccf",
        backgroundColor: "#949799",
        borderRadius: 5,
        height: 40
    },
    button: {
        padding: 25
    },
    

})