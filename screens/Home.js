import React from 'react';
import {StyleSheet,View, Text, Button,Pressable, FlatList} from "react-native";
import ListComponent from '../components/ListComponent';


  


function Home({navigation,route}) {
  const data = route.params.data;

    const HandleNavigation = (param)=>{
      navigation.navigate('Profile',param);
    }
   
  return (
    <View style={styles.container}>
        <ListComponent data={data} Navigator={HandleNavigation} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      
        flex:1,
       
    }
});
export default Home