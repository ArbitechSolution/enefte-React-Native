import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function NftItems({ navigation }) {
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.headerCont}>
        <View style={Styles.backIconImg}>
          <View>
            <Image source={require('../../Assets/forward.png')} />
          </View>
          <View style={Styles.IconsContainor}>
            <TouchableOpacity style={Styles.belowButton} activeOpacity={0.5}>
              <Image
                style={Styles.filterImg}
                source={require('../../Assets/filter.png')}
              />
              <Image
                style={Styles.filterImg}
                source={require('../../Assets/share.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={Styles.mainImgCont}>
        <Image
          style={Styles.mainImg}
          source={require('../../Assets/myNftPreview.png')}
        />
      </View>
      <View style={Styles.InvitTxtCont}>
        <Text style={Styles.commonTxt}>Karafuru</Text>
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
      <View style={Styles.bottomCont}>
        <View style={Styles.footerbg}>
          <View style={Styles.buttonOne}>
          <Image  source={require("../../Assets/logos_ethereum.png")}/>

            <Text style={Styles.sellitemTxt}>2,75 ETH</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("NftItesmsDetails")}>
          <View style={Styles.buttonTwo}>
            <Image source={require("../../Assets/folder.png")}/>
            <Text style={Styles.sellitemTxt}>Place a bid</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  mainBg: {
    height: '100%',
    backgroundColor: '#1C212B',
  },
  headerCont: {
    height: '11%',
    width: '100%',
    // backgroundColor:"red",
  },
  backIconImg: {
    margin: 30,
    flexDirection: 'row',
    // alignSelf:"flex-end",
    justifyContent: 'space-between',
  },
  belowButton: {
    flexDirection: 'row',
    // backgroundColor: '#1D9BF0',
    width: 120,
    height: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: -5,
    paddingLeft: 20,
  },
  buttonTextStyle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  IconsContainor: {
    flexDirection: 'row',
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
    marginRight: 5
  },
  commonTxt: {
    fontSize: 16,
    color: '#F5F8FA',
    
  },
  HeadTxtCont: {
    marginTop: 10,
    marginLeft: 20,
  },
  headTxt: {
    color: '#F5F8FA',
    fontSize: 34,
    fontWeight: '400',
  },
  belowImageContainor: {
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 15,
  },
  innerCOnt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainor: {
    marginLeft: 30,
  },
  textone: {
    color: '#AAB8C2',
  },
  texttwo: {
    color: '#F5F8FA',
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
    borderWidth: 1,
    width: 140,
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTwo: {
    height: 50,
    backgroundColor: '#1D9BF0',
    borderRadius: 10,
    flexDirection:"row",

    // border:"##1D9BF0",
    // borderWidth:1,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ethImg: {
    color: '#F5F8FA',

    paddingLeft:10
  },
  sellitemTxt: {
    color: '#F5F8FA',
    paddingLeft:10

  },
});