import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {createContext} from "react";
import {ContextProvider} from './contextAPI/context';
import NewUser from './screens/NewUser';
import axios from 'axios';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




const BottomTabNavigator = ({navigation})=>{
  

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
      <Tab.Screen name="Home" component={Home} options={{
        
          headerRight: () => (
            <Pressable style={{marginRight:10}} onPress={() => navigation.navigate('NewUser')}><FontAwesome5 name="user-plus" size={24} color="green" /></Pressable>
  )}} 
      />
    </Tab.Navigator>

  );
}
const StackNavigator = ()=>{
  return (
    <Stack.Navigator>
        <Stack.Screen name='Previous' component={BottomTabNavigator} options={{headerShown:false}} />      
        <Stack.Screen name='Profile' component={Profile} />      
        <Stack.Screen name='NewUser' component={NewUser} />      
    </Stack.Navigator>

  );
}

async function  getData(){
  await axios.get('https://asd212231dds-default-rtdb.asia-southeast1.firebasedatabase.app/data.json').then((resp)=>{
    for(const key in resp.data){
    //  console.log( key);
     console.log( resp.data[key].name);
    }
  })
}


export default function App() {
  // axios.post('https://asd212231dds-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',{name:'test',age:30})
  getData();
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
