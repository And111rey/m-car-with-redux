import React from "react"
import { View, StyleSheet,Text } from 'react-native'
import { Provider } from "react-redux"
// import { AppNavigation } from "./src/navigation/AppNavigation"
import store from "./src/store/index"

import { Project } from "./Project"

export default function App() {



  return (
        <Provider store={store} >
          {/* <AppNavigation /> */}
          < Project />
        </Provider>
  );

  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

