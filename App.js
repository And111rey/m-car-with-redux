import React from "react"
import { View, StyleSheet,Text } from 'react-native'

import { AppNavigation } from "./src/navigation/AppNavigation"
import { Provider } from "react-redux"
import store from "./src/store"


export default function App() {



  return (
      <Provider store={store} >
          <AppNavigation />
      </Provider>
  );

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})