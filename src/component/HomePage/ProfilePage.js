import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileAppBar from './ProfileAppBar';
export default function ProfilePage({ navigation }) {
  const Stack = createNativeStackNavigator()
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.ProfilePageImage}>
        <Image source={require('../../Assets/banner-photo1.png')} />
        <View style={Styles.iconsCont}>
          <TouchableOpacity onPress={() => navigation.navigate('AppBars')}><Image source={require("../../Assets/IconArrow.png")} /></TouchableOpacity>
          <Image source={require("../../Assets/share.png")} />
        </View>
        <View style={Styles.ProfilePageDownImage}>
          <Image source={require('../../Assets/Profile-Verified21.png')} />
          <View style={Styles.ProfilePageDownImageBox}>
            <TouchableOpacity>
              <Text style={Styles.ProfilePageDownImageBoxText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View >
        <Text style={Styles.ProfilePageText}>kevin</Text>
      </View>
      <View style={Styles.ProfilePageadressBox}>
        <View style={Styles.ProfilePageAddress}>
          <Ionicons name='copy' size={28} color={'#1D9BF0'} />
          <Text style={Styles.ProfilePageAddressText}>0x841a...8a57</Text>
        </View>
        <View style={Styles.ProfilePageSocialIcons}>
          <Fontisto name='world' size={25} />
          <Fontisto name='instagram' size={25} />
          <Fontisto name='twitter' size={25} />
        </View>
      </View>
      <View >
        <Text style={Styles.ProfilePageSellAnyThing}>Sell anything</Text>
      </View>
      <View style={Styles.ProfilePageTextUpper}>
        <View style={Styles.ProfilePageTextMini}>
          <Text style={Styles.ProfilePageTextMiniText}>54</Text>
          <Text style={Styles.ProfilePageTextMiniTextOne}>Items Total</Text>
        </View>
        <View style={Styles.ProfilePageTextMini}>
          <Text style={Styles.ProfilePageTextMiniText}>3,7K</Text>
          <Text style={Styles.ProfilePageTextMiniTextOne}>Views</Text>
        </View>
        <View style={Styles.ProfilePageTextMini}>
          <Text style={Styles.ProfilePageTextMiniText}>1,2K</Text>
          <Text style={Styles.ProfilePageTextMiniTextOne}>Liked</Text>
        </View>
      </View>
      <View>
        <ProfileAppBar/>
      
      </View>

      
    </View>
  )
}

const Styles = StyleSheet.create({
  mainBg: {
    height: '100%',
    backgroundColor: '#1C212B',
    alignContent: 'center',
  },
  ProfilePageImage: {
    position: 'relative'
  },
  iconsCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginTop: -150
  },
  ProfilePageDownImage: {
    // position: 'absolute',
    // top: 152,
    // left: 20,
    padding: 22,
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'

  },
  ProfilePageDownImageBox: {
    borderWidth: 1,
    width: 105,
    height: 45,
    borderColor: "#AAB8C2",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ProfilePageDownImageBoxText: {
    color: '#F5F8FA',
    fontWeight: '500'
  },
  ProfilePageText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    paddingLeft: 20,
  },
  ProfilePageAddress: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ProfilePageSocialIcons: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: 120,
    justifyContent: 'space-between'
  },
  ProfilePageadressBox: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15
  },
  ProfilePageAddressText: {
    fontFamily: 'Rationale',
    fontSize: 15,
    paddingLeft: 10
  },
  ProfilePageSellAnyThing: {
    fontFamily: 'Rationale',
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 20,
    marginTop: 20
  },
  ProfilePageTextMini: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: 120,
    alignItems: 'center'

  },
  ProfilePageTextUpper: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingTop: 30
  },
  ProfilePageTextMiniText: {
    fontFamily: 'Rationale',
    color: '#F5F8FA',
    fontSize: 20,
    fontWeight: '600',
  },
  ProfilePageTextMiniTextOne: {
    color: '#AAB8C2',
    fontFamily: 'Rationale',
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 5
  }

})