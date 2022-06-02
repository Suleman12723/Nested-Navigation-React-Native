import React,{useState, useContext} from 'react';
import {StyleSheet,View,Text,Pressable,FlatList,TouchableOpacity,Image, Button } from "react-native";
import {Context} from "../contextAPI/context";



function ListComponent(props,{navigation,route}) {
   

 const ContextData = useContext(Context);   
const PressHandler = (person)=>{
     props.Navigator({id:person.id,name:person.displayName,email:person.email,bio:person.bio });
};  


  return (
    <FlatList  data={ContextData.userInfo} keyExtractor={(item,index)=>item+index}
        renderItem={(person)=><Pressable style={styles.ItemContainer} onPress={()=>PressHandler(person.item)}>
            <Image source={require('../assets/profile.jpg')} style={styles.image}/>
            <View style={styles.textView}>
            <Text style={styles.textId}>#{person.item.id}</Text>
            <Text style={styles.textName}>{person.item.displayName}</Text>
            </View>
            <Button title='Delete' color={'red'} style={{justifySelf:'flex-end'}} onPress={()=>{ContextData.deleteUser(person.item.id)}} />
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