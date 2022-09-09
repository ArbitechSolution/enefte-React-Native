import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign"
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from "react-native-vector-icons/Entypo"
import CollectionItemsBar from './CollectionItemsBar';
export default function CollectionItems({ navigation }) {
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.ProfilePageImage}>
                <Image source={require('../../Assets/CollectionBanner-Image.png')} />
                <View style={Styles.iconsCont}>
                    <TouchableOpacity onPress={() => navigation.navigate('NftItesmsDetails')}>
                        <View style={Styles.iconbox}>
                            <AntDesign name='left' size={25} color={'#F5F8FA'} />
                        </View>
                    </TouchableOpacity>
                    <View style={Styles.iconbox}>
                    <Entypo name='share' size={25} color={'#F5F8FA'} />
                        </View>
                </View>
                <View style={Styles.ProfilePageDownImage}>
                    <Image source={require('../../Assets/Profile-Verified22.png')} />
                    <View style={Styles.ProfilePageDownImageBox}>
                        <Fontisto name='world' size={25} />
                        <Fontisto name='instagram' size={25} />
                        <Fontisto name='twitter' size={25} />
                        <Fontisto name='discord' size={25} />
                    </View>
                </View>
            </View>
            <View>
                <Text style={Styles.CollectionItemsText}>Karafuru</Text>
                <Text style={Styles.CollectionItemsTextOne}>Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and enter the world of Karafuru by Museum of Toys.</Text>
            </View>

            <View style={Styles.CollectionItemsBox}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.CardsOneText}>Items</Text>
                    <Text style={Styles.CardsOneTextgreen}>5,6K</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.CardsOneText}>Owners</Text>
                    <Text style={Styles.CardsOneTextgreen}>3,7K</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.CardsOneText}>Floor Price</Text>
                    <View style={Styles.CollectionItemsMiniBox}>
                        <Image source={require('../../Assets/logos_ethereum.png')} />
                        <Text style={[Styles.CardsOneTextsecond]}>2,4</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.CardsOneText}>Volume Trade</Text>
                    <View style={Styles.CollectionItemsMiniBox}>
                        <Image source={require('../../Assets/logos_ethereum.png')} />
                        <Text style={[Styles.CardsOneTextsecond]}>36,3K</Text>
                    </View>
                    {/* <Text style={[Styles.CardsOneTextsecond]}><Image source={require('../../Assets/logos_ethereum.png')} />36,3K</Text> */}
                </View>
            </View>
            <View>
                <CollectionItemsBar />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    mainBg: {

        height: "100%",

        backgroundColor: "#15202B",
        alignContent: "center"
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
        // borderWidth: 1,
        width: 155,
        // height: 45,
        // borderColor: "#AAB8C2",
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    ProfilePageDownImageBoxText: {
        color: '#F5F8FA',
        fontWeight: '500'
    },
    CollectionItemsText: {
        fontSize: 24,
        fontFamily: 'Rationale',
        color: "#FFFFFF",
        fontWeight: '800',
        paddingLeft: 20,
    },
    CollectionItemsTextOne: {
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 8.5,
        paddingTop: 10,
        color: "#AAB8C2"
    },
    CollectionItemsBox: {
        backgroundColor: '#253341',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 15
    },
    CardsOneText: {
        color: '#AAB8C2',
        fontSize: 15
    },
    CardsOneTextgreen: {
        color: '#F5F8FA',
        fontSize: 13,
        paddingTop: 8
    },
    CardsOneTextsecond: {

        color: "#F5F8FA",
        fontSize: 13,
    },
    cardsimagetext: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    CollectionItemsMiniBox: {
        flexDirection: 'row',
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 7,
        width: 60

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