import React, { useState } from 'react'
import { StyleSheet, View, Text, Image,ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
export default function TabsRankings() {
    
    const [selectedValue, setSelectedValue] = useState("Categories");
    const [selectedOneValue, setSelectedOneValue] = useState('All Chains')
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.TabsRankingsView}>
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
                    <Picker.Item label="Categories" value="Categories" />
                    <Picker.Item label="All Categories" value="All Categories" />
                </Picker>
                </View>
                <View style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#253341', overflow: 'hidden'
                        }}>
                <Picker
                    selectedOneValue={selectedOneValue}
                    style={Styles.DropDownpickerone}
                    onValueChange={(itemValues, itemIndex) => setSelectedOneValue(itemValues)}
                >
                    <Picker.Item label="All Chains" value="All Chains" />
                    <Picker.Item label="All Chains" value="All Chains" />
                </Picker>
                </View>
            </View>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <View style={[Styles.TabsRankingcard, {marginTop: 40}]}>
                <View style={Styles.cards}>
                    <Text style={Styles.cardsText}>01</Text>
                    <View style={Styles.cardsimagetext}>
                    <Image source={require('../../Assets/Profile-Verified1.png')} style={{ width: 50, height: 50 }} />
                    <Text style={[Styles.cardsTextOne, { paddingLeft: 10 }]}>Bored Ape Yacht Club</Text>
                    </View>
                    
                    <View style={Styles.miniCard}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../Assets/logos_ethereum.png')} />
                            <Text style={[Styles.cardsText, { paddingLeft: 10 }]}>
                                12339,71
                            </Text>
                        </View>
                        <Text style={Styles.cardsTextTwo}>202,24%</Text>
                    </View>
                </View>
                <View style={Styles.CardsOne}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>24h%</Text>
                        <Text style={Styles.CardsOneTextgreen}>11,3%</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Floor Price</Text>
                        <Text style={Styles.CardsOneTextsecond}>96,68</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Owners</Text>
                        <Text style={Styles.CardsOneTextsecond}>6,38K</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Items</Text>
                        <Text style={Styles.CardsOneTextsecond}>10K</Text>
                    </View>
                </View>
            </View>

            <View style={Styles.TabsRankingcard}>
                <View style={Styles.cards}>
                    <Text style={Styles.cardsText}>02</Text>
                    <View style={Styles.cardsimagetext}>
                    <Image source={require('../../Assets/Profile-Verified2.png')} style={{ width: 50, height: 50 }} />
                    <Text style={[Styles.cardsTextOne, { paddingLeft: 10 }]}>Cryptopunks</Text>
                    </View>
                    <View style={Styles.miniCard}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../Assets/logos_ethereum.png')} />
                            <Text style={[Styles.cardsText, { paddingLeft: 10 }]}>
                            11325,08
                            </Text>
                        </View>
                        <Text style={Styles.cardsTextTwo}>204,10%</Text>
                    </View>
                </View>
                <View style={Styles.CardsOne}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>24h%</Text>
                        <Text style={[Styles.CardsOneTextgreen, {color: '#F26666'}]}>-76,51%</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Floor Price</Text>
                        <Text style={Styles.CardsOneTextsecond}>96,68</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Owners</Text>
                        <Text style={Styles.CardsOneTextsecond}>6,38K</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Items</Text>
                        <Text style={Styles.CardsOneTextsecond}>10K</Text>
                    </View>
                </View>
            </View>

            <View style={[Styles.TabsRankingcard, {marginBottom: 100}]}>
                <View style={Styles.cards}>
                    <Text style={Styles.cardsText}>03</Text>
                    <View style={Styles.cardsimagetext}>
                    <Image source={require('../../Assets/Profile-Verified3.png')} style={{ width: 50, height: 50 }} />
                    <Text style={[Styles.cardsTextOne, { paddingLeft: 10 }]}>Meebits</Text>
                    </View>
                    <View style={Styles.miniCard}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../Assets/logos_ethereum.png')} />
                            <Text style={[Styles.cardsText, { paddingLeft: 10 }]}>
                                12339,71
                            </Text>
                        </View>
                        <Text style={Styles.cardsTextTwo}>202,24%</Text>
                    </View>
                </View>
                <View style={Styles.CardsOne}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>24h%</Text>
                        <Text style={[Styles.CardsOneTextgreen, {color: '#F26666'}]}>-60,76%</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Floor Price</Text>
                        <Text style={Styles.CardsOneTextsecond}>96,68</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Owners</Text>
                        <Text style={Styles.CardsOneTextsecond}>6,38K</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Items</Text>
                        <Text style={Styles.CardsOneTextsecond}>10K</Text>
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
    DropDownpicker: {
        backgroundColor: '#253341',
        width: 178,
        borderRadius: 10,
        color:"#fff"

    },
    DropDownpickerone: {
        backgroundColor: '#253341',
        width: 155,
        borderRadius: 10,
        color:"#fff"
    },
    TabsRankingsView: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    TabsRankingcard: {
        backgroundColor: '#253341',
        borderRadius: 10,
        margin: 8,
        marginTop: 10,
    },
    cards: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 30
    },
    cardsText: {
        color: '#F5F8FA',
        fontSize: 22,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    cardsTextOne: {
        color: '#F5F8FA',
        fontSize: 18,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    miniCard: {
        // borderWidth: 1,
        // justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    cardsTextTwo: {
        color: '#00CB6A',
        paddingTop: 10

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
        fontSize: 22,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    CardsOneTextgreen: {
        color: '#00CB6A',
        fontSize: 20,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
        paddingTop: 8
    },
    CardsOneTextsecond: {
        paddingTop: 8,
        color: "#F5F8FA",
        fontSize: 20,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    cardsimagetext:{
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '500',
        fontSize:18,
    fontFamily: 'Rationale-Regular',
    }
})