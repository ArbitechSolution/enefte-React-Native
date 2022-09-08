import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'

export default function OffersMade() {
    return (
        <View style={Styles.mainBg}>
            <ScrollView>
                <View style={{marginBottom: 420}}>
            <View style={[Styles.TabsRankingcard]}>
                <View style={Styles.mainView}>
                    <View style={Styles.TabsActivityImage}>
                        <Image source={require('../../../Assets/imageOfferMade.png')} />
                        <View style={{ paddingLeft: 8 }}>
                            {/* <Text style={Styles.TabsActivityImageText}>Genesis kakira</Text> */}
                            <Text style={Styles.TabsActivityImageTextOne}>Mosu #1930</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        {/* <Text style={Styles.TabsActivityminitext}>Sale</Text> */}
                        <View style={Styles.innerView}>
                            <Image source={require('../../../Assets/logos_ethereum.png')} />
                            <Text style={Styles.TabsActivityminitextOne}>2,75</Text>
                        </View>
                        <Text style={Styles.TabsActivityminitextTwo}>1 minutes ago</Text>
                    </View>
                </View>
                <View style={Styles.CardsOne}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>USD Price</Text>
                        <Text style={Styles.CardsOneTextgreen}>$153,16</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Floor Diff.</Text>
                        <Text style={Styles.CardsOneTextsecond}>40%</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>From</Text>
                        <Text style={[Styles.CardsOneTextsecond, { color: '#1D9BF0' }]}>You</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Expiration</Text>
                        <Text style={[Styles.CardsOneTextsecond, {}]}>3 months</Text>
                    </View>
                </View>
            </View>

            <View style={[Styles.TabsRankingcard, { marginTop: 40 }]}>
                <View style={Styles.mainView}>
                    <View style={Styles.TabsActivityImage}>
                        <Image source={require('../../../Assets/imageOfferMade.png')} />
                        <View style={{ paddingLeft: 8 }}>
                            {/* <Text style={Styles.TabsActivityImageText}>Genesis kakira</Text> */}
                            <Text style={Styles.TabsActivityImageTextOne}>Mosu #1930</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        {/* <Text style={Styles.TabsActivityminitext}>Sale</Text> */}
                        <View style={Styles.innerView}>
                            <Image source={require('../../../Assets/logos_ethereum.png')} />
                            <Text style={Styles.TabsActivityminitextOne}>2,75</Text>
                        </View>
                        <Text style={Styles.TabsActivityminitextTwo}>1 minutes ago</Text>
                    </View>
                </View>
                <View style={Styles.CardsOne}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>USD Price</Text>
                        <Text style={Styles.CardsOneTextgreen}>$153,16</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Floor Diff.</Text>
                        <Text style={Styles.CardsOneTextsecond}>40%</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>From</Text>
                        <Text style={[Styles.CardsOneTextsecond, { color: '#1D9BF0' }]}>You</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Expiration</Text>
                        <Text style={[Styles.CardsOneTextsecond, {}]}>3 months</Text>
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
        fontSize: 15,
    },
    TabsActivityImageTextOne: {
        color: '#F5F8FA',
        fontSize: 17,
        fontWeight: '500'
    },
    innerView: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        justifyContent: 'space-between',
        width: 60,
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
        fontSize: 15,
    },
    TabsActivityminitextTwo: {
        color: '#AAB8C2',
        fontSize: 15,
        paddingTop: 8
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
        fontSize: 15
    },
    CardsOneTextgreen: {
        color: '#F5F8FA',
        fontSize: 13,
        paddingTop: 8
    },
    CardsOneTextsecond: {
        paddingTop: 8,
        color: "#F5F8FA",
        fontSize: 13,
    },
    cardsimagetext: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})