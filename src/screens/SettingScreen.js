import React from "react"
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { useSelector } from "react-redux"

export const SettingScreen = ({navigation}) => {

       
const dataFromReducer = useSelector(state => state.registration.data)
console.log("on settings Screen....", dataFromReducer)

    return (
        <View style={styles.center}>
            <Text style={styles.shadowInformation}> INFORMATION</Text>
            <Text style={{color:"#FFFFF0"}} > NAME:<Text style={{color: "#1E90FF"}}> {dataFromReducer.name}</Text> </Text>
            <Text style={{color:"#FFFFF0"}}> SureName:<Text style={{color: "#1E90FF"}}> {dataFromReducer.sureName}</Text></Text>
            <Text style={{color:"#FFFFF0"}}> Email: <Text style={{color: "#1E90FF"}}>{dataFromReducer.email}</Text> </Text>
            <View style={styles.button}>
                <Button title="Create car control" onPress={()=>{navigation.navigate("AddCar")}}/>
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
    colorForText: {
        color: "red"
    },
    shadowInformation:  {
        fontSize: 30,
        color:"#FFFFF0",
        // backgroundColor: "white",
        // borderWidth: 2,
        // borderRadius: 5,
        // borderColor: '#00BFFF',
        // borderBottomWidth: 2,
        // shadowColor: '#E0FFFF',
        // shadowOffset: { width: 3, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 5,
        // elevation: 1 ,
        // marginLeft: 5,
        // marginRight: 5,
        // marginTop: 10,
      }
    

})