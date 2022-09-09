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
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/AntDesign"
export default function UpdateItemsFour({navigation}) {
    const [selectedValue, setSelectedValue] = useState("Select Blockchain");
    const [selectedValueOne, setSelectedValueOne] = useState("Select Blockchain");
    const [selectedValueTwo, setSelectedValueTwo] = useState("Select Blockchain");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Eth', value: 'Eth' },
        { label: 'BNB', value: 'BNB' },
    ]);
    const [openOne, setOpenOne] = useState(false);
    const [valueOne, setValueOne] = useState(null);
    const [itemsOne, setItemsOne] = useState([
        // {label: 'Select Block Chain', valueOne: 'Select Block Chain'},
        { label: 'Ethereum', valueOne: 'Ethereum' },
        { label: 'Kaikas', valueOne: 'Kaikas' },

        { label: 'Binance', valueOne: 'Binance' },
    ]);
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.innerMainBg}>
                <View style={Styles.headerCont}>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('UploadItemThree')}>
                        <AntDesign name='left'
              size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.headerTxtCont}>
                        <Text style={Styles.headerTxt}>Set Price</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>

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
                            <Picker.Item label="Select Blockchain" value="Select Blockchain" />
                            <Picker.Item label="Date" value="Date" />
                        </Picker>
                    </View>
                </View>
                <View style={Styles.belowInput}>
                    <Text style={Styles.inputLabel}>Supply Items</Text>
                    <TextInput
                        label="Username"
                        numberOfLines={1}
                        placeholderTextColor="#F5F8FA"
                        placeholder="1"
                        style={[Styles.profileTextInput]}
                    />

                </View>
                <View>
                    <Text style={Styles.leftTxt}>
                        The number of coples that can be minted. No gas cost to your Quantities above one coming soon
                    </Text>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>

                    <View style={{
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#253341', overflow: 'hidden'
                    }}>
                        <Picker
                            selectedValue={selectedValueOne}
                            style={Styles.DropDownpickerOne}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueOne(itemValue)}
                        >
                            <Picker.Item label="Eth" value="Eth" />
                            <Picker.Item label="Date" value="Date" />
                        </Picker>
                    </View>
                    <View style={Styles.belowInputOne}>
                        <TextInput
                            style={Styles.searchInputOne}
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
               <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>

                    <View style={{
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#253341', overflow: 'hidden'
                    }}>
                        <Picker
                            selectedValue={selectedValueTwo}
                            style={Styles.DropDownpickerOne}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueTwo(itemValue)}
                        >
                            <Picker.Item label="Eth" value="Eth" />
                            <Picker.Item label="Date" value="Date" />
                        </Picker>
                    </View>
                    <View style={Styles.belowInputOne}>
                        <TextInput
                            style={Styles.searchInputOne}
                            numberOfLines={1}
                            placeholder="Price"
                        />
                    </View>
                </View>
                {/* <View style={Styles.cardsContainerHere}>
                    
                    <View style={Styles.PriceView}>
                        <TextInput
                            style={Styles.searchInput}
                            numberOfLines={1}
                            placeholderTextColor="#AAB8C2"
                            placeholder="Price"
                        />
                    </View>
                </View> */}
                {/* <View>
                    <Text style={Styles.leftTxt}>
                        Set Your Expiration Date
                    </Text>
                </View> */}
                {/* <View style={Styles.cardsContainerHere}>
                    <TextInput
                        style={Styles.mydropDown}
                        placeholderTextColor="#AAB8C2"
                        numberOfLines={1}
                        placeholder="Date"
                    />

                    <View style={Styles.PriceView}>
                        <TextInput
                            style={Styles.searchInput}
                            placeholderTextColor="#AAB8C2"
                            numberOfLines={1}
                            placeholder="Time"
                        />
                    </View>
                </View> */}
                <View style={Styles.borderLine}></View>
                <Text style={Styles.feeTxts}>Fees</Text>
                <View style={Styles.bottomContainor}>
                    <View>
                        <Text style={Styles.leftTxt}>enefte fee</Text>
                        <Text style={Styles.leftTxt}>Customer Royality</Text>
                    </View>
                    <View>
                        <Text style={Styles.RightTxt}>2,50%</Text>
                        <Text style={Styles.RightTxt}>10,00%</Text>
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
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
        style={Styles.belowButton}
          activeOpacity={0.5}
          onPress={()=> navigation.navigate("UploadItemTwo")}
        >
     <Text style={Styles.buttonTextStyle}>Next</Text>
        </TouchableOpacity>
      </View>
                {/* <View>
                    <TouchableOpacity
                        style={Styles.belowButton}
                        activeOpacity={0.5}
                    >
                        <Text style={Styles.buttonTextStyle}>NEXT</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    );
}
const Styles = StyleSheet.create({
    mainBg: {
        height: '100%',
        // justifyContent: 'center',
        backgroundColor: '#1C212B',
        // alignContent: 'center',
    },
    innerMainBg: {
        padding: 10,
    },
    belowInputOne:{
        backgroundColor: '#253341',
        // width: wp('82%'),
        // height: hp('6%'),
        width: '58%',

        // marginTop: 30,
        flexDirection: 'row',
        borderRadius: 10,
        // justifyContent: ''
    },
    searchInputOne: {
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: 20,
        color: '#fff',
        paddingTop: 14,
        paddingBottom: 14,
    },
    headerCont: {
        flexDirection: 'row',
        marginTop: 20,
    },
    DropDownpicker: {
        backgroundColor: '#253341',
        width: 330,

        // borderWidth: 1,
        // borderRadius: 10
    },
    headerTxtCont: {
        // backgroundColor:"red",
        marginLeft: 95,
        paddingLeft: 20
    },
    headerTxt: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '400',
        // fontFamily: 'Roboto-Regular',
        fontFamily: 'Rationale-Regular',

    },
    belowInput: {
        backgroundColor: "#253341",
        // width:"90%",
        // height:"8%",
        // width: 330,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 20,
        // borderWidth: 1,
        borderRadius: 10,
        fontFamily: 'Rationale-Regular',

    },
    inputLabel: {
        color: "#AAB8C2",
        // margin:6
        // marginLeft:20,
        paddingLeft: 10,
        paddingTop: 10,
        fontFamily: 'Rationale-Regular',

    },

    // belowButton: {
    //     backgroundColor: "#1D9BF0",
    //     // width:wp("85%"),
    //     // height:hp("7%"),
    //     alignItems: "center",
    //     borderRadius: 10,
    //     marginLeft: 20,
    //     justifyContent: "center",
    //     marginRight: 35,
    //     marginTop: 50,
    //     marginBottom: 4,
    // },
    // buttonTextStyle: {
    //     color: "white",
    //     fontSize: 16,
    //     fontWeight: "600",
    // },
    cardsContainerHere: {
        flexDirection: 'row',
        marginTop: 20,
        // borderWidth:1,
        justifyContent: 'space-between',
    },

    mydropDown: {
        backgroundColor: '#253341',
        color: '#fff',
        // width: wp('25%'),
        borderColor: '#253341',
    },
    mydropDownOne: {
        backgroundColor: '#253341',
        color: '#fff',
        // width: wp('25%'),
        borderColor: '#253341',
    },
    PriceView: {
        // width: wp('54%'),
        backgroundColor: '#253341',
        borderColor: '#fff',
        // borderWidth:1,
        marginLeft: -220,
        borderRadius: 10,
    },
    searchInput: {
        fontSize: 18,
        marginLeft: 20,
        fontFamily: 'Rationale-Regular',

    },
    AmountCont: {
        flexDirection: 'row',
        marginTop: 10,
    },
    borderLine: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#253341',
    },
    // feeTxts: {
    //     marginTop: 20,
    //     fontSize: 16,
    //     color: '#fff',
    //     fontFamily: 'Rationale',
    // },
    numberTxts: {
        marginTop: 10,
        fontSize: 14,
        color: '#AAB8C2',
        // fontFamily: 'Rationale',
        fontFamily: 'Rationale-Regular',

    },
    leftTxt: {
        marginTop: 10,
        color: '#AAB8C2',
        fontSize: 15,
        fontFamily: 'Rationale-Regular',

    },
    bottomContainor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    RightTxt: {
        marginTop: 10,
        color: '#AAB8C2',
        fontSize: 12,
        textAlign: 'right',
        fontFamily: 'Rationale-Regular',

    },
    feeAmount: {
        fontSize: 24,
        color: '#F5F8FA',
        paddingLeft: 10,
        fontFamily: 'Rationale-Regular',

    },
    profileTextInput: {
        // borderWidth: 1,
        paddingLeft: 13,
        fontFamily: 'Rationale-Regular',

    },
    DropDownpickerOne:{
        backgroundColor: '#253341',
        width: 120,
    },
    AmountCont: {
        flexDirection: 'row',
        marginTop: 20,
        // borderWidth: 1,
        justifyContent: "space-between",
        alignItems: 'center'
      },
      feeTxts: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff',
        // fontFamily: 'Rationale',
        fontFamily: 'Rationale-Regular',

      },
      numberTxts: {
        marginTop: 10,
        fontSize: 14,
        color: '#AAB8C2',
        // fontFamily: 'Rationale',
        fontFamily: 'Rationale-Regular',

      },
      feeAmount: {
        fontSize: 24,
        color: '#F5F8FA',
        paddingLeft: 10,
        fontFamily: 'Rationale-Regular',

      },
      belowButton: {
        backgroundColor: '#1D9BF0',
        width: 330,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        // marginLeft: 35,
        // marginRight: 35,
        marginTop: 15,
        marginBottom: 4,
        justifyContent:'center',
        alignItems: "center"
      },
      buttonTextStyle: {
        color: 'white',
        // paddingVertical: 10,
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'Rationale-Regular',

      },
    
})