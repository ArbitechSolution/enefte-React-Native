import React,{useEffect,useState} from 'react'
import axios from 'axios';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    AsyncStorage
  } from 'react-native';
  import AntDesign from "react-native-vector-icons/AntDesign"
export default function EditProfile({navigation}) {
  const [userName, setUserName]= useState('Kevin');
  const [userBio, setUsebio]= useState('Sell Anything');
  const [userEmail, setUserEmail] = useState('Luke36erockedmai.com')
  const [userTwitter, setUserTwitter] = useState('twitter.com')
  const [userInsta, setUserInsta] = useState('insta.com');
  const [locatStorageData, setLocalStorageData] = useState("")





const _saveChanges =async ()=>{
  try{
    console.log("into Save Changes Function");
    const response = await axios.put(
      "https://6d97-2400-adc5-437-1000-89a1-215d-19f0-a13b.in.ngrok.io/api/user/updateProfile",
      {
        // proFileImg: "Dummy",
        email:userEmail,
        fullName: userName,
        proFileImg: "Dummy",
        bio:userBio,
        twiter:userTwitter,
        instagram:userInsta
      }
    );
    await AsyncStorage.setItem(
      'EMAIL',
      userEmail
    );
    console.log("changes Saved Successfully",response)
    alert("Changes saved successfully! You will be directed to next Screen")
    navigation.navigate("NftItems")
    // navigation.navigate("NftItems")
  }catch(e){
    console.log("Error while saving profile changes",e );
  }

}

  const _retrieveData =async ()=>{
    try{

        const localData= await AsyncStorage.getItem("EMAIL");
        setLocalStorageData(localData)
        console.log("localData",localData)
        if(localData?.length>2){
            // setButton(false)
            let apiResponse = await 
            axios.get(`https://6d97-2400-adc5-437-1000-89a1-215d-19f0-a13b.in.ngrok.io/api/user/getProfile?email=${localData}`)
             let apiData = apiResponse.data
             console.log("DataFromAPI", apiData[0].email);
                setUserEmail(apiData[0].email);
                setUsebio(apiData[0].bio);
                setUserName(apiData[0].fullName)
                if(apiData[0].instagram){
                  setUserInsta(apiData[0].instagram)
                }
                if(apiData[0].twiter){
                  setUserTwitter(apiData[0].twiter)
                }
            //  let name= apiData

        }else{
            // setButton(true)
        }
    }catch(e){
        console.log("error while retieving data",e)
    }
}
    


  setInterval(()=>{
    // _retrieveData()
    },2000)
   useEffect(()=>{
    _retrieveData()
    return _retrieveData
    // dispatch(getUserProfileData())
   },[locatStorageData])
  return (
<View style={Styles.mainBg}>
<View style={Styles.headerCont}>
    <View  style={Styles.backIconImg}>
      <TouchableOpacity onPress={()=>navigation.navigate("AppBars")}>
      <View>
          <AntDesign name='left'
          size={25} color={"white"}/>
        {/* <Image source={require("../../Assets/forward.png")}/> */}
        </View>
      </TouchableOpacity>

        
        <View>
        <TouchableOpacity
        style={Styles.belowButton}
          activeOpacity={0.5}
          // onPress={()=>_saveChanges()}
          onPress={()=>_saveChanges()}
        >
     <Text style={Styles.buttonTextStyle}>Save Changes  </Text>
        </TouchableOpacity>
      </View>
    </View>
</View>
<View>
<Image source={require("../../Assets/banner-photo.jpeg")}/>
</View>
<View style={Styles.editphotoPrfile}>
    <Image source={require("../../Assets/VectorCircle.png")}/>
</View>
<ScrollView>
<View style={Styles.belowInput}>
    <Text style={Styles.inputLabel}>
        UserName
    </Text>
    <TextInput label="Username" onChangeText={e=>setUserName(e)} defaultValue={userName} numberOfLines={1}  placeholder={"aas"} style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}/>
</View>
<View style={Styles.belowInput}>
    <Text style={Styles.inputLabel}>
        Email
    </Text>
    <TextInput label="Username" numberOfLines={1} onChangeText={e=>setUserEmail(e)} defaultValue={userEmail}  placeholder={userEmail} style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}/>
</View>
<View style={Styles.belowInput}>
    <Text style={Styles.inputLabel}>
        Bio
    </Text>
    <TextInput label="Username" numberOfLines={4} defaultValue={userBio} onChangeText={e=>setUsebio(e)} placeholder={userBio} style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"} />
</View>
<View style={Styles.headLinktxtContanor}>
  <Text style={Styles.headLinktxt}>
    Links
  </Text>
</View>
<View style={Styles.belowInput}>
    <Text style={Styles.inputLabel}>
        Twitter
    </Text>
    <TextInput label="Username" numberOfLines={1} onChangeText={e=>setUserTwitter(e)} defaultValue={userTwitter}  placeholder='hhtps://twitter.com/kevin' style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}/>
</View>
<View style={Styles.belowInput}>
    <Text style={Styles.inputLabel}>
        Instagram
    </Text>
    <TextInput label="Username" numberOfLines={1} onChangeText={e=>setUserInsta(e)} defaultValue={userInsta}   placeholder='hhtps://www.instagram.com/kevin/?hl-en' style={[Styles.profileTextInput]} placeholderTextColor={"#F5F8FA"}/>
</View>
</ScrollView>
</View>
  )
}
const Styles = StyleSheet.create({
    mainBg: {
      height: '100%',
      backgroundColor: '#1C212B',
    },
    headerCont:{
        height:"11%",
        width:"100%",
        // backgroundColor:"red",
        // borderWidth: 1
    },
    backIconImg:{
        margin:30,
        flexDirection:'row',
        // alignSelf:"flex-end",
        justifyContent:"space-between",
        // borderWidth: 1
    },
    belowButton: {
        backgroundColor: '#1D9BF0',
        width: 120,
        height: 50,
        height: 40,
        justifyContent:"center",
        alignItems: 'center',
        borderRadius: 10,
        marginTop:-5
      },
      buttonTextStyle: {
        color: 'white',
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: '600',
    fontFamily: 'Rationale-Regular',

      },
      editphotoPrfile:{
        marginLeft:20,
        marginTop:-60
      },
      belowInput:{
        backgroundColor:"#253341",
        width:"90%",
        height:"8%",
        margin:20,
        borderRadius:10
      },
      inputLabel:{
        color:"#AAB8C2",
        // margin:6
        fontSize: 18,
        marginLeft:20,
        marginTop:10,
    fontFamily: 'Rationale-Regular',
      },
      headLinktxt:{
        color:"#FFFFFF",
        fontWeight:"400",
        fontSize:20,
        // marginLeft:25,
    fontFamily: 'Rationale-Regular',

        marginTop:10
      },
      headLinktxtContanor:{
        // color:"#FFFFFF",
        // fontWeight:"400",
        // fontSize:16,
        marginLeft:25,
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

        // marginLeft:20,

    }
})