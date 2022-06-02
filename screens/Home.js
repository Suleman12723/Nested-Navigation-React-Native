import React,{useContext} from 'react';
import {StyleSheet,View, Text, Button,Pressable, FlatList} from "react-native";
import ListComponent from '../components/ListComponent';
import  {Context} from "../contextAPI/context";
  


function Home({navigation,route}) {
  
    const contextData = useContext(Context);
    const HandleNavigation = (param)=>{
      navigation.navigate('Profile',param);
    }

    const HandleDelete = (id)=>{
      contextData.deleteUser(id);
    }
   
  return (
  
    <View style={styles.container}>
        <ListComponent  Navigator={HandleNavigation}  />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      
        flex:1,
       
    }
});
export default Home