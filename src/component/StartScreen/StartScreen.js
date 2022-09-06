import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
// import url('https://fonts.googleapis.com/css2?family=Rationale&display=swap');
export default function Startscreen({navigation}) {
    
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.imgContainer}>
        <Image source={require('../../Assets/Logo.png')} />
        <View >
        <Image style={Styles.imgContainerImage} source={require('../../Assets/Ellipse12.png')}/>
        <Image style={Styles.imgContainerImage1} source={require('../../Assets/Ellipse13.png')}/>
        </View>
      </View>
      <View>
        <Text style={Styles.headText}>
          All NFTs are certifiably unique and ownable
        </Text>
      </View>
      <View style={Styles.bottomCont}>
        <Text style={Styles.belowText}>
          A credible and excellent marketplace for non-fungible token
        </Text>
      </View>
      <View style={Styles.bottomButtonCont}>
        <View style={Styles.buttonOne}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("ConnectWithWallet")}
        >
            <Text style={Styles.buttonTextStyle}>
                Connect With Wallet
            </Text>

        </TouchableOpacity>
        </View>
      
          <TouchableOpacity 
            onPress={()=>navigation.navigate("welcome")}
          >
        <View style={Styles.buttonTwo} >

        <Image source={require('../../Assets/arrowVectorForward.png')} />
        </View>
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
    //   justifyContent:"center",
    backgroundColor: '#1C212B',
    alignContent: 'center',
  },
  imgContainer: {
    flex: 1,
    margin: 30,
    marginTop:45,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bottomCont: {
    flex: 1,
  },

  bottomButtonCont:{
    flex:0.3,
    marginBottom:60,
    flexDirection:"row"
  },
  buttonOne:{
    backgroundColor:"#1D9BF0",
    borderRadius:10,
    width:200,
    height: 50,
    marginLeft:25,
    justifyContent:"center", 
    alignItems:"center"
  },
  buttonTwo:{
    // backgroundColor:"#1D9BF0",
    borderRadius:10,
    width:80,
    height: 50,
    borderColor:"white",
    marginLeft:25,
    borderWidth:1,
    justifyContent:"center", 
    alignItems:"center"
  },
  headText: {
    color: 'white',
    fontSize: 28,
    margin: 40,
    textAlign: 'left',
    fontFamily: 'Rationale',
  },
  belowText: {
    color: '#AAB8C2',
    fontSize: 14,
    margin: 40,
    //   fontWeight:400,
    fontWeight: '450',
    fontFamily: 'Rationale',
    lineHeight: 19.2,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 7,
    fontSize: 16,
    fontWeight: '400',
  },
  imgContainerImage: {
    marginLeft: -150,
    marginTop: -55
  },
  imgContainerImage1:{
    marginLeft: -150,
    marginTop: -190
  }
});