import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
// import AntDesign from "react-native-vector-icons/AntDesign"
// import { ScrollView } from 'react-native-gesture-handler';
export default function BidDetails({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("Date");
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.headerContainor}>
                <View style={Styles.imgContainor}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CollectionItems")}
                    >
                        <AntDesign name='left'
                            size={25} color={"white"} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.imgContainorLogo}>
                    <Text style={Styles.SetupProfileText}>Bid Details</Text>
                </View>
            </View>
            <ScrollView>
                <View>
                    <View style={Styles.BidDetailsBox}>
                        <View>
                            <Image source={require('../../Assets/myNftPreview.png')} style={{ width: 150, height: 180, borderRadius: 10 }} />
                        </View>
                        <View style={Styles.BidDetailsminiBox}>
                            <Text style={Styles.BidDetailsminiBoxText}>Mosu #1930</Text>
                            <Text style={Styles.BidDetailsminiBoxTextOne}>Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../Assets/Profile-Verified.png')} />
                                <Text style={Styles.BidDetailsminiBoxTextTwo}>Karafuru</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <View style={Styles.BidDetailsMainBox}>
                            <AntDesign name='minuscircle' size={25} color={'#AAB8C2'} />
                            <View style={Styles.BidDetailsMainBoxView}>
                                <Image source={require('../../Assets/logos_ethereum.png')} />
                                <Text style={Styles.BidDetailsMainBoxViewText}>2,75</Text>
                            </View>
                            <AntDesign name='pluscircle' size={25} color={'#AAB8C2'} />
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={Styles.inputdowntext}>
                        You must bid at least <Text style={{color:'#F5F8FA'}}>2,75 ETH</Text>
                        </Text>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={{ color: '#FFFFFF' }}>Set expiration date and time</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>

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
                                <Picker.Item label="Date" value="Date" />
                                <Picker.Item label="Date" value="Date" />
                            </Picker>
                        </View>
                        <View style={Styles.belowInput}>
                            <TextInput
                            placeholderTextColor={"#AAB8C2"}
                                style={Styles.searchInput}
                                numberOfLines={1}
                                placeholder="Time"
                            />
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={Styles.belowButton}
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate("BidFinished")}
                        >
                            <Text style={Styles.buttonTextStyle}>Submit </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={Styles.BidHistoryText}>
                            Bid History
                        </Text>
                    </View>
                    <View>
                        <View style={[Styles.TabsRankingcard]}>
                            <View style={Styles.mainView}>
                                <View style={Styles.TabsActivityImage}>
                                    <Image source={require('../../Assets/biddetailsImage.png')} style={{ width: 60, height: 60 }} />
                                    <View style={{ paddingLeft: 8 }}>
                                        <Text style={Styles.TabsActivityImageText}>Karafuru</Text>
                                        <Text style={Styles.TabsActivityImageTextOne}>Uzachi #3330</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    {/* <Text style={Styles.TabsActivityminitext}>Sale</Text> */}
                                    <View style={Styles.innerView}>
                                        <Image source={require('../../Assets/logos_ethereum.png')} />
                                        <Text style={Styles.TabsActivityminitextOne}>140</Text>
                                    </View>
                                    <Text style={Styles.TabsActivityminitextTwo}>15 Minutes ago</Text>
                                </View>
                            </View>
                            <View style={Styles.CardsOne}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={Styles.CardsOneText}>USD Price</Text>
                                    <Text style={Styles.CardsOneTextgreen}>$153,16</Text>
                                </View>
                                {/* <View style={{ alignItems: 'center' }}>
                                    <Text style={Styles.CardsOneText}>Quantity</Text>
                                    <Text style={Styles.CardsOneTextsecond}>1</Text>
                                </View> */}
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={Styles.CardsOneText}>Floor Diff.</Text>
                                    <Text style={[Styles.CardsOneTextsecond, { color: '#138E10' }]}>17% below</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={Styles.CardsOneText}>Expiration</Text>
                                    <Text style={[Styles.CardsOneTextsecond, { color: '#138E10' }]}>6 Months</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
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
    headerContainor: {
        flexDirection: 'row',
        backgroundColor: 'Red',
    },
    imgContainor: {
        marginTop: 35,
    marginLeft: 20,
    },
    imgContainorLogo: {


        marginTop: 30,
        marginLeft: 55,
        justifyContent:"center"
    },
    SetupProfileText: {
        fontSize: 32,
        color: '#fff',
        // fontFamily: "Rationale"
        fontFamily: 'Rationale-Regular',


    },
    BidDetailsBox: {
        // borderWidth: 1,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 40,
        // justifyContent: ''    
        // width: 90
        // flex: 1
    },
    BidDetailsminiBox: {
        // borderWidth: 1,
        paddingLeft: 15,
        marginRight: 135,
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    BidDetailsminiBoxText: {
        color: '#F5F8FA',
        fontSize: 24,
        fontWeight: '600',
        paddingTop: 10,
        fontFamily: 'Rationale-Regular',


    },
    BidDetailsminiBoxTextOne: {
        color: '#AAB8C2',
        fontSize: 16,
        fontFamily: 'Rationale-Regular',

    },
    BidDetailsminiBoxTextTwo: {
        color: '#F5F8FA',
        fontSize: 18,
        marginLeft: 10,
        fontFamily: 'Rationale-Regular',

    },
    BidDetailsMainBox: {
        backgroundColor: '#253341',
        width: '90%',
        // borderWidth: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 30
    },
    BidDetailsMainBoxView: {
        flexDirection: 'row',
        // borderWidth: 1,
        width: '20%',
        justifyContent: 'space-between'
    },
    BidDetailsMainBoxViewText: {
        fontSize: 26,
        color: '#F5F8FA',
        fontFamily: 'Rationale-Regular',

    },
    DropDownpicker: {
        backgroundColor: '#253341',
        width: 120,
        fontFamily: 'Rationale-Regular',
        color: '#fff',


        // borderWidth: 1,
        // borderRadius: 10
    },
    searchInput: {
        fontSize: 22,
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
        width: '50%',

        // marginTop: 30,
        flexDirection: 'row',
        borderRadius: 10,
        fontFamily: 'Rationale-Regular',

        // justifyContent: ''
    },
    belowButton: {
        backgroundColor: '#138E10',
        width: 320,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        // marginLeft: 35,
        // marginRight: 35,
        marginTop: 20,
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonTextStyle: {
        color: 'white',
        // paddingVertical: 10,
        fontSize: 28,
        fontWeight: '600',
        fontFamily: 'Rationale-Regular',

    },
    BidHistoryText: {
        color: "#FFFFFF",
        // fontFamily: 'Rationale',
        fontFamily: 'Rationale-Regular',

        fontSize: 26,
        fontWeight: '600'
    },
    TabsRankingcard: {
        backgroundColor: '#253341',
        borderRadius: 10,
        margin: 10,
        marginTop: 10,
    },
    TabsActivityImage: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    TabsActivityImageText: {
        color: "#AAB8C2",
        fontSize: 18,
        fontFamily: 'Rationale-Regular',

    },
    TabsActivityImageTextOne: {
        color: '#F5F8FA',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Rationale-Regular',

    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        justifyContent: 'space-between',
        width: 40,
        paddingTop: 8

    },
    mainView: {
        //   borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    TabsActivityminitext: {
        color: '#00CB6A',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'Rationale-Regular',


    },
    TabsActivityminitextOne: {
        color: '#F5F8FA',
        fontSize: 18,
        fontFamily: 'Rationale-Regular',

    },
    TabsActivityminitextTwo: {
        color: '#AAB8C2',
        fontSize: 18,
        paddingTop: 8,
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
        fontSize: 18,
        fontFamily: 'Rationale-Regular',

    },
    CardsOneTextgreen: {
        color: '#F5F8FA',
        fontSize: 16,
        paddingTop: 8,
        fontFamily: 'Rationale-Regular',

    },
    CardsOneTextsecond: {
        paddingTop: 8,
        color: "#F5F8FA",
        fontSize: 16,
        fontFamily: 'Rationale-Regular',

    },
    cardsimagetext: {
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Rationale-Regular',

    }
    ,
    inputdowntext:{
        fontFamily: 'Rationale-Regular',
        fontSize: 20,
        color: '#AAB8C2',
        marginTop: 10
    }


})