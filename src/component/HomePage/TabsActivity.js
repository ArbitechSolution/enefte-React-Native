import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
export default function TabsActivity() {
    

    const [selectedValue, setSelectedValue] = useState("All Event Type");
    const [selectedOneValue, setSelectedOneValue] = useState('All Chains')
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.TabsRankingsView}>
                <Picker
                    selectedValue={selectedValue}
                    style={Styles.DropDownpicker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="All Event Type" value="All Event Type" />
                    <Picker.Item label="All Event Type" value="All Event Type" />
                </Picker><Picker
                    selectedOneValue={selectedOneValue}
                    style={Styles.DropDownpickerone}
                    onValueChange={(itemValues, itemIndex) => setSelectedOneValue(itemValues)}
                >
                    <Picker.Item label="All Chains" value="All Chains" />
                    <Picker.Item label="All Chains" value="All Chains" />
                </Picker>
            </View>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <View style={[Styles.TabsRankingcard, { marginTop: 40 }]}>
                <View style={Styles.mainView}>
                    <View style={Styles.TabsActivityImage}>
                        <Image source={require('../../Assets/image7.png')} />
                        <View style={{ paddingLeft: 8 }}>
                            <Text style={Styles.TabsActivityImageText}>Genesis kakira</Text>
                            <Text style={Styles.TabsActivityImageTextOne}>Kakira #5233</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={Styles.TabsActivityminitext}>Sale</Text>
                        <View style={Styles.innerView}>
                            <Image source={require('../../Assets/image90.png')} />
                            <Text style={Styles.TabsActivityminitextOne}>140</Text>
                        </View>
                        <Text style={Styles.TabsActivityminitextTwo}>6 Minutes ago</Text>
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
                        <Text style={[Styles.CardsOneTextsecond, {color: '#1D9BF0'}]}>aleben92</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>To</Text>
                        <Text style={[Styles.CardsOneTextsecond, {color: '#1D9BF0'}]}>Wavez47</Text>
                    </View>
                </View>
            </View>

            <View style={[Styles.TabsRankingcard, { marginTop: 40 }]}>
                <View style={Styles.mainView}>
                    <View style={Styles.TabsActivityImage}>
                        <Image source={require('../../Assets/image17.png')} />
                        <View style={{ paddingLeft: 8 }}>
                            <Text style={Styles.TabsActivityImageText}>ZEED Run</Text>
                            <Text style={Styles.TabsActivityImageTextOne}>Frosty Glare</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={Styles.TabsActivityminitext}>Sale</Text>
                        <View style={Styles.innerView}>
                            <Image source={require('../../Assets/logos_ethereum.png')} />
                            <Text style={Styles.TabsActivityminitextOne}>0,0002</Text>
                        </View>
                        <Text style={Styles.TabsActivityminitextTwo}>15 Minutes ago</Text>
                    </View>
                </View>
                <View style={Styles.CardsOne}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>USD Price</Text>
                        <Text style={Styles.CardsOneTextgreen}>$10,82</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Quantity</Text>
                        <Text style={Styles.CardsOneTextsecond}>1</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>From</Text>
                        <Text style={[Styles.CardsOneTextsecond, {color: '#1D9BF0'}]}>mystuff</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>To</Text>
                        <Text style={[Styles.CardsOneTextsecond, {color: '#1D9BF0'}]}>patherm</Text>
                    </View>
                </View>
            </View>

            <View style={[Styles.TabsRankingcard, { marginTop: 40, marginBottom: 100 }]}>
                <View style={Styles.mainView}>
                    <View style={Styles.TabsActivityImage}>
                        <Image source={require('../../Assets/image17.png')} />
                        <View style={{ paddingLeft: 8 }}>
                            <Text style={Styles.TabsActivityImageText}>ZEED Run</Text>
                            <Text style={Styles.TabsActivityImageTextOne}>Frosty Glare</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={Styles.TabsActivityminitext}>Sale</Text>
                        <View style={Styles.innerView}>
                            <Image source={require('../../Assets/logos_ethereum.png')} />
                            <Text style={Styles.TabsActivityminitextOne}>0,0002</Text>
                        </View>
                        <Text style={Styles.TabsActivityminitextTwo}>15 Minutes ago</Text>
                    </View>
                </View>
                <View style={Styles.CardsOne}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>USD Price</Text>
                        <Text style={Styles.CardsOneTextgreen}>$10,82</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>Quantity</Text>
                        <Text style={Styles.CardsOneTextsecond}>1</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>From</Text>
                        <Text style={[Styles.CardsOneTextsecond, {color: '#1D9BF0'}]}>mystuff</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={Styles.CardsOneText}>To</Text>
                        <Text style={[Styles.CardsOneTextsecond, {color: '#1D9BF0'}]}>patherm</Text>
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
        borderRadius: 10
    },
    DropDownpickerone: {
        backgroundColor: '#253341',
        width: 155,
        borderRadius: 10
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
    TabsActivityImage: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    TabsActivityImageText: {
        color: "#AAB8C2",
        fontSize: 17,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    TabsActivityImageTextOne: {
        color: '#F5F8FA',
        fontSize: 19,
        fontWeight: '500',
        // fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    innerView:{
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        justifyContent: 'space-between',
        width: 80,
        paddingTop: 8

    },
    mainView:{
//   borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 15
    }, 
    TabsActivityminitext:{
        color: '#00CB6A',
        fontSize: 15,
        // fontWeight: '400',
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',

    },
    TabsActivityminitextOne:{
        color: '#F5F8FA',
        fontSize: 17,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    TabsActivityminitextTwo:{
        color: '#AAB8C2',
        fontSize: 17,
        paddingTop: 8,
        fontWeight: '500',
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
        fontSize: 17,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    CardsOneTextgreen: {
        color: '#F5F8FA',
        fontSize: 15,
        paddingTop: 8,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    CardsOneTextsecond: {
        paddingTop: 8,
        color: "#F5F8FA",
        fontSize: 15,
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    },
    cardsimagetext:{
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '500',
    fontFamily: 'Rationale-Regular',
    }
})