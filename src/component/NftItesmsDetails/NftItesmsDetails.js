import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { ScrollView } from 'react-native-gesture-handler';
// import DropDownPicker from 'react-native-dropdown-picker';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import Dropdown from '../Uploaditems/DropDown';
export default function NftItesmsDetails({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("About Collection");
    const [selectedValueOne, setSelectedValueOne] = useState("Properties");
    const [selectedValueTwo, setSelectedValueTwo] = useState("Details");
    const [selectedValueThree, setSelectedValueThree] = useState("Price History");
    return (
        <View style={Styles.mainBg}>
            {/* <View style={Styles.headerCont}> */}
            <View style={Styles.backIconImg}>
                <View>
                    <AntDesign name='left'
                        size={30} color={"white"} />
                </View>
                <View>
                    <Image source={require("../../Assets/chotakalu.png")} />
                </View>
                <View style={Styles.IconsContainor}>
                    <View style={Styles.iconbox}>
                        <FontAwesome name='filter' size={25} color={'#F5F8FA'} />
                    </View>

                    <View style={Styles.iconbox}>
                        <Entypo name='share' size={25} color={'#F5F8FA'} />
                    </View>
                    {/* <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            style={Styles.filterImg}
                            source={require('../../Assets/filter.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            style={Styles.filterImg}
                            source={require('../../Assets/share.png')}
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
            {/* </View> */}
            <ScrollView>
                <View style={Styles.uppermain}>
                    <View style={Styles.upperContainer}>
                        <View>
                            <Text style={Styles.topTxt}>
                                Favourites
                            </Text>
                            <Text style={Styles.BelowTxt}>
                                337
                            </Text>
                        </View>
                        <View>
                            <Text style={Styles.topTxt}>
                                Owners
                            </Text>
                            <Text style={Styles.BelowTxt}>
                                1
                            </Text>
                        </View>
                        <View>
                            <Text style={Styles.topTxt}>
                                Edition
                            </Text>
                            <Text style={Styles.BelowTxt}>
                                1
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.dropCont}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 0 }}>

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
                                <Picker.Item label="About Collection" value="About Collection" />
                                <Picker.Item label="Date" value="Date" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>

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
                                <Picker.Item label="Properties" value="Properties" />
                                <Picker.Item label="Date" value="Date" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>

                        <View style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#253341', overflow: 'hidden'
                        }}>
                            <Picker
                                selectedValue={selectedValueTwo}
                                style={Styles.DropDownpicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueTwo(itemValue)}
                            >
                                <Picker.Item label="Details" value="Details" />
                                <Picker.Item label="Date" value="Date" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>

                        <View style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#253341', overflow: 'hidden'
                        }}>
                            <Picker
                                selectedValue={selectedValueThree}
                                style={Styles.DropDownpicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueThree(itemValue)}
                            >
                                <Picker.Item label="Price History" value="Price History" />
                                <Picker.Item label="Date" value="Date" />
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={Styles.belowHeading}>
                    <Text style={Styles.belowHeadtxt}>
                        More from this collection
                    </Text>
                </View>
                <View>
                    <View style={[Styles.card,]}>
                        <View style={Styles.ActivitCard}>
                            <TouchableOpacity onPress={() => navigation.navigate('NFTPreview')}>
                                <Image source={require('../../Assets/FavoritedImage.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
                            </TouchableOpacity>
                            <View style={Styles.ActivitCardDown}>
                                <Text>Azuki</Text>
                                <View style={Styles.ActivitCardDownOne}>
                                    <Ionicons name='heart-outline' size={20} />
                                    <Text>320</Text>
                                </View>
                            </View>
                            <View style={Styles.FavoritedBox}>
                                <Text style={Styles.FavoritedText}>
                                    Azuki #4092
                                </Text>
                            </View>
                        </View>
                        <View style={Styles.ActivitCard}>
                            <TouchableOpacity onPress={() => navigation.navigate('CollectionItems')}>
                                <Image source={require('../../Assets/FavoritedImageOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
                            </TouchableOpacity>
                            <View style={Styles.ActivitCardDown}>
                                <Text>The Invitation</Text>
                                <View style={Styles.ActivitCardDownOne}>
                                    <Ionicons name='heart-outline' size={20} />
                                    <Text>192</Text>
                                </View>
                            </View>
                            <View style={Styles.FavoritedBox}>
                                <Text style={Styles.FavoritedText}>
                                    Young Lex
                                </Text>
                            </View>
                        </View>
                        <View style={[Styles.ActivitCard,]}>
                            <Image source={require('../../Assets/FavoritedImage.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
                            <View style={Styles.ActivitCardDown}>
                                <Text>Azuki</Text>
                                <View style={Styles.ActivitCardDownOne}>
                                    <Ionicons name='heart-outline' size={20} />
                                    <Text>192</Text>
                                </View>
                            </View>
                            <View style={Styles.FavoritedBox}>
                                <Text style={Styles.FavoritedText}>
                                    Azuki #4092
                                </Text>
                            </View>
                        </View>
                        <View style={[Styles.ActivitCard,]}>
                            <Image source={require('../../Assets/FavoritedImageOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
                            <View style={Styles.ActivitCardDown}>
                                <Text>The Invitation</Text>
                                <View style={Styles.ActivitCardDownOne}>
                                    <Ionicons name='heart-outline' size={20} />
                                    <Text>192</Text>
                                </View>
                            </View>
                            <View style={Styles.FavoritedBox}>
                                <Text style={Styles.FavoritedText}>
                                    Young Lex
                                </Text>
                            </View>
                        </View>
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
        height: '11%',
        width: '100%',
        justifyContent: "space-between",
        // alignItems:"center",
        // backgroundColor:"red",
    },
    backIconImg: {
        margin: 20,
        flexDirection: 'row',
        // alignSelf:"flex-end",
        // borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },


    IconsContainor: {
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'space-around',
    width: 100

        // marginLeft:40
        // paddingLeft:40
    },

    uppermain: {
        // justifyContent:'center',
        alignItems: "center",
        // backgroundColor:"red",
        height: "13%",
    },
    iconbox: {
        backgroundColor: "#253341",
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    DropDownpicker: {
        backgroundColor: '#253341',
        width: 320,

        // borderWidth: 1,
        // borderRadius: 10
    },
    upperContainer: {
        marginTop: 30,
        backgroundColor: "#253341",
        height: "70%",
        width: 320,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    topTxt: {
        color: "#AAB8C2",
        fontSize: 12,
        fontWeight: "400",
    },
    BelowTxt: {
        color: "#F5F8FA",
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10,
        textAlign: "center"
    },
    dropCont: {
        // backgroundColor:"red",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    belowHeadtxt: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: "400",
        fontFamily: "Rationale",
        marginLeft: 25,
        marginTop: 20
    },
    card: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: 100
    },
    ActivitCard: {
        // height:170,
        backgroundColor: "#253341",
        width: 165,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    ActivitCardDown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 155,
        // borderWidth: 1,
        paddingTop: 15,
        paddingBottom: 5
    },
    ActivitCardDownOne: {
        width: 55,
        // borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    FavoritedText: {
        justifyContent: 'flex-start',
        textAlign: 'left',
        fontSize: 15,
        fontWeight: '500',
        color: '#F5F8FA',
        paddingBottom: 10
    },
    FavoritedBox: {
        // borderWidth: 1,
        width: 155,
        justifyContent: 'flex-start'
    }
});