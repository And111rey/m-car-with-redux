import React from "react"
import { Provider } from "react-redux"
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

