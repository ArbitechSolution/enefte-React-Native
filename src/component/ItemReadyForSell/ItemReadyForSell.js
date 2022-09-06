import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
export default function ItemReadyForSell({ navigation }) {
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.imgContainer}>
        <Image source={require('../../Assets/image12.png')} />
      </View>
      <View>
        <Text style={Styles.headText}>Items Listed</Text>
      </View>
      <View>
        <Text style={Styles.belowText}>
          Your items ready for sell
        </Text>
      </View>
      <View>
        <TouchableOpacity
        style={Styles.belowButton}
          activeOpacity={0.5}
          onPress={()=> navigation.navigate("BidFinished")}
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
  headText: {
    color: 'white',
    fontSize: 30,
    margin: 35,
    textAlign: 'center',
    fontFamily: 'Rationale',
  },
  belowText: {
    color: 'white',
    fontSize: 16,
    // margin:,
    textAlign: 'center',
    fontFamily: 'Rationale',
    lineHeight: 19.2,
  },
  belowButton: {
    backgroundColor: '#1D9BF0',
    width: 300,
    height: 50,
    justifyContent:'center',
    alignItems: "center",
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 80,
    marginBottom: 4,
  },
  buttonTextStyle: {
    color: 'white',
    // paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});