import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function UploadItemOne({ navigation }) {
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.headerContainor}>
        <View style={Styles.imgContainor}>
        <TouchableOpacity onPress={()=>navigation.navigate('BidFinished')}>
            <AntDesign name='left'
              size={30} color={"white"} />
            </TouchableOpacity>

        </View>
        <View style={Styles.imgContainorLogo}>
        <Text style={Styles.headerTxt}>Upload Items</Text>

          </View>
      </View>
      <View style={Styles.innerMainBg}>
        <View style={Styles.topTxtContainer}>
          <Text style={Styles.headerTxt}>Upload New Items*</Text>
          <Text style={Styles.commonTxt}>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF, Max size: 40 MB
          </Text>
        </View>
        <View style={Styles.belowImgInputCont}>
          <Image source={require('../../Assets/uploadIcon.png')} />
          <Text style={Styles.commonTxtTwo}>Upload Your NFT</Text>
        </View>

        <View style={Styles.belowInput}>
          <TextInput
            style={Styles.searchInput}
            numberOfLines={1}
            placeholder="Name"
          />
        </View>
        <View style={Styles.belowInput}>
          <TextInput
            style={Styles.searchInput}
            numberOfLines={1}
            placeholder="External Link"
          />
        </View>
        <View>
          <Text style={Styles.commonTxt}>
            enefte will include a link to this URL on this itern's detail page,
            so that users can click to learn more about it. You are welcome to
            link to your own webpage with more details.
          </Text>
        </View>
        <View style={Styles.belowInputBio}>
          <TextInput
            style={Styles.searchInput}
            numberOfLines={4}
            placeholder="Bio"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("UploadItemThree")}>
      <View style={Styles.ButtonContinue}>
        <Text style={Styles.ButtonContinueText}>Continue</Text>
      </View>
      </TouchableOpacity>
        {/* <View>
          <TouchableOpacity style={Styles.belowButton} activeOpacity={0.5} onPress={() => navigation.navigate("UploadItemThree")}>
            <Text style={Styles.buttonTextStyle}>NEXT</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  mainBg: {
    height: hp('100%'),
    // height: '100%',
    // justifyContent: 'center',
    backgroundColor: '#1C212B',
    // alignContent: 'center',
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
  innerMainBg: {
    padding: 20,
  },
  headerCont: {
    flexDirection: 'row',
    marginTop: 0,
  },
  headerTxtCont: {
    // backgroundColor:"red",
    marginLeft: 80,
    // paddingLeft:20
  },
  headerTxt: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'Roboto-Regular',
  },
  topTxtContainer: {
    marginTop: 10,
  },
  commonTxt: {
    color: '#AAB8C2',
    fontWeight: '400',
    fontSize: 12,
    paddingTop: 10,
  },
  commonTxtTwo: {
    color: '#AAB8C2',
    fontWeight: '400',
    fontSize: 16,
    paddingTop: 10,
  },
  belowImgInputCont: {
    borderWidth: 1,
    marginTop: 20,
    height: hp('20%'),
    borderRadius: 10,
    borderColor: '#AAB8C2',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchHeadContainer: {
    marginLeft: 20,
    marginTop: 50,
  },
  searchHeadTxt: {
    fontSize: 34,
    fontWeight: '400',
    color: '#ffffff',
  },
  belowInput: {
    backgroundColor: '#253341',
    // width: wp('82%'),
    // height: hp('6%'),
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 10,
  },
  searchIconImage: {
    marginTop: 15,
    marginLeft: 20,
  },
  searchInput: {
    fontSize: 18,
    alignSelf: 'center',
    marginLeft: 20,
    color: '#fff',
  },
  belowInputBio: {
    backgroundColor: '#253341',
    // width: wp('82%'),
    // height: hp('10%'),
    marginTop: 30,
    flexDirection: 'row',
    borderRadius: 10,
  },
  belowButton: {
    backgroundColor: '#1D9BF0',
    // width: wp('84%'),
    // height: hp('7%'),
    alignItems: 'center',
    borderRadius: 10,
    // marginLeft: 35,
    justifyContent: 'center',
    marginRight: 35,
    marginTop: 10,
    marginBottom: 4,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  ButtonContinue: {
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#1D9BF0',
    borderRadius: 10,
    padding: 15,
    marginTop: 10
    
  },
  ButtonContinueText:{
    textAlign: 'center',
    fontSize: 18,
    color: '#F5F8FA',
    fontWeight: '600',
  }
});