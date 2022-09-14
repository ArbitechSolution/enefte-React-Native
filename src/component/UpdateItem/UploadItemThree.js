import React from 'react'
import { View ,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import Dropdown from './Dropdown'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
export default function UploadItemThree({navigation}) {
  return (
    <View style={Styles.mainBg}>
        <View style={Styles.innerMainBg}>
            <View style={Styles.headerCont}>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('UploadItemOne')}>

                <AntDesign name='left'
              size={25} color={"white"} />
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
                <View style={Styles.iconbox}>
                <AntDesign name='plus' size={25} color={'#1C212B'} />
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
                <View style={Styles.iconbox}>
                <AntDesign name='plus' size={25} color={'#1C212B'} />
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
                <View style={Styles.iconbox}>
                <AntDesign name='plus' size={25} color={'#1C212B'} />
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
        fontSize:32,
        fontWeight:"400",
        fontFamily: 'Rationale-Regular',

        // fontFamily:"Roboto-Regular"
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
        fontSize:19,
        fontWeight:"400",
        // fontFamily:"Roboto-Regular"
        fontFamily: 'Rationale-Regular',

    },
    commonTxt:{
        color:"#AAB8C2",
        // fontFamily:"Rationale",
        fontSize:15,
        fontWeight:"400",
        fontFamily: 'Rationale-Regular',

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
        fontSize: 24,
        fontWeight: "400",
        fontFamily: 'Rationale-Regular',

    },
    iconbox: {
        backgroundColor: "#1D9BF0",
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
      }
})