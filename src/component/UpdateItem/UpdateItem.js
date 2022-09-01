import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
  } from 'react-native';
export default function UpdateItem({ navigation }) {
  return (
    <View style={Styles.mainBg}>
    <View style={Styles.imgContainer}>
      <Image source={require('../../Assets/image11.png')} />
    </View>
    <View>
      <Text style={Styles.headText}>Hurrah</Text>
    </View>
    <View>
      <Text style={Styles.belowText}>
        Your NFT Published
      </Text>
     
    </View>
    <View style={Styles.shareCont}>
    <Text style={Styles.belowText}>
        Share
      </Text>
      <View style={Styles.shareIconsContainor}>
        <View style={Styles.iconsStyle}>
      <Image style={Styles.image} source={require('../../Assets/InstaGramVector.png')} />

        </View>
        <View style={Styles.iconsStyle}>
      <Image style={Styles.image} source={require('../../Assets/twiVector.png')} />

        </View>
        <View style={Styles.iconsStyle}>
      <Image style={Styles.image} source={require('../../Assets/whatsappVector.png')} />

        </View>
        <View style={Styles.iconsStyle}>
      <Image style={Styles.image} source={require('../../Assets/LineVector.png')} />

        </View>
      </View>
    </View>
    <View>
      <TouchableOpacity
      style={Styles.belowButton}
        activeOpacity={0.5}
        onPress={()=> navigation.navigate("ItemReadyForSell")}
      >
   <Text style={Styles.buttonTextStyle}>Back to Home </Text>
      </TouchableOpacity>
    </View>
  </View>
);
}
const Styles = StyleSheet.create({
mainBg: {
  // display:"flex",
  // flex:1,
  height: '100%',
  justifyContent: 'center',
  backgroundColor: '#1C212B',
  alignContent: 'center',
},
imgContainer: {
  marginTop: 60,
  alignItems: 'center',
},
iconsStyle:{
    
margin:15
},
headText: {
  color: 'white',
  fontSize: 30,
  margin: 35,
  textAlign: 'center',
  fontFamily: 'Rationale',
},
shareCont:{
marginTop:40
},
image: {
    marginTop:20,
    width: 30,
    height: 30,
    // resizeMode: 'cover'
},
shareIconsContainor:{
justifyContent:'center',
alignItems:"center",
flexDirection:"row"
},
belowText: {
  color: 'white',
  fontSize: 18,
  // margin:,
  textAlign: 'center',
  fontFamily: 'Rationale',
  lineHeight: 19.2,
},
belowButton: {
  backgroundColor: '#1D9BF0',
  width: 300,
  height: 50,
  height: 40,
  alignItems: 'center',
  borderRadius: 10,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 80,
  marginBottom: 4,
},
buttonTextStyle: {
  color: 'white',
  paddingVertical: 10,
  fontSize: 16,
  fontWeight: '600',
},
});