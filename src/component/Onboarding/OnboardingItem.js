import { View, Text, Image, useWindowDimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={[Styles.mainBg]}>
            <View style={[Styles.imgContainer, { width }]}>
                <Image source={item.image} style={[]} />
            </View>
            <View style={Styles.bottomContainer}>
                {/* <Text style={[Styles.headText, {fontFamily:"Rationale-Regular",}]}>{item.title}</Text> */}
                <Text style={[Styles.headText, {fontFamily:"Rationale-Regular",}]}>{item.title}</Text>
                <Text style={Styles.belowText}>{item.description}</Text>
                
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        marginTop: 60,
        alignItems: "center",

    },
    bottomContainer: {
        backgroundColor: "#253341",
        marginTop: 50,
        height: "45%",
        alignItems: "center",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    headText: {
        color: "white",
        fontSize: 34,
        fontWeight: '400',
        marginTop: 25,
        textAlign: 'center',
        fontFamily:"Rationale",
        // borderWidth: 1,
        width: 300

    },
    belowText: {
        color: "white",
        fontSize: 18,
        textAlign: 'center',
        // fontFamily: 'Rationale',
        lineHeight: 48.2,
        fontFamily:"Rationale-Regular",

    },

})
export default OnboardingItem