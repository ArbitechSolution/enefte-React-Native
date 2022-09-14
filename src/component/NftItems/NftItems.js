import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
export default function NftItems({navigation}) {
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.headerCont}>
        <View style={Styles.backIconImg}>
        <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}>
        <View>
            <AntDesign name="left" size={25} color={'white'} />
          </View>
</TouchableOpacity>
          
          <View style={Styles.IconsContainor}>
            <View style={Styles.iconbox}>
              <FontAwesome name="filter" size={25} color={'#F5F8FA'} />
            </View>

            <View style={Styles.iconbox}>
              <Entypo name="share" size={25} color={'#F5F8FA'} />
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{marginBottom:5}} showsHorizontalScrollIndicator={true}>
      <View style={Styles.mainImgCont}>
        <Image
          style={Styles.mainImg}
          source={require('../../Assets/myNftPreview.png')}
        />
      </View>
     

      
      <View style={Styles.InvitTxtCont}>
        <Text style={Styles.commonTxt}>Karafuru</Text>
        <Image
          source={require('../../Assets/ic_round-verified.png')}
          style={{marginLeft: 10}}
        />
      </View>
      <View style={Styles.HeadTxtCont}>
        <Text style={Styles.headTxt}>Mosu #1930</Text>
      </View>
      <View style={Styles.belowImageContainor}>
        <View style={Styles.innerCOnt}>
          <Image source={require('../../Assets/ellipse.png')} />
          <View style={Styles.textContainor}>
            <Text style={Styles.textone}>Created By</Text>
            <Text style={Styles.texttwo}>KarafuruDep</Text>
          </View>
        </View>
        <View style={Styles.innerCOnt}>
          <Image
            style={{marginLeft: 20}}
            source={require('../../Assets/ellipse2.png')}
          />
          <View style={Styles.textContainor}>
            <Text style={Styles.textone}>Owned By</Text>
            <Text style={Styles.texttwo}>Wakanabe420</Text>
          </View>
        </View>
      </View>
      <View style={Styles.InvitTxtCont}>
        <Text style={Styles.commonTxt}>
          Karafuru is home to 5,555 generative arts where colors reign supreme.
          Leave the drab reality and enter the world of Karafuru by Museum of
          Toys.
        </Text>
      </View>

      <View style={Styles.lastview}>
        <View>
          <Text style={Styles.lastviewText}>Current Bid</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  width: 100, marginTop: 8 }}>
            <Image source={require('../../Assets/logos_ethereum.png')} />
            <Text style={Styles.lastviewTextOne}>Current Bid</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
        <Text style={Styles.lastviewText}>Ends In</Text>
        <Text style={[Styles.lastviewTextOne, {marginTop: 8}]}>June 21, 2022 at 23.00</Text>
        </View>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.footerbg}>
          <View style={Styles.buttonOne}>
            <Image source={require('../../Assets/logos_ethereum.png')} />

            <Text style={[Styles.sellitemTxt, {fontSize: 18}]}>2,75 ETH</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('NftItesmsDetails')}>
            <View style={Styles.buttonTwo}>
              <Entypo name="wallet" size={25} color={'#F5F8FA'} />
              {/* <Image source={require("../../Assets/folder.png")} /> */}
              <Text style={Styles.sellitemTxt}>Place a bid</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}
const Styles = StyleSheet.create({
  mainBg: {
    height: '100%',
    backgroundColor: '#1C212B',
  },
  headerCont: {
    // height: '11%',
    // width: '100%',
    // backgroundColor:"red",
  },
  backIconImg: {
    margin: 20,
    flexDirection: 'row',
    // alignSelf:"flex-end",
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1
  },

  // belowButton: {
  //   flexDirection: 'row',
  //   // backgroundColor: '#1D9BF0',
  //   width: 120,
  //   height: 50,
  //   height: 40,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 10,
  //   marginTop: -5,
  //   paddingLeft: 20,
  // },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  IconsContainor: {
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-around',
    width: 110,
  },
  filterImg: {
    marginLeft: 20,
    width: '40%',
    height: '100%',
  },
  mainImgCont: {
    marginTop: 20,
    // justifyContent:"center",
    alignItems: 'center',
    // height:"60%"
  },
  mainImg: {
    height: hp('40%'),
    width: wp('85%'),
    borderRadius: 10,
  },
  InvitTxtCont: {
    marginLeft: 20,
    marginTop: 10,
    marginRight: 5,
    flexDirection: 'row',
  },
  commonTxt: {
    fontSize: 18,
    color: '#F5F8FA',
    fontFamily: 'Rationale-Regular',
  },
  HeadTxtCont: {
    marginTop: 10,
    marginLeft: 20,
    // fontFamily: 'Rationale-Regular',
  },
  headTxt: {
    color: '#F5F8FA',
    fontSize: 34,
    fontWeight: '400',
    fontFamily: 'Rationale-Regular',
  },
  belowImageContainor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginLeft: 25,
    marginTop: 15,
  },
  innerCOnt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainor: {
    marginLeft: 10,
  },
  textone: {
    color: '#AAB8C2',
    fontFamily: 'Rationale-Regular',
    fontSize: 18,
  },
  texttwo: {
    color: '#F5F8FA',
    fontSize: 18,
    fontFamily: 'Rationale-Regular',
  },
  bottomCont: {
    // height:"10%",
    // marginTop:50
    justifyContent: 'flex-end',
    flex: 1,
  },
  footerbg: {
    backgroundColor: '#253341',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonOne: {
    height: 50,
    borderColor: '#1D9BF0',
    borderRadius: 10,
    // borderWidth: 1,
    width: 140,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTwo: {
    height: 50,
    backgroundColor: '#1D9BF0',
    borderRadius: 10,
    flexDirection: 'row',
    // fontFamily: 'Rationale-Regular',

    // border:"##1D9BF0",
    // borderWidth:1,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ethImg: {
    color: '#F5F8FA',

    paddingLeft: 10,
  },
  sellitemTxt: {
    color: '#F5F8FA',
    fontSize: 22,
    paddingLeft: 10,
    fontFamily: 'Rationale-Regular',
  },
  iconbox: {
    backgroundColor: '#253341',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastview:{
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'space-between',
    margin: 15
  },
  lastviewText:{
    fontFamily: 'Rationale-Regular',
    fontSize: 20,
    color: '#AAB8C2'
  },
  lastviewTextOne:{
    fontFamily: 'Rationale-Regular',
    fontSize: 20,
    // marginTop: 10,
    color: '#F5F8FA'
    
  }
});
