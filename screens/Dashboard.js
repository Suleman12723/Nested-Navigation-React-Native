import React from 'react';
import {StyleSheet,View, Image, Text, ScrollView} from "react-native";

function Dashboard({navigation,route}) {
  return (
      
      
      
    <View style={styles.container}>
       <Image style={styles.image} source={require('..//assets/profile.jpg')} resizeMode='stretch'/>
        
        <View style={styles.infoContainer}>
            <Text style={styles.Nametext}>Suleman Sohail</Text>
            <View style={styles.insideContainer}>
            <Text  style={styles.text}>Age: 20</Text>
            <Text  style={styles.text}>Suleman.sohail9@gmail.com</Text>
            <Text  style={styles.text}>Bio:</Text>
            <View style={styles.BioContainer}><ScrollView ><Text style={styles.Biotext} scrollable={true} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec vehicula erat. Fusce at libero congue, aliquam diam sed, aliquet risus. Phasellus accumsan tellus tellus, quis porttitor nisl vehicula vel. Phasellus sollicitudin magna lacus. Aliquam imperdiet aliquet venenatis. Phasellus sagittis, massa at dignissim rutrum, erat enim elementum urna, eget sollicitudin ipsum diam eu tortor. Curabitur eget erat eget magna rhoncus ornare. Nam ultricies magna tincidunt urna pellentesque, in facilisis nunc scelerisque. Sed elementum suscipit urna et semper. Suspendisse erat dolor, semper ut dapibus faucibus, eleifend id velit. Praesent at enim ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </Text></ScrollView></View>
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
        height:160,
        marginTop:10,
        paddingRight:10,

    },
    Biotext:{
        fontSize:15,
        
    }
});



export default Dashboard