import React, { useState, createRef, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useWalletConnect} from '../../../WalletConnect'
// import WalletConnect from "@walletconnect/client";
import AntDesign from "react-native-vector-icons/AntDesign"
// import {
//   useMoralis,
//   useMoralisWeb3Api,
//   useMoralisWeb3ApiCall,
//   useWeb3ExecuteFunction 
// } from "react-moralis";
export default function ConnectWithWallet({ navigation }) {
  // const connector = useWalletConnect()
  // const {
  //   authenticate,
  //   authError,
  //   isAuthenticating,
  //   isAuthenticated,
  //   logout,
  //   Moralis,
  // } = useMoralis();
  // const [userAccount, setUserAccount]= useState("Wallet Login");
  // const handleCryptoLogin = () => {
  //   let acc= connector._accounts;
  //   console.log("inside handleCryptoLogin connector",connector)
  //   if(acc.length>20){
  //     setUserAccount(acc)
  //   }else{
  //     setUserAccount("Wallet Login")
  //   }
  //   // setUserAccount(connector._accounts)
  //   authenticate({ connector })
  //     .then(() => {
  //   console.log("inside handleCryptoLogin isAuthenticating",isAuthenticating)
  //   console.log("inside handleCryptoLogin isAuthenticating",authError)
  //       if (authError) {
  //          console.log("inside handleCryptoLogin",authError)
  //         setErrortext(authError.message);
  //         setVisible(true);
  //       } else {
  //         console.log("here it enters else ")
  //   console.log("inside handleCryptoLogin isAuthenticated",isAuthenticated)

  //         if (isAuthenticated) {
  //      console.log("inside handleCryptoLogin connector",connector._accounts)

  //           setUserAccount(connector._accounts)
  //           // navigation.replace("DrawerNavigationRoutes");
  //         }
  //       }
  //     })
  //     .catch((e) => {console.log("error while authenticating",e);});
  // };

  return (
    <View style={Styles.mainBg}>
      <View style={Styles.headerContainor}>
        <View style={Styles.imgContainor}>
        <Image source={require('../../Assets/smallLogo.png')} />

          {/* <TouchableOpacity
            onPress={() => navigation.navigate("Startscreen")}
          >
            <AntDesign name='left'
          size={25} color={"white"}/>
            
          </TouchableOpacity> */}

        </View>
        <View style={Styles.imgContainorLogo}>
          {/* <Image source={require('../../Assets/Logo.png')} /> */}
        <Text style={Styles.headttextOne}>Inkoin</Text>


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
       <TouchableOpacity
      //  onPress={()=>handleCryptoLogin()}
        onPress={() => navigation.navigate("SetupProfile")}
        >
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
    justifyContent:"center",
    // backgroundColor: 'Red',
    // borderWidth: 1,
    width:"60%"
  },
  imgContainor: {
    marginTop: 35,
    marginLeft: 40,
    // borderWidth: 1
  },
  imgContainorLogo: {
    marginTop: 35,
    marginLeft: 45,
    justifyContent:"center",
    // alignItems:"flex-start",
    // borderWidth: 1
  },
  walletImgCont: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  headingContainor: {

  },
  headttextOne: {
    color: "white",
    fontSize: 36,
    marginLeft: 25,
    fontFamily: 'Rationale-Regular',
    lineHeight: 30,
    fontWeight: "400",
  },
  headttext: {
    color: "white",
    fontSize: 32,
    marginLeft: 25, 
    fontFamily: 'Rationale-Regular',
    lineHeight: 30,
    fontWeight: "400",
  },
  normalText: {
    color: "#AAB8C2",
    fontSize: 18,
    marginLeft: 25,
    marginTop: 15,
    fontFamily: 'Rationale-Regular',
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
    fontSize: 22,
    color: '#F5F8FA',
    fontWeight: '600',
    fontFamily: 'Rationale-Regular',

    marginLeft: 10
  },
  ButtonContinue: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#138E10',
    borderRadius: 10,
    padding: 15,
    marginTop: 50
    
  },
  ButtonContinueText:{
    textAlign: 'center',
    fontSize: 24,
    color: '#F5F8FA',
    fontWeight: '600',
    fontFamily: 'Rationale-Regular',

  }
});
