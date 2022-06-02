import { StyleSheet, Text, View, TextInput,Pressable } from 'react-native'
import React,{useContext, useState} from 'react';
import { Context } from '../contextAPI/context';

const NewUser = ({navigation}) => {
  
  const contextData = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const handleInput = ()=>{
    let obj = {
      id: (parseInt(contextData.userInfo[contextData.userInfo.length-1].id)+1),
      displayName:name,
      profileImage:`..//assets/person${((contextData.userInfo[contextData.userInfo.length-1].id)+1)}.jpg`,
      bio: bio,
      email:email
    }
    contextData.addUser(obj);
    navigation.navigate('Home');
  }



  return (
    <View style={styles.container}>
      <Text style={styles.head}>New User</Text>
      <TextInput style={styles.input} autoFocus placeholder='Enter your Name' onChangeText={(value)=>setName(value)}/>
      <TextInput style={styles.input} placeholder='Enter your Email here'  onChangeText={(value)=>setEmail(value)}/>
      <TextInput style={styles.input} placeholder='Write your Bio here'  onChangeText={(value)=>setBio(value)}/>
      <Pressable style={styles.btn} android_ripple={{color:'#fff'}} onPress={handleInput}><Text style={styles.text}>Submit</Text></Pressable>
      
    </View>
  )
}

export default NewUser

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },
  head:{
    fontSize:30,
    fontWeight:'600',
    marginBottom:10,
    color:'green'
  },
  btn:{
    padding:10,
    backgroundColor:'green',
    borderRadius:5,
    marginTop:10
  },
  text:{
    color:'#fff'
  },
  input:{
    width:200,
    padding:5,
    borderBottomWidth:1,
    borderBottomColor:'grey',
    margin:10
  }
})