import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'

export const AddCarScreen = ({navigation}) => {
  
    const [carName, setCarName] = useState("") 
    const [engine, setEngine] = useState(false)
    const [cond, setCond] = useState(false)
    const [signal, setSignal] = useState(false)
    console.log(engine)
    const sendToUpdata = () => {
        let data = { carName, engine, cond, signal };
        console.log(data)
    }
  
        

    return (
        <View style={styles.center}>
            <Text style={{ fontSize: 30,color:"#FFFFF0" }} >Tuning car functions </Text>
            <TextInput  style={styles.textInput} onChangeText={setCarName}/>
            <Button  title="Create" onPress={sendToUpdata} />


            <TouchableOpacity style={styles.border} onPress={()=>{setEngine(!engine)}}>
                <Text style={{color: (engine? "red": "#006400")}} >Start the engine</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.border} onPress={()=>{setCond(!cond)}} >
                <Text style={{color: (cond? "red": "#006400")}} >Including air conditioning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.border} onPress={()=>{setSignal(!signal)}} >
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