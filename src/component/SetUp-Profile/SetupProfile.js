import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-element-textinput';
// import { TextInput } from "@react-native-material/core";
export default function SetupProfile({ navigation }) {
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.headerContainor}>
                <View style={Styles.imgContainor}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Startscreen")}
                    >
                        <Image source={require('../../Assets/forward.png')} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.imgContainorLogo}>
                    <Text style={Styles.SetupProfileText}>Setup Profile</Text>
                </View>
            </View>
            <View style={Styles.SetupProfileView}>
                <Text style={Styles.SetupProfiletext}>Upload Photo Profile</Text>
            </View>
            <View style={Styles.profileSetup}>
                <View >
                    <Image source={require('../../Assets/Ellipse14.png')} />
                </View>
                <TouchableOpacity>
                    <View style={Styles.UploadProfile}>
                        <Text>Upload Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>

            </View>
            <View style={Styles.inputView}>
                <Text style={Styles.InputText}>
                    Username
                </Text>
                <TextInput label="Username" placeholder='Your Name' style={[Styles.profileTextInput]} />
            </View>
            <View style={Styles.inputView}>
                <Text style={Styles.InputText}>
                    Email
                </Text>
                <TextInput label="Username" placeholder='@gmail.com' style={[Styles.profileTextInput]} />
            </View>
            <View style={Styles.inputView}>
                <Text style={Styles.InputText}>
                    Bio
                </Text>
                <TextInput label="Username" placeholder='Bio' style={[Styles.profileTextInput]} numberOfLines={3} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("homepage")}>
                <View style={Styles.ButtonContinue}>
                    <Text style={Styles.ButtonContinueText}>Submit</Text>
                </View>
            </TouchableOpacity>
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
        marginTop: 30,
        marginLeft: 40,
    },
    imgContainorLogo: {
        marginTop: 25,
        marginLeft: 55,
    },
    SetupProfileText: {
        fontSize: 24,
        color: '#fff',
        fontFamily: "Rationale"
    },
    SetupProfileView: {
        marginTop: 35
    },
    SetupProfiletext: {
        marginLeft: 30,
        marginRight: 20,
        fontSize: 22,
        color: '#F5F8FA'
    },
    profileSetup: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        // flex: 1,
        // borderWidth: 1,
        // padding: 20,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    UploadProfile: {
        borderRadius: 10,
        width: 145,
        height: 60,
        borderColor: "white",
        marginLeft: 25,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputView: {
        // backgroundColor: 'rgba(0,0,0,0)',
        marginLeft: 20,
        marginRight: 20,
        // position: 'absolute', 
        // top: 0,
        // left: 5,
        // right: 5
    },
    profileTextInput: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#253341',
        paddingLeft: 10,
        backgroundColor: '#253341'
    },
    InputText: {
        marginLeft: 5,
        marginTop: 15,
        marginBottom: 5,
        fontSize: 18,
    },
    ButtonContinue: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#1D9BF0',
        borderRadius: 10,
        padding: 15,
        marginTop: 50

    },
    ButtonContinueText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#F5F8FA',
        fontWeight: '600',
    }

})