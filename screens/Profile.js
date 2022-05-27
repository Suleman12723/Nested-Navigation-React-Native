import React from 'react';
import {StyleSheet,View, Image, Text, ScrollView} from "react-native";

function Profile({navigation,route}) {

  const id = route.params.id;
  const name = route.params.name;
  const email = route.params.email;
  const bio = route.params.bio;
  

  return (
      
      
      
    <View style={styles.container}>
       <Image style={styles.image} source={require('..//assets/profile.jpg')} resizeMode='stretch'/>
        
        <View style={styles.infoContainer}>
            <Text style={styles.Nametext}>{name}</Text>
            <View style={styles.insideContainer}>
            <Text  style={styles.text}>ID# {id}</Text>
            <Text  style={styles.text}>{email}</Text>
            <Text  style={styles.text}>Bio:</Text>
            <View style={styles.BioContainer}><ScrollView ><Text style={styles.Biotext} scrollable={true} >{bio}</Text></ScrollView></View>
            </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        
    },
    image:{
        flex: 1,
        width: '100%',
        
        
        
    },
    infoContainer:{
        flex:2,
        backgroundColor:'#EEEEEE',
        top:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    Nametext:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:15,
    },
    insideContainer:{
        width:'90%',
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:20,
        padding:10,
        flex:1,
        marginBottom:20,
        borderRadius:20,

    },
    text:{
        fontSize:20,
        fontWeight:'600',
        marginTop:20
        
    },
    BioContainer:{
        height:130,
        marginTop:10,
        paddingRight:10,

    },
    Biotext:{
        fontSize:15,
        
    }
});



export default Profile