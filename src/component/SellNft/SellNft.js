import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
export default function SellNft({ navigation }) {
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.headerCont}>
                <View style={Styles.backIconImg}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('UpdateItem')}>
                        <View>
                            <AntDesign name='left'
                                size={25} color={"white"} />
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.IconsContainor}>
                        <View style={Styles.iconbox}>
                            <FontAwesome name='filter' size={25} color={'#F5F8FA'} />
                        </View>

                        <View style={Styles.iconbox}>
                            <Entypo name='share' size={25} color={'#F5F8FA'} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={Styles.mainImgCont}>
                <Image style={Styles.mainImg} source={require("../../Assets/sellNftMain.png")} />
            </View>
            <View style={Styles.InvitTxtCont}>
                <Text style={Styles.commonTxt}>
                    The Invitaion
                </Text>

            </View>
            <View style={Styles.HeadTxtCont}>
                <Text style={Styles.headTxt}>
                    Invitation-My Story
                </Text>
            </View>
            <View style={Styles.belowImageContainor}>
                <View style={Styles.innerCOnt}>
                    <Image source={require("../../Assets/ellipse.png")} />
                    <View style={Styles.textContainor}>
                        <Text style={Styles.textone}>Created By</Text>
                        <Text style={Styles.texttwo}>Naufal Abshar</Text>

                    </View>
                </View>
                <View style={Styles.innerCOnt}>
                    <Image style={{ marginLeft: 20 }} source={require("../../Assets/ellipse2.png")} />
                    <View style={Styles.textContainor}>
                        <Text style={Styles.textone}>Owned By</Text>
                        <Text style={Styles.texttwo}>You</Text>

                    </View>
                </View>
            </View>
            <View style={Styles.InvitTxtCont}>
                <Text style={Styles.commonTxt}>
                    Painting #3, "THE INVITATION" By Naufal Abshar. What exactly is your story, ser?
                </Text>

            </View>
            <View style={Styles.bottomCont}>
                <View style={Styles.footerbg}>
                    <View style={Styles.buttonOne}>
                        <Text style={Styles.editTxt}>
                            Edit
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('SellNftDetails')}>
                        <View style={Styles.buttonTwo}>
                            <Text style={Styles.sellitemTxt}>
                                Sell Items
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
const Styles = StyleSheet.create({
    mainBg: {
        height: '100%',
        backgroundColor: '#1C212B',
    },
    headerCont: {
        // height: "11%",
        // width: "100%",
        // borderWidth: 1
        // backgroundColor:"red",
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIconImg: {
        marginTop: 20,
        flexDirection: 'row',
        // alignSelf:"flex-end",
        justifyContent: "space-between",
        alignItems: 'center',
        width: '95%',
        // borderWidth: 1

    },
    belowButton: {
        flexDirection: "row",
        // backgroundColor: '#1D9BF0',
        width: 120,
        height: 50,
        height: 40,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        marginTop: -5,
        paddingLeft: 20
    },
    buttonTextStyle: {
        color: 'white',
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    IconsContainor: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: 100
    },
    filterImg: {
        marginLeft: 20,
        width: "40%",
        height: "100%"
    },
    mainImgCont: {
        marginTop: 20,
        // justifyContent:"center",
        alignItems: "center",
        // height:"60%"
    },
    mainImg: {
        // height:"60%"
    },
    InvitTxtCont: {
        marginLeft: 20,
        marginTop: 10

    },
    commonTxt: {
        fontSize: 18,
        color: '#F5F8FA',
        fontFamily: 'Rationale-Regular',


    },
    HeadTxtCont: {
        marginTop: 10,
        marginLeft: 20
    },
    headTxt: {
        color: "#F5F8FA",
        fontSize: 36,
        fontWeight: "400",
        fontFamily: 'Rationale-Regular',

    },
    belowImageContainor: {
        flexDirection: "row",
        // marginLeft: 25,
        justifyContent: 'space-around',
        marginTop: 15
    },
    innerCOnt: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textContainor: {
        marginLeft: 10

    },
    textone: {
        color: "#AAB8C2",
        fontFamily: 'Rationale-Regular',
        fontSize: 16
    },
    texttwo: {
        color: "#F5F8FA",
        fontFamily: 'Rationale-Regular',
        fontSize: 16
    },
    bottomCont: {
        // height:"10%",
        // marginTop:50
        justifyContent: "flex-end",
        flex: 1
    },
    footerbg: {
        backgroundColor: "#253341",
        height: 80,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    buttonOne: {
        height: 50,
        borderColor: "#1D9BF0",
        borderRadius: 10,
        borderWidth: 1,
        width: 140,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTwo: {
        height: 50,
        backgroundColor: "#1D9BF0",
        borderRadius: 10,
        // border:"##1D9BF0",
        // borderWidth:1,
        width: 140,
        justifyContent: "center",
        alignItems: "center"
    },
    editTxt: {
        color: "#1D9BF0",
        fontFamily: 'Rationale-Regular',
        fontSize: 20
    },
    sellitemTxt: {
        color: "#F5F8FA",
        fontFamily: 'Rationale-Regular',
        fontSize: 20
    },
    iconbox: {
        backgroundColor: "#253341",
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }

})