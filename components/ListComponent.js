import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React,{useState, useContext} from 'react';
import {StyleSheet,View,Text,Pressable,FlatList,TouchableOpacity,Image } from "react-native";
import {Context} from "../contextAPI/context";





function ListComponent(props,{navigation,route}) {
   

 const contextData = useContext(Context);   
const PressHandler = (person)=>{
     props.Navigator({id:person.id,name:person.displayName,email:person.email,bio:person.bio });
};  


  return (
    <FlatList  data={contextData.userInfo} keyExtractor={(item,index)=>item+index}
        renderItem={(person)=><View style={styles.main}><Pressable style={styles.ItemContainer} onPress={()=>PressHandler(person.item)}>
            <Image source={require('../assets/profile.jpg')} style={styles.image}/>
            <View style={styles.textView}>
                <Text style={styles.textId}>#{person.item.id}</Text>
                <Text style={styles.textName}>{person.item.displayName}</Text>
            </View>       
    </Pressable>
    <Pressable style={styles.btn} onPress={()=>{contextData.deleteUser(person.item.id)}}><FontAwesome5 name="trash" size={24} color="red" /></Pressable></View>} />

  )
}

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        alignItems:'center'
        
    },  
    ItemContainer:{
        flex:7,
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
    },
    btn:{
        
    }
});

export default ListComponent