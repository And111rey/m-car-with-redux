import React from "react"
import { View, Text, StyleSheet } from 'react-native'

export const ControlScreen = () => {
    return <View style={styles.center}>
        <Text>ControlScreen ControlScreen ControlScreen</Text>
    </View>
}


const styles =  StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})