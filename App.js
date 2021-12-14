import React from 'react'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import AboutScreen from './screens/AboutScreen'
import Header from './shared/header'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Button } from 'react-native'

const Drawer = createDrawerNavigator()
const HomeStack = createNativeStackNavigator()
const AboutStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={
          { 
            headerTintColor: '#FFF', 
            headerStyle: {backgroundColor: '#20405C'}, 
            headerTitle: () => <Header title='RE:Views' /> 
          }
        } 
      />
      <HomeStack.Screen 
        name="Details" 
        component={DetailScreen} 
        options={
          ({ route })  => (
            { 
              headerTintColor: '#FFF', 
              headerStyle: {backgroundColor: '#20405C'}, 
              headerTitle: () => <Header title={route.params.title} /> 
            }
          )
        } 
      />
    </HomeStack.Navigator>
  )
}

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen 
        name="About" 
        component={AboutScreen}
        options={
          { 
            headerTintColor: '#FFF', 
            headerStyle: {backgroundColor: '#20405C'}, 
            headerTitle: () => <Header title='About RE:Views' /> 
          }
        }
      />
    </AboutStack.Navigator>
  )
}

export default function App() {

  const [loaded] = useFonts({
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Reviews" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}