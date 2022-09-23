
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Form, Button,AsyncStorage } from 'react-native'
import React, { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import ImagePicker from "react-native-image-picker"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { useForm } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';
import {getUserProfileData} from '../Redux/actions/actions';
// import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
// import { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
export default function SetupProfile({ navigation }) {

    // const dispatch = useDispatch();
    const [singleFile, setSingleFile] = useState("");
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Bio: '',
            Email: '',
            UserName: '',
            image: ''
        }
    });
    const [userName, setUserName]= useState('Kevin');
    const [userBio, setUsebio]= useState('Sell Anything');
    const [userEmail, setUserEmail] = useState('Luke36erockedmai.com')
    const [button, setButton]= useState(true)
  const [locatStorageData, setLocalStorageData] = useState("")

    // const onSubmit = data => console.log(data);
    const onSubmit =async(data)=>{
        try{
            const Localdata= await AsyncStorage.getItem("EMAIL");
            console.log("Data loaded from the async Storage",Localdata)
            if (Localdata){
                console.log("Profile Already set")
            }else{
                console.log("Data Entered by User", singleFile.assets)
                const myBio = data.Bio;
                const myEmail = data.Email;
                const myUserName = data.UserName;
                // console.log("Image Uploaded by User", singleFile[0].name)
                console.log("myBio Uploaded by User", myBio)
                console.log("myEmail Uploaded by User", myEmail)
                console.log("myUserName Uploaded by User", myUserName)
                const response = await axios.post(
                    "https://6d97-2400-adc5-437-1000-89a1-215d-19f0-a13b.in.ngrok.io/api/user/createProfile",
                    {
                      proFileImg: "Dummy",
                      fullName: myUserName,
                      email:myEmail,
                      bio:myBio
                    }
                  );
                  

                  console.log("Data addded Successfully",response);
                  let resmessage = response.data.message;
                  console.log("Message", resmessage)
                  if (resmessage=="Email Already Exists"){
                    alert("Email Already Exists! You will be directed to next screen")
                    await AsyncStorage.setItem(
                        'EMAIL',
                        data.Email
                      );
                    navigation.navigate("welcome");
                  }else{
                    alert("Profile Setup successfully! You will be directed to next Screen")
                    navigation.navigate("welcome")
                  }
            }
           
        }catch(e){
            console.log("Error While Creating Profile", e);
        }
    }
    // const _storeData =async()=>{

    //     try {
    //         await AsyncStorage.setItem(
    //           'EMAIL',
    //           'zahidriaz125@gmail.com'
    //         );
    //             console.log("Data Saved Successfullly")
    //       } catch (error) {
    //         console.log("Error while saving data", error)
    //     }
    // }
    const _retrieveData =async ()=>{
        try{

            const localData= await AsyncStorage.getItem("EMAIL")
            setLocalStorageData(localData)
            if(localData?.length>2){
                let current="zahidriaz125@gmail.com"
                setButton(false)
                let apiResponse = await 
                axios.get(`https://6d97-2400-adc5-437-1000-89a1-215d-19f0-a13b.in.ngrok.io/api/user/getProfile?email=${localData}`)
                 let apiData = apiResponse.data
                 console.log("DataFromAPI", apiData[0]);
                    setUserEmail(apiData[0].email);
                    setUsebio(apiData[0].bio);
                    setUserName(apiData[0].fullName)
                //  let name= apiData

            }else{
                setButton(true)
            }
            
        }catch(e){
            console.log("error while retieving data",e)
        }
    }
        
    
    const [photos, setPhotos] = useState(null)
    const selectFile = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
            // DocumentPicker.types.allFiles
          });
          console.log('res : ' + JSON.stringify(res));
          setSingleFile(res);
        } catch (err) {
          setSingleFile(null);
          if (DocumentPicker.isCancel(err)) {
            // If user canceled the document selection
            alert('Canceled');
          } else {
            // For Unknown Error
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
    }
    const profileSubitted =()=>{
        alert("Profile Already Submitted! You will be directed to next screen")
        navigation.navigate("welcome")

    }
    const hendleChooseImage = () => {
        const option = {
            noData: true
        };
        launchImageLibrary(option, response => {
            // console.log("response", response);
            // let getImage = 
            console.log("response",response.didCancel );
            if(response.didCancel == true){
                console.log("User Cancelled to Upload the Image");
            }else{
                setSingleFile(response)
                console.log("Inside it",response.assets[0].uri)
                let getImage = response.assets[0].uri;
                console.log("getImage", getImage);
                setPhotos(getImage)
            }
            // if (response.assets[0].uri ) {
            //     console.log("Inside it",response.assets[0].uri)
            //     let getImage = response.assets[0].uri;
            //     console.log("getImage", getImage);
            //     setPhotos(getImage)
            // }
        })
    }
    const addProfileData =async()=>{
        try{
            const response = await axios.post(
                "https://6d97-2400-adc5-437-1000-89a1-215d-19f0-a13b.in.ngrok.io/api/user/createProfile",
                {
                  proFileImg: photos,
                  fullName: "UserName",
                  email: "Email",
                  bio:"Bio"
                }
              );
        }catch(e){
                console.log("Error while Getting api response",e)
        }
    }
    setInterval(()=>{
    // _retrieveData()
    },2000)
   useEffect(()=>{
    _retrieveData()
    // dispatch(getUserProfileData())
   },[locatStorageData])
    return (
        <View style={Styles.mainBg}>
            <View style={Styles.headerContainor}>
                <View style={Styles.imgContainor}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ConnectWithWallet")}
                    >
                        <AntDesign name='left'
                            size={25} color={"white"} />
                        {/* <Image source={require('../../Assets/forward.png')} /> */}
                    </TouchableOpacity>
                </View>
                <View style={Styles.imgContainorLogo}>
                    <Text style={Styles.SetupProfileText}>Setup Profile</Text>
                </View>
            </View>
            <TouchableOpacity >

            <View style={Styles.SetupProfileView}>
                <Text style={Styles.SetupProfiletext}>Upload Photo Profile</Text>
            </View>
            </TouchableOpacity>
            <View style={Styles.profileSetup}>
            {/* {singleFile != null ? (
        <Text style={Styles.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
        </Text>
      ) : null} */}
                <Image source={{ uri:singleFile[0]?.uri }} style={{ width: 120, height: 120, borderRadius: 100 }} />
                {/* <View style={{}}>
                    {photos

                        && (
                            <Controller
                                control={control}
                                rules={{
                                    required: true,

                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput  title="file" source={{ uri: photos }}/>
                                    <Image source={{ uri: photos }} style={{ width: 130, height: 130, borderRadius: 100 }} 
                                    onBlur={onBlur}
                            onChangeText={onChange}
                            value={photos}/>

                                )}
                                name="image"
                            />
                            
                        )}
                        {errors.image && <Text style={{ color: 'red' }}>Image is mandatory</Text>}
                </View> */}
                <TouchableOpacity
                //  onPress={() => selectFile()}
                 >
                    <View style={Styles.UploadProfile}>
                        <Text style={Styles.uploadBtnTxt}>Upload Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={Styles.belowInput}>
                <Text style={Styles.inputLabel}>
                    UserName
                </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,

                    }}
                    render={({ field: { onChange, onBlur, UserName } }) => (

                        <TextInput numberOfLines={1} placeholder={userName} style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={UserName}
                        />
                    )}
                    name="UserName"
                />
                {errors.UserName && <Text style={{ color: 'red' }}>UserName is mandatory</Text>}
            </View>
            <View style={Styles.belowInput}>
                <Text style={Styles.inputLabel}>
                    Email
                </Text>
                <Controller
                    control={control}
                    rules={{
                        required: "Email is mandatory",
                        match: '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput numberOfLines={1} placeholder={userEmail} style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />

                    )}
                    name="Email"
                />
                {errors.Email && <Text style={{ color: 'red' }}>Email is mandatory</Text>}
            </View>

            <View style={Styles.belowInput}>
                <Text style={Styles.inputLabel}>
                    Bio
                </Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput numberOfLines={4}  placeholder={userBio} style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />

                    )}
                    name="Bio"
                />
                {errors.Bio && <Text style={{ color: 'red' }}>Bio is mandatory</Text>}
            </View>
            {
                button? <TouchableOpacity
                // title="Submit" onPress={handleSubmit(onSubmit)}
            onPress={() => navigation.navigate("welcome")} type="submit"
            >
                <View style={Styles.ButtonContinue}>
                    <Text style={Styles.ButtonContinueText}>Submit</Text>
                </View>
            </TouchableOpacity>: <TouchableOpacity
                onPress={()=>profileSubitted()}
                // onPress={()=>addProfileData()}
            // onPress={() => navigation.navigate("EditProfile")} type="submit"
            >
                <View style={Styles.ButtonContinue}>
                    <Text style={Styles.ButtonContinueText}>Profile Submitted</Text>
                </View>
            </TouchableOpacity>
            }
           
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
    textStyle:{
    color:"#fff"
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
        backgroundColor: '#138E10',
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
    belowInput: {
        backgroundColor: "#253341",
        width: "90%",
        height: "8%",
        margin: 20,
        // paddingLeft: 20,
        borderRadius: 10
    },
    inputLabel: {
        color: "#AAB8C2",
        fontSize: 18,
        fontFamily: 'Rationale-Regular',
        marginLeft: 15,
        marginTop: 10
    },
    profileTextInput: {
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#253341',
        paddingLeft: 10,
        backgroundColor: '#253341',
        color: "#F5F8FA",
        paddingLeft: 20,
        fontFamily: 'Rationale-Regular',
    },
    uploadBtnTxt: {
        color: "#fff",
        fontSize: 20,
        fontFamily: 'Rationale-Regular',

    }
})