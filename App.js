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





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const data=[];
  for(var i=0; i<15; i++){
    let obj = {
      id:`${i}`,
      displayName:`Person${i}`,
      profileImage:`..//assets/person${i}.jpg`,
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vehicula erat. Fusce at libero congue, aliquam diam sed, aliquet risus. Phasellus accumsan tellus tellus, quis porttitor nisl vehicula vel. Phasellus sollicitudin magna lacus. Aliquam imperdiet aliquet venenatis. Phasellus sagittis, massa at dignissim rutrum, erat enim elementum urna, eget sollicitudin ipsum diam eu tortor. Curabitur eget erat eget magna rhoncus ornare. Nam ultricies magna tincidunt urna pellentesque, in facilisis nunc scelerisque. Sed elementum suscipit urna et semper. Suspendisse erat dolor, semper ut dapibus faucibus, eleifend id velit. Praesent at enim ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
      email:`p${i}.gmail.com`

    }
    data.push(obj);
  }



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
      <Tab.Screen name="Home" component={Home} initialParams={{data:data}}/>
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
 
    <NavigationContainer>
     <StackNavigator />
    </NavigationContainer>

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
