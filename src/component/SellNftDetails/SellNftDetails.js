import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function SellNftDetails({navigation}) {
  const [selectedValue, setSelectedValue] = useState("Eth");
  const [selectedValueOne, setSelectedValueOne] = useState("Eth");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Eth', value: 'Eth' },
    { label: 'BNB', value: 'BNB' },
  ]);
  return (
    <View style={Styles.mainBg}>
      <View style={Styles.innerMainBg}>
        <View style={Styles.headerCont}>
          <View >
          <AntDesign name='left'
              size={30} color={"white"} />
          </View>
          <View style={Styles.headerTxtCont}>
            <Text style={Styles.headerTxt}>Sell Items</Text>
          </View>
        </View>
        <View style={Styles.cardsContainerHere}>
          <View style={Styles.cardOne}>
            <Image
              style={Styles.cardOne}
              source={require('../../Assets/cardFixedPrice.png')}
            />
          </View>
          <View style={Styles.cardOne}>
            <Image
              style={Styles.cardOne}
              source={require('../../Assets/cardTimeAuction.png')}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

          <View style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#253341', overflow: 'hidden'
          }}>
            <Picker
              selectedValue={selectedValue}
              style={Styles.DropDownpicker}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Eth" value="Eth" />
              <Picker.Item label="Date" value="Date" />
            </Picker>
          </View>
          <View style={Styles.belowInput}>
            <TextInput
            placeholderTextColor="#AAB8C2"
              style={Styles.searchInput}
              numberOfLines={1}
              placeholder="Price"
            />
          </View>
        </View>
        <View>
          <Text style={Styles.leftTxt}>
            Set Your Expiration Date
          </Text>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

          <View style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#253341', overflow: 'hidden'
          }}>
            <Picker
              selectedValue={selectedValueOne}
              style={Styles.DropDownpicker}
              onValueChange={(itemValue, itemIndex) => setSelectedValueOne(itemValue)}
            >
              <Picker.Item label="Date" value="Date" />
              <Picker.Item label="Date" value="Date" />
            </Picker>
          </View>
          <View style={Styles.belowInput}>
            <TextInput
            placeholderTextColor="#AAB8C2"
              style={Styles.searchInput}
              numberOfLines={1}
              placeholder="Time"
            />
          </View>
        </View>
        <View style={Styles.borderLine}></View>
        <Text style={Styles.feeTxts}>Fees</Text>
        <View style={Styles.bottomContainor}>
          <View>
            <Text style={Styles.leftTxt}>enefte fee</Text>
            <Text style={Styles.leftTxt}>Customer Royality</Text>
          </View>
          <View>
            <Text style={Styles.RightTxt}>2,50%</Text>
            <Text style={Styles.RightTxt}>10,00</Text>
          </View>
        </View>
        <View style={Styles.AmountCont}>
          <View >
            <Text style={Styles.feeTxts}>Total Earnings</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Image source={require("../../Assets/logos_ethereum.png")} />
              <Text style={Styles.feeAmount}>0</Text>
            </View>
            <Text style={[Styles.numberTxts, {textAlign: 'right'}]}>[$]</Text>
          </View>
        </View>
        {/* <View style={Styles.bottomContainor}>
          <View style={{ marginTop: 30 }}>
            <Text style={Styles.feeTxts}>Total Earnings</Text>
          </View>
          <View style={{borderWidth: 1}}>
            <View style={Styles.AmountCont}>
              <Image source={require("../../Assets/logos_ethereum.png")} />
              <Text style={Styles.feeAmount}>0</Text>
            </View>
            <Text style={Styles.numberTxts}>[$1,759.20]</Text>
          </View>
        </View> */}

<TouchableOpacity onPress={() => navigation.navigate("ItemReadyForSell")}>
      <View style={Styles.ButtonContinue}>
        <Text style={Styles.ButtonContinueText}>NEXT</Text>
      </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  mainBg: {
    height: hp('100%'),
    // justifyContent: 'center',
    backgroundColor: '#1C212B',
    // alignContent: 'center',
  },
  innerMainBg: {
    padding: 20,
  },
  headerCont: {
    flexDirection: 'row',
    marginTop: 20,
    // borderWidth: 1,
    width: '100%'
  },
  headerTxtCont: {
    // backgroundColor:"red",
    marginLeft: 80,
    // paddingLeft:20
  },
  headerTxt: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '400',
    // fontFamily: 'Roboto-Regular',
    fontFamily: 'Rationale-Regular',
        // fontSize:24
  },
  botFooter: {
    // alignSelf:"flex-end",
    justifyContent:"center",
    alignItems :"center",
    marginTop: 40,
    borderWidth: 1,
  },

  belowButton: {
    backgroundColor: '#1D9BF0',
    // width: wp('84%'),
    // height: hp('7%'),
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginRight: 35,
    marginTop: 10,
    marginBottom: 4,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Rationale-Regular',

  },
  cardsContainerHere: {
    flexDirection: 'row',
    marginTop: 30,
    // borderWidth:1,
    justifyContent: 'space-between',
  },
  cardOne: {
    height: hp('13%'),
    width: wp('40.5%'),
    // backgroundColor:"red",
    // padding:10
  },
  mydropDown: {
    backgroundColor: '#253341',
    color: '#fff',
    width: wp('25%'),
    borderColor: '#253341',
  },
  PriceView: {
    width: wp('54%'),
    backgroundColor: '#253341',
    borderColor: '#fff',
    // borderWidth:1,
    marginLeft: -220,
    borderRadius: 10,
  },
  searchInput: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: 'Rationale-Regular',

  },
  AmountCont: {
    flexDirection: 'row',
    marginTop: 20,
    // borderWidth: 1,
    justifyContent: "space-between",
    alignItems: 'center'
  },
  borderLine: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: '#253341',
  },
  feeTxts: {
    marginTop: 10,
    fontSize: 20,
    color: '#fff',
    // fontFamily: 'Rationale',
    fontFamily: 'Rationale-Regular',

  },
  numberTxts: {
    marginTop: 10,
    fontSize: 16,
    color: '#AAB8C2',
    // fontFamily: 'Rationale',
    fontFamily: 'Rationale-Regular',

  },
  leftTxt: {
    marginTop: 20,
    color: '#AAB8C2',
    fontSize: 18,
    fontFamily: 'Rationale-Regular',

  },
  bottomContainor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  RightTxt: {
    marginTop: 20,
    color: '#AAB8C2',
    fontSize: 20,
    fontFamily: 'Rationale-Regular',

    textAlign: 'right',
  },
  feeAmount: {
    fontSize: 24,
    color: '#F5F8FA',
    paddingLeft: 10,
    fontFamily: 'Rationale-Regular',

  },
  DropDownpicker: {
    backgroundColor: '#253341',
    width: 120,
    color:"#fff"

    // borderWidth: 1,
    // borderRadius: 10
  },
  searchInput: {
    fontSize: 18,
    alignSelf: 'center',
    marginLeft: 20,
    color: '#fff',
    paddingTop: 14,
    paddingBottom: 14,
    fontFamily: 'Rationale-Regular',

  },
  belowInput: {
    backgroundColor: '#253341',
    // width: wp('82%'),
    // height: hp('6%'),
    width: '55%',
    fontFamily: 'Rationale-Regular',


    // marginTop: 30,
    flexDirection: 'row',
    borderRadius: 10,
    // justifyContent: ''
  },
  ButtonContinue: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#1D9BF0',
    borderRadius: 10,
    padding: 15,
    marginTop: 50
    
  },
  ButtonContinueText:{
    textAlign: 'center',
    fontSize: 24,
    color: '#F5F8FA',
    fontWeight: '400',
    fontFamily: 'Rationale-Regular',

  }
});