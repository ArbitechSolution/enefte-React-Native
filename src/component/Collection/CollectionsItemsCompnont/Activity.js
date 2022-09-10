import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'

export default function Activity() {
    return (
        <View style={Styles.mainBg}>
            <ScrollView >
                <View style={{marginBottom: 500}}>
                    <View style={[Styles.TabsRankingcard]}>
                        <View style={Styles.mainView}>
                            <View style={Styles.TabsActivityImage}>
                                <Image source={require('../../../Assets/activity.png')} />
                                <View style={{ paddingLeft: 8 }}>
                                    <Text style={Styles.TabsActivityImageText}>Karafuru</Text>
                                    <Text style={Styles.TabsActivityImageTextOne}>Uzachi #3330</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={Styles.TabsActivityminitext}>Sale</Text>
                                <View style={Styles.innerView}>
                                    <Image source={require('../../../Assets/logos_ethereum.png')} />
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
                            <View style={{ alignItems: 'center' }}>
                                <Text style={Styles.CardsOneText}>Quantity</Text>
                                <Text style={Styles.CardsOneTextsecond}>1</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={Styles.CardsOneText}>From</Text>
                                <Text style={[Styles.CardsOneTextsecond, { color: '#1D9BF0' }]}>aleben92</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={Styles.CardsOneText}>To</Text>
                                <Text style={[Styles.CardsOneTextsecond, { color: '#1D9BF0' }]}>Wavez47</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[Styles.TabsRankingcard]}>
                        <View style={Styles.mainView}>
                            <View style={Styles.TabsActivityImage}>
                                <Image source={require('../../../Assets/activityone.png')} />
                                <View style={{ paddingLeft: 8 }}>
                                    <Text style={Styles.TabsActivityImageText}>Karafuru</Text>
                                    <Text style={Styles.TabsActivityImageTextOne}>Uzachi #3330</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={Styles.TabsActivityminitext}>Sale</Text>
                                <View style={Styles.innerView}>
                                    <Image source={require('../../../Assets/logos_ethereum.png')} />
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
                            <View style={{ alignItems: 'center' }}>
                                <Text style={Styles.CardsOneText}>Quantity</Text>
                                <Text style={Styles.CardsOneTextsecond}>1</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={Styles.CardsOneText}>From</Text>
                                <Text style={[Styles.CardsOneTextsecond, { color: '#1D9BF0' }]}>aleben92</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={Styles.CardsOneText}>To</Text>
                                <Text style={[Styles.CardsOneTextsecond, { color: '#1D9BF0' }]}>Wavez47</Text>
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

        height: '100%',

        backgroundColor: '#1C212B',
        alignContent: 'center',
    },
    TabsRankingcard: {
        backgroundColor: '#253341',
        borderRadius: 10,
        margin: 8,
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
        fontSize: 19,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',

    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        justifyContent: 'space-between',
        width: 80,
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
        fontSize: 13,
        fontWeight: '400',

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
})