import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
  } from 'react-native';
export default function UploadItemTwo({ navigation }) {
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.headerContainer}>
            <Text style={Styles.headerTxt}>
                Complete Listing
            </Text>
            </View>
            <View style={Styles.imgContainor}>
            <Image source={require("../../Assets/progressBar.png")}/>
            </View>
            <View style={Styles.headerContainer}>
            <Text style={Styles.headerTxt}>
                Approve Token
            </Text>
            </View>
            <View style={Styles.commonTxtCont}>
                <Text style={Styles.commonText}>
                To get set up for auction listings for the first time, you must approve the taken for trading,
                 which requires a one-time gas fee 
                </Text>
            </View>
            <View style={Styles.commonTxtCont}>
                <Text style={Styles.commonTxtViewOnTh}>
                 View on Etherscan
                </Text>
            </View>
            <View style={[Styles.TabsRankingcard, { marginTop: 40 }]}>
                <View style={Styles.mainView}>
                    <View style={Styles.TabsActivityImage}>
                        <Image source={require('../../Assets/UploadItemTwoImage.png')} />
                        <View style={{ paddingLeft: 8 }}>
                            <Text style={Styles.TabsActivityImageText}>Kunjek</Text>
                            <Text style={Styles.TabsActivityImageTextOne}>Young Ape</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={Styles.TabsActivityminitextTwo}>Price</Text>
                        <View style={Styles.innerView}>
                            {/* <Image source={require('../../Assets/image7.png')} /> */}
                            <Text style={Styles.TabsActivityminitextOne}>0.0002</Text>
                        </View>
                        <Text style={Styles.TabsActivityminitextTwo}>Quantity:1</Text>
                    </View>
                </View>
                {/* <View style={Styles.CardsOne}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>USD Price</Text>
                        <Text style={Styles.CardsOneTextgreen}>$153,16</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Quantity</Text>
                        <Text style={Styles.CardsOneTextsecond}>1</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>From</Text>
                        <Text style={[Styles.CardsOneTextsecond, {color: '#1D9BF0'}]}>aleben92</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>To</Text>
                        <Text style={[Styles.CardsOneTextsecond, {color: '#1D9BF0'}]}>Wavez47</Text>
                    </View>
                </View> */}
            </View>
                <View style={Styles.commonTxtCont}>
                <Text style={Styles.commonText}>
                To get set up for auction listings for the first time, you must approve the taken for trading,
                 which requires a one-time gas fee 
                </Text>
            </View>
            <View>
        <TouchableOpacity
        style={Styles.belowButton}
          activeOpacity={0.5}
          onPress={()=>{
            navigation.navigate('UpdateItem')
          }}
        >
     <Text style={Styles.buttonTextStyle}>Complete Listing </Text>
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
    //   justifyContent: 'center',
      backgroundColor: '#1C212B',
      alignContent: 'center',
    },
    headerContainer:{
        // backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        height:"12%",
        width:"100%"
    },
    headerTxt:{
        fontSize:24,
        fontWeight:"400",
        color:"#FFFFFF",
        fontFamily: 'Rationale-Regular',

    },
    imgContainor:{
        justifyContent:'center',
        alignItems:"center",
        marginTop:40,
        paddingBottom:20
    },
    commonText:{
        textAlign:"center",
        color:"#AAB8C2",
        padding:20,
        fontFamily: 'Rationale-Regular',

    },
    commonTxtViewOnTh:{
        color:"#1D9BF0",
        textAlign:"center",
        fontFamily: 'Rationale-Regular',

    },
    TabsRankingcard: {
        backgroundColor: '#253341',
        borderRadius: 10,
        margin: 8,
        marginTop: 10,
    },
    TabsActivityImage: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    TabsActivityImageText: {
        color: "#AAB8C2",
        fontSize: 15,
        fontFamily: 'Rationale-Regular',

    },
    TabsActivityImageTextOne: {
        color: '#F5F8FA',
        fontSize: 17,
        fontWeight: '500',
        fontFamily: 'Rationale-Regular',

    },
    innerView:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        // borderWidth: 1,
        justifyContent: 'flex-end',
        width: 80,
        paddingTop: 8

    },
    mainView:{
//   borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 15
    }, 
    TabsActivityminitext:{
        color: '#00CB6A',
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Rationale-Regular',


    },
    TabsActivityminitextOne:{
        color: '#F5F8FA',
        fontSize: 15,
        fontFamily: 'Rationale-Regular',

        // textAlign:"flex-end"
    },
    TabsActivityminitextTwo:{
        color: '#AAB8C2',
        fontSize: 15,
        paddingTop: 8,
        alignItems:'flex-end',
        fontFamily: 'Rationale-Regular',

    },
    CardsOne: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 25,
        paddingBottom: 30
    },
    CardsOneText: {
        color: '#AAB8C2',
        fontSize: 15,
        fontFamily: 'Rationale-Regular',

    },
    CardsOneTextgreen: {
        color: '#F5F8FA',
        fontSize: 13,
        paddingTop: 8,
        fontFamily: 'Rationale-Regular',

    },
    CardsOneTextsecond: {
        paddingTop: 8,
        color: "#F5F8FA",
        fontSize: 13,
        fontFamily: 'Rationale-Regular',

    },
    belowButton: {
        backgroundColor: '#1D9BF0',
        width: 300,
        height: 50,
      justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
      },
      buttonTextStyle: {
        color: 'white',
        fontFamily: 'Rationale-Regular',
        
        paddingVertical: 10,
        fontSize: 24,
        fontWeight: '600',
      },
    });