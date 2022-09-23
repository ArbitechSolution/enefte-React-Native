import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
  } from 'react-native';
export default function BidFinished({ navigation }) {
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.imgContainer}>
        <Image source={require('../../Assets/image12.png')} />
      </View>
      <View>
        <Text style={Styles.headText}>Bid Placed</Text>
      </View>
      <View>
        <Text style={Styles.belowText}>
          Your order was placed successfully for more details,
          check Offers Status in the tab offers made.
        </Text>
      </View>
      <View>
        <TouchableOpacity
        style={Styles.belowButton}
          activeOpacity={0.5}
          onPress={()=> navigation.navigate("UploadItemOne")}
        >
     <Text style={Styles.buttonTextStyle}>Check my Bid  </Text>
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
  headText: {
    color: 'white',
    fontSize: 34,
    margin: 35,
    textAlign: 'center',
    fontFamily: 'Rationale-Regular',

  },
  belowText: {
    color: 'white',
    fontSize: 20,
    // margin:,
    textAlign: 'center',
    // fontFamily: 'Rationale',
    lineHeight: 19.2,
    fontFamily: 'Rationale-Regular',

  },
  belowButton: {
    backgroundColor: '#138E10',
    width: 300,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 80,
    marginBottom: 4,
    justifyContent:'center',
    alignItems: "center"
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Rationale-Regular',

  },
});