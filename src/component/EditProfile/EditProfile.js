import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from 'react-native';
  import AntDesign from "react-native-vector-icons/AntDesign"
export default function EditProfile({navigation}) {
  return (
<View style={Styles.mainBg}>
<View style={Styles.headerCont}>
    <View  style={Styles.backIconImg}>
        <View>
          <AntDesign name='left'
          size={30} color={"white"}/>
        {/* <Image source={require("../../Assets/forward.png")}/> */}
        </View>
        <View>
        <TouchableOpacity
        style={Styles.belowButton}
          activeOpacity={0.5}
          onPress={()=> navigation.navigate('NftItems')}
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
    <TextInput label="Username" numberOfLines={1}  placeholder='Kevin' style={[Styles.profileTextInput]} />
</View>
<View style={Styles.belowInput}>
    <Text style={Styles.inputLabel}>
        Email
    </Text>
    <TextInput label="Username" numberOfLines={1}  placeholder='Luke36erockedmai.com' style={[Styles.profileTextInput]} />
</View>
<View style={Styles.belowInput}>
    <Text style={Styles.inputLabel}>
        Bio
    </Text>
    <TextInput label="Username" numberOfLines={4}  placeholder='Sell AnyThing' style={[Styles.profileTextInput]} />
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
    <TextInput label="Username" numberOfLines={1}  placeholder='hhtps://twitter.com/kevin' style={[Styles.profileTextInput]} />
</View>
<View style={Styles.belowInput}>
    <Text style={Styles.inputLabel}>
        Instagram
    </Text>
    <TextInput label="Username" numberOfLines={1}    placeholder='hhtps://www.instagram.com/kevin/?hl-en' style={[Styles.profileTextInput]} />
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
    },
    backIconImg:{
        margin:30,
        flexDirection:'row',
        // alignSelf:"flex-end",
        justifyContent:"space-between"
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
        fontSize: 16,
        fontWeight: '600',
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
        fontSize: 15,
        marginLeft:20,
        marginTop:10
      },
      headLinktxt:{
        color:"#FFFFFF",
        fontWeight:"400",
        fontSize:16,
        // marginLeft:25,
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
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#253341',
        paddingLeft: 10,
        backgroundColor: '#253341',
        color:"#F5F8FA",
        paddingLeft:20
        // marginLeft:20,

    }
})