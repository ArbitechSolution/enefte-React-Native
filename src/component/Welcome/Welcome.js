import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity, Button} from 'react-native';
export default function Welcome() {
  return (
    <View style={Styles.mainBg}> 
    <View style ={Styles.imgContainer}>
    <Image  source={require('../../Assets/welcomeCard.png')} />
    </View>
 <View>
    <Text style={Styles.headText}>
        Hey! Welcome

    </Text>
 </View>
 <View>
    <Text style={Styles.belowText}>
      Create and sell your NFT in seconds

    </Text>
 </View>
       </View>
  )
}
const Styles = StyleSheet.create({
    mainBg:{
      // display:"flex",
      // flex:1,
      height:"100%", 
      justifyContent:"center",
      backgroundColor:"#1C212B",
      alignContent:"center"
    },
    imgContainer:{
      marginTop:60,
      alignItems:"center", 
  
    },
    headText:{
      color:"white",
      fontSize:30,
      margin:35,
      textAlign:'center',
      // fontFamily:'Rationale',
          fontFamily: 'Rationale-Regular',

  
    },
    belowText:{
      color:"white",
      fontSize:16,
      // margin:,
      textAlign:'center',
      // fontFamily:'Rationale',
    fontFamily: 'Rationale-Regular',
      lineHeight:19.2
  
    },
    belowButton:{
      backgroundColor: "#1D9BF0",
      width:300,
      height:50,
      height: 40,
      alignItems: "center",
      borderRadius: 10,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 80,
      marginBottom: 4,
    },
    buttonTextStyle: {
      color: "white",
      paddingVertical: 10,
      fontSize: 16,
      fontWeight: "600",
  },
  })
  
 