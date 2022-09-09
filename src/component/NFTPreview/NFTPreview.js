import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
  } from 'react-native';
  import AntDesign from "react-native-vector-icons/AntDesign"
export default function NFTPreview({navigation}) {
  return (
    <View style={Styles.mainBg}>
        <View style={Styles.topImage}>
            {/* <Image style={require("../../Assets/line.png")}/> */}
            <TouchableOpacity onPress={()=>navigation.navigate('NftItesmsDetails')}>
            <AntDesign name='close' size={35} color={'#F5F8FA'} />
            </TouchableOpacity>

        </View>
        <View style={Styles.mainImage}>
            <Image source ={require("../../Assets/Rectangle8.png")}/>
            {/* <Image style={require("../../Assets/cross.png")}/> */}

        </View>
    </View>
  )
}
const Styles = StyleSheet.create({
    mainBg: {
        // display:"flex",
        // flex:1,
        height: '100%',
        // justifyContent: 'center',
        backgroundColor: '#1C212B',
        alignContent: 'center',
      },
      topImage:{
        // flex:0.2
        marginLeft:20,
        marginTop:50,
        marginBottom:110
      },
      mainImage:{
        // flex :0.7
      }
})