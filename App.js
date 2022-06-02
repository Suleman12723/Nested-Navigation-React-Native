import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {createContext} from "react";
import {ContextProvider} from './contextAPI/context';





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




const BottomTabNavigator = ()=>{
  

  return (
    <Tab.Navigator initialRouteName='Home'
    screenOptions={({route})=>({
      tabBarIcon: ({focused, color, size}) =>{
        let iconName;
        if(route.name === 'Home'){
          iconName = "house-user"
          size =focused ? 25: 20;
          color = focused ? '#95f5af': '#555';
        }
        else if(route.name==='Dashboard'){
          iconName= "address-card";
          size =focused ? 25: 20;
          color = focused ? '#95f5af': '#555';
        }
        return <FontAwesome5 name={iconName} size={size} color={color} />
      }
    })}
    tabBarOptions={{
      showLabel:false
    }}>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>

  );
}
const StackNavigator = ()=>{
  return (
    <Stack.Navigator>
        <Stack.Screen name='Previous' component={BottomTabNavigator} options={{headerShown:false}}/>      
        <Stack.Screen name='Profile' component={Profile} />      
    </Stack.Navigator>

  );
}

export default function App() {
  
  return (
    <ContextProvider>      
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ContextProvider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
