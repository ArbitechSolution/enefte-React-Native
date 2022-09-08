import React from 'react'
import { View ,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import Dropdown from './Dropdown'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function UploadItemThree({navigation}) {
  return (
    <View style={Styles.mainBg}>
        <View style={Styles.innerMainBg}>
            <View style={Styles.headerCont}>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('UploadItemOne')}>

                <Image source ={require("../../Assets/forward.png")}/>
                </TouchableOpacity>
            </View>
            <View style={Styles.headerTxtCont}>
                <Text style={Styles.headerTxt}>
                    Set Items
                </Text>
            </View>
            <View>
            </View>
            </View>
            <View>
                <Dropdown label={'Choose Collections'}/>
            </View>
            <View style={Styles.belowCont}>
                <View>
                <Text style={Styles.headingTxt}>
                    Properties
                </Text>
                <Text style={Styles.commonTxt}>
                Textual traits that show up as rectangles
                </Text>
                </View>
                <View>
                    <Image source ={require("../../Assets/plus.png")}/>
                </View>

            </View>
            <View style={Styles.belowCont}>
                <View>
                <Text style={Styles.headingTxt}>
                    Levels
                </Text>
                <Text style={Styles.commonTxt}>
                Numerical traits that show as a progress bar
                </Text>
                </View>
                <View>
                    <Image source ={require("../../Assets/plus.png")}/>
                </View>

            </View>
            <View style={Styles.belowCont}>
                <View>
                <Text style={Styles.headingTxt}>
                    Stats
                </Text>
                <Text style={Styles.commonTxt}>
                Numerical traits that show as a number
                </Text>
                </View>
                <View>
                    <Image source ={require("../../Assets/plus.png")}/>
                </View>

            </View>
          
            <View>
        <TouchableOpacity
        style={Styles.belowButton}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("UpdateItemsFour")}
        >
     <Text style={Styles.buttonTextStyle}>NEXT</Text>
        </TouchableOpacity>
      </View>
        </View>
    </View>
  )
}
const Styles = StyleSheet.create({
    mainBg:{
        height: hp('100%'),
        // justifyContent: 'center',
        backgroundColor: '#1C212B',
        // alignContent: 'center',
    },  
    innerMainBg:{
        padding:30
    },
    headerCont:{
        flexDirection:"row",
        marginTop:20
        // mt
    },
    headerTxtCont:{
        // backgroundColor:"red",
        marginLeft:100
        // paddingLeft:20
    },
    headerTxt:{
        color:"#FFFFFF",
        fontSize:24,
        fontWeight:"400",
        fontFamily:"Roboto-Regular"
    },
    belowCont:{
        flexDirection:"row",
        // backgroundColor:"red",
        height:hp("8%"),
        marginTop:40,
        justifyContent:"space-between",
        // justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    headingTxt:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:"400",
        fontFamily:"Roboto-Regular"
    },
    commonTxt:{
        color:"#AAB8C2",
        fontFamily:"Rationale",
        fontSize:12,
        fontWeight:"400"
    },
    belowButton:{
        backgroundColor: "#1D9BF0",
        width:wp("85%"),
        height:hp("7%"),
        alignItems: "center",
        borderRadius: 10,
        // marginLeft: 35,
        justifyContent:"center",
        marginRight: 35,
        marginTop: 160,
        marginBottom: 4,
      },
      buttonTextStyle: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
})