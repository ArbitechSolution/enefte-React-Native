import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Items({navigation}) {
    return (
        <View style={Styles.mainBg}>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 400 }}>
                    <View style={[Styles.card,]}>
                        <View style={Styles.ActivitCard}>
                            <TouchableOpacity onPress={()=>navigation.navigate('BidDetails')}>

                            <Image source={require('../../../Assets/FavoritedImage.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
                            </TouchableOpacity>
                            <View style={Styles.ActivitCardDown}>
                                <Text style={Styles.FavoritedText}>Azuki</Text>
                                <View style={Styles.ActivitCardDownOne}>
                                    <Ionicons style={Styles.FavoritedText} name='heart-outline' size={20} />
                                    <Text style={Styles.FavoritedText}>320</Text>
                                </View>
                            </View>
                            <View style={Styles.FavoritedBox}>
                                <Text style={Styles.FavoritedText}>
                                    Azuki #4092
                                </Text>
                            </View>
                            <View style={Styles.ItemsBoxMain}>
                                <View style={Styles.ItemsBox}>
                                    <Image source={require('../../../Assets/logos_ethereum.png')} />
                                    <Text style={Styles.ItemsBoxText}>2,75 ETH</Text>
                                </View>
                            </View>
                        </View>
                        <View style={Styles.ActivitCard}>
                            <Image source={require('../../../Assets/FavoritedImageOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
                            <View style={Styles.ActivitCardDown}>
                                <Text style={Styles.FavoritedText}>The Invitation</Text>
                                <View style={Styles.ActivitCardDownOne}>
                                    <Ionicons style={Styles.FavoritedText} name='heart-outline' size={20} />
                                    <Text style={Styles.FavoritedText}>192</Text>
                                </View>
                            </View>
                            <View style={Styles.FavoritedBox}>
                                <Text style={Styles.FavoritedText}>
                                    Young Lex
                                </Text>
                            </View>
                            <View style={Styles.ItemsBoxMain}>
                                <View style={Styles.ItemsBox}>
                                    <Image source={require('../../../Assets/logos_ethereum.png')} />
                                    <Text style={Styles.ItemsBoxText}>2,00 ETH</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[Styles.ActivitCard,]}>
                            <Image source={require('../../../Assets/FavoritedImage.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
                            <View style={Styles.ActivitCardDown}>
                                <Text style={Styles.FavoritedText}>Azuki</Text>
                                <View style={Styles.ActivitCardDownOne}>
                                    <Ionicons style={Styles.FavoritedText}  name='heart-outline' size={20} />
                                    <Text style={Styles.FavoritedText} >192</Text>
                                </View>
                            </View>
                            <View style={Styles.FavoritedBox}>
                                <Text  style={Styles.FavoritedText}>
                                    Azuki #4092
                                </Text>
                            </View>
                            <View style={Styles.ItemsBoxMain}>
                                <View style={Styles.ItemsBox}>
                                    <Image source={require('../../../Assets/logos_ethereum.png')} />
                                    <Text style={Styles.ItemsBoxText}>2,75 ETH</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[Styles.ActivitCard,]}>
                            <Image source={require('../../../Assets/FavoritedImageOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
                            <View style={Styles.ActivitCardDown}>
                                <Text style={Styles.FavoritedText}>The Invitation</Text>
                                <View style={Styles.ActivitCardDownOne}>
                                    <Ionicons style={Styles.FavoritedText} name='heart-outline' size={20} />
                                    <Text style={Styles.FavoritedText}>192</Text>
                                </View>
                            </View>
                            <View style={Styles.FavoritedBox}>
                                <Text style={Styles.FavoritedText}>
                                    Young Lex
                                </Text>
                            </View>
                            <View style={Styles.ItemsBoxMain}>
                                <View style={Styles.ItemsBox}>
                                    <Image source={require('../../../Assets/logos_ethereum.png')} />
                                    <Text style={Styles.ItemsBoxText}>2,75 ETH</Text>
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

        height: '100%',

        backgroundColor: '#1C212B',
        alignContent: 'center',
    },
    TabsRankingsView: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    DropDownpicker: {
        backgroundColor: '#253341',
        width: 188,
        borderRadius: 10
    },
    ActivityButton: {
        backgroundColor: '#1D9BF0',
        borderRadius: 10,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ActivityButtonText: {
        color: '#F5F8FA',
        fontSize: 15
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
        paddingBottom: 5,
    fontFamily: 'Rationale-Regular',

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
        fontSize: 18,
        fontWeight: '500',
        color: '#F5F8FA',
        paddingBottom: 10,
    fontFamily: 'Rationale-Regular',

    },
    FavoritedBox: {
        // borderWidth: 1,
        width: 155,
        justifyContent: 'flex-start'
    },
    ItemsBox: {
        borderWidth: 2,
        borderColor: '#1D9BF0',
        width: 105,
        height: 42,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    ItemsBoxMain:{
        // borderWidth: 1,
        width: 155,
        marginBottom: 10
    },
    ItemsBoxText:{
        color: "#F5F8FA",
    fontFamily: 'Rationale-Regular',
    fontSize:20

    }
})