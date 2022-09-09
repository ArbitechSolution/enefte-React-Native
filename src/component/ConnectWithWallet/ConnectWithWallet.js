import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
export default function ConnectWithWallet({ navigation }) {
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.headerContainor}>
        <View style={Styles.imgContainor}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Startscreen")}
          >
            <AntDesign name='left'
          size={30} color={"white"}/>
            
          </TouchableOpacity>

        </View>
        <View style={Styles.imgContainorLogo}>
          <Image source={require('../../Assets/Logo.png')} />

          </View>
      </View>
      <View style={Styles.walletImgCont}>
        <Image source={require('../../Assets/WalletLogo.png')} />
      </View>
      <View style={Styles.headingContainor}>
        <Text style={Styles.headttext}>
          Choose Your Wallet
        </Text>
        <Text style={Styles.normalText}>
          By connecting your wallet you agree to our <Text style={{ color: "#fff" }}>Terms of Service</Text> and <Text style={{ color: "#fff" }}>Privacy Policy</Text>
        </Text>
      </View>
      <View style={[Styles.BoxOne, { marginTop: 15 }]}>
        <Image source={require('../../Assets/metamask.png')} />
        <Text style={Styles.BoxOneText}>MetaMask</Text>
      </View>
      <View style={[Styles.BoxOne, { marginTop: 15 }]}>
        <Image source={require("../../Assets/trustWellet.png")} />
        <Text style={Styles.BoxOneText}>Trust Wallet</Text>
      </View>
      <View style={[Styles.BoxOne, { marginTop: 15 }]}>
        <Image source={require("../../Assets/ethereum.png")} />
        <Text style={Styles.BoxOneText}>Enter ethereum address</Text>
      </View>
       <TouchableOpacity onPress={() => navigation.navigate("SetupProfile")}>
      <View style={Styles.ButtonContinue}>
        <Text style={Styles.ButtonContinueText}>Continue</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}
const Styles = StyleSheet.create({
  mainBg: {
    // display:"flex",
    // flex:1,
    height: '100%',
    //   justifyContent:"center",
    backgroundColor: '#1C212B',
    alignContent: 'center',
  },
  headerContainor: {
    flexDirection: 'row',
    // backgroundColor: 'Red',
    // borderWidth: 1,
  },
  imgContainor: {
    marginTop: 35,
    marginLeft: 20,
    // borderWidth: 1
  },
  imgContainorLogo: {
    marginTop: 35,
    marginLeft: 75,
    // justifyContent:"center",
    // alignItems:"center"
    // borderWidth: 1
  },
  walletImgCont: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  headingContainor: {

  },
  headttext: {
    color: "white",
    fontSize: 30,
    marginLeft: 25,
    // textAlign:'center',
    fontFamily: 'Rationale',
    lineHeight: 30,
    fontWeight: "400",
    marginTop: -20
  },
  normalText: {
    color: "#AAB8C2",
    fontSize: 16,
    marginLeft: 25,
    marginTop: 15,
    fontFamily: 'Rationale',
    lineHeight: 30,
    fontWeight: "400",

  },
  BoxOne: {
    backgroundColor: '#253341',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'

  },
  BoxOneText: {
    fontSize: 18,
    color: '#F5F8FA',
    fontWeight: '600',
    marginLeft: 10
  },
  ButtonContinue: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#1D9BF0',
    borderRadius: 10,
    padding: 15,
    marginTop: 50
    
  },
  ButtonContinueText:{
    textAlign: 'center',
    fontSize: 18,
    color: '#F5F8FA',
    fontWeight: '600',
  }
});
