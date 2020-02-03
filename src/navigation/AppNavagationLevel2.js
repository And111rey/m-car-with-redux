import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
// import { MainScreen } from "../screens/MainScreen"
// import { RegistarationScreen } from "../screens/RegistrationScreen" 
import { ControlScreen } from "../screens/ControlScreen"
import {AddCarScreen} from "../screens/AddCarScreen"
import { SettingScreen } from "../screens/SettingScreen" 

const ScreenNavigator = createStackNavigator({
    // Main: MainScreen,
    // Registration: RegistarationScreen,
    Setting: SettingScreen,
    AddCar: AddCarScreen,
    Control: ControlScreen
 
})

export const AppNavagationLevel2 = createAppContainer(ScreenNavigator)