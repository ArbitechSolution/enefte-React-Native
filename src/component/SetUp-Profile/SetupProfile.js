import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
// import { TextInput } from 'react-native-element-textinput';
// import { TextInput } from "@react-native-material/core";
export default function SetupProfile({ navigation }) {
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.headerContainor}>
                <View style={Styles.imgContainor}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SetupProfile")}
                    >
                         <AntDesign name='left'
          size={30} color={"white"}/>
                        {/* <Image source={require('../../Assets/forward.png')} /> */}
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
                        <Text style={Styles.uploadBtnTxt}>Upload Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>

            </View>
            <View style={Styles.belowInput}>
                <Text style={Styles.inputLabel}>
                    UserName
                </Text>
                <TextInput label="Username" numberOfLines={1} placeholder='Kevin' style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"} />
            </View>
            <View style={Styles.belowInput}>
                <Text style={Styles.inputLabel}>
                    Email
                </Text>
                <TextInput label="Username" numberOfLines={1} placeholder='Luke36erockedmai.com' style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}/>
            </View>
            <View style={Styles.belowInput}>
                <Text style={Styles.inputLabel}>
                    Bio
                </Text>
                <TextInput label="Username" numberOfLines={4} placeholder='Sell AnyThing' style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}/>
            </View>
            {/* <View style={Styles.inputView}>
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
            </View> */}
            <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
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
        // backgroundColor: 'Red',
    },
    imgContainor: {
        marginTop: 30,
        marginLeft: 20,
    },
    imgContainorLogo: {
        marginTop: 28,
        marginLeft: 65,
    },
    SetupProfileText: {
        fontSize: 28,
        color: '#fff',
    fontFamily: 'Rationale-Regular',
    // fontFamily: "Rationale",
    },
    SetupProfileView: {
        marginTop: 35
    },
    SetupProfiletext: {
        marginLeft: 30,
        marginRight: 20,
        fontSize: 26,
        color: '#F5F8FA',
    fontFamily: 'Rationale-Regular',

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
        alignItems: "center",
        color: "#F5F8FA"
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
    // profileTextInput: {
    //     fontSize: 18,
    //     borderWidth: 1,
    //     borderRadius: 10,
    //     borderColor: '#253341',
    //     paddingLeft: 10,
    //     backgroundColor: '#253341'
    // },
    InputText: {
        marginLeft: 5,
        marginTop: 15,
        marginBottom: 5,
        fontSize: 20,
    fontFamily: 'Rationale-Regular',

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
        fontSize: 24,
        color: '#F5F8FA',
        fontWeight: '600',
    fontFamily: 'Rationale-Regular',

    },
    belowInput:{
        backgroundColor:"#253341",
        width:"90%",
        height:"8%",
        margin:20,
        // paddingLeft: 20,
        borderRadius:10
      },
      inputLabel:{
        color:"#AAB8C2",
        fontSize: 18,
        fontFamily: 'Rationale-Regular',
        marginLeft:15,
        marginTop:10
      },
      profileTextInput: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#253341',
        paddingLeft: 10,
        backgroundColor: '#253341',
        color:"#F5F8FA",
        paddingLeft:20,
    fontFamily: 'Rationale-Regular',
      },
      uploadBtnTxt:{
        color:"#fff",
        fontSize:20,
    fontFamily: 'Rationale-Regular',

      }
})