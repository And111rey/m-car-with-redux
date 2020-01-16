import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddCarScreen = ({navigation}) => {
  

  
        

    return (
        <View style={styles.center}>
            <Text>AddCarScreen AddCarScreen AddCarScreen</Text>
            <TextInput  style={styles.textInput} />
            <Button  title="Create" />
            <Text   style={styles.border} >Start the engine</Text>
            <Text   style={styles.border} >Including air conditioning</Text>
            <Text   style={styles.border} >Signaling</Text>
        </View>
    );
}

AddCarScreen.navigationOptins = {
    headerTitle: "Add controls"
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
    border:{
        width: "30%",
        borderWidth: 1, 
        borderColor: "#c8cccf",
        backgroundColor:"#949799" ,
        borderRadius: 5,
        height: 40,
        padding: 4,
        marginTop:20,

    }
    

})