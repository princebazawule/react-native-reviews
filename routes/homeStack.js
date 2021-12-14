import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/HomeScreen'
import ReviewDetails from '../screens/DetailScreen'

const screens = {
    Home: {
        screen: Home
    },
    ReviewDetails: {
        screen: ReviewDetails
    }
}
const Stack = createNativeStackNavigator()

export default NavigationContainer(HomeStack)