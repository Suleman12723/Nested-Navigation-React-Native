import React,{useState} from 'react';
import {StyleSheet,View,Text,Pressable,FlatList,TouchableOpacity,Image } from "react-native";
import { RefreshControl } from 'react-native-web';

function ListComponent(props,{navigation,route}) {
   
const PressHandler = (person)=>{
     props.Navigator({id:person.id,name:person.displayName,email:person.email,bio:person.bio });
};  


  return (
    <FlatList  data={props.data} keyExtractor={(item,index)=>item+index}
        renderItem={(person)=><Pressable style={styles.ItemContainer} onPress={()=>PressHandler(person.item)}>
            <Image source={require('../assets/profile.jpg')} style={styles.image}/>
            <View style={styles.textView}>
            <Text style={styles.textId}>#{person.item.id}</Text>
            <Text style={styles.textName}>{person.item.displayName}</Text>
            </View>
    </Pressable>} />

  )
}

const styles = StyleSheet.create({
    ItemContainer:{
        width:'100%',
        margin:10,
        flexDirection:'row',
        alignItems:'center'

    },
    textView:{
        
    },
    image:{
        width:70,
        height:70,
        borderRadius:50,
        marginRight:20
    },

    textId:{

    },
    textName:{
        fontSize:20,
        fontWeight:'600',
    }
});

export default ListComponent