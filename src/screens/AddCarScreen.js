import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux" 
import { updateDataSettingsAction } from "../store/actions/settingAction"


export const AddCarScreen = ({navigation}) => {
    let data = useSelector(state => state.registration)
    // const dispatch = useDispatch()
    // console.log(...data)
  
    const [carName, setCarName] = useState("") 
    const [engine, setEngine] = useState(false)
    const [cond, setCond] = useState(false)
    const [signal, setSignal] = useState(false)



    const sendToUpdata = () => {
        let settings={carName, engine, cond, signal}
        let dataWithSettings= { ...data, settings: settings  };
        // console.log(dataWithSettings)
        updateDataSettingsAction(dataWithSettings)
    }
  
        

    return (
        <View style={styles.center}>
            <Text style={{ fontSize: 30,color:"#FFFFF0" }} > Additional functions </Text>
            <TextInput  style={styles.textInput} onChangeText={setCarName}/>
            <Button  title="Create" onPress={sendToUpdata} />


            <TouchableOpacity style={[styles.border, {backgroundColor:engine? "#DCCB3D": "#949799"}]} onPress={()=>{setEngine(!engine)}}>
                <Text style={{color: (engine? "red": "#006400")}} > {engine? "Engine Fn Active": "Engine Fn"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.border, {backgroundColor:cond? "#DCCB3D": "#949799"}]} onPress={()=>{setCond(!cond)}} >
                <Text style={{color: (cond? "red": "#006400")}} >{cond? "Conditioner fn active": "Conditioner fn"}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.border, {backgroundColor:signal? "#DCCB3D": "#949799"}]} onPress={()=>{setSignal(!signal)}} >
                <Text style={{color: (signal? "red": "#006400")}} >Signaling</Text>
            </TouchableOpacity>
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