import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './screens/home'
import Details from './screens/details'

export default function App() {
  return (
   <AppContainer></AppContainer>
  );
}

const appStackNavigator = createStackNavigator({
  Home:{screen:Home,navigationOptions:{headerShown:false}},
  Details:{screen:Details,navigationOptions:{headerShown:false}}
},{
  initialRouteName:"Home"
})
const AppContainer = createAppContainer(appStackNavigator)