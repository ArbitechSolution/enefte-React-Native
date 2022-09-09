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

export default function SearchPage({navigation}) {
  return (
<View style={Styles.mainBg}>
    <View style={Styles.searchHeadContainer}>
        <Text style={Styles.searchHeadTxt}>
            Search
        </Text>
    
    </View>
    <View style={Styles.belowInput}>
  
    <Image style={Styles.searchIconImage} source={require("../../Assets/searchone.png")}/>
    <TextInput style={Styles.searchInput}  numberOfLines={1}  placeholder='Search Your Nft'  />
</View>
<View  style={Styles.catView}>
  <Text style={Styles.catText}>
    Categories
  </Text>
  <View style={Styles.imageSlider} >
    <ScrollView horizontal={true}>
    <TouchableOpacity 
    onPress={()=> navigation.navigate('ArtPage')}
    ><Image style={Styles.imageSliderOne} source={require("../../Assets/sliderImg.png")}/></TouchableOpacity>
    <Image style={Styles.imageSliderOne} source={require("../../Assets/sliderImg1.png")}/>
    <Image style={Styles.imageSliderOne} source={require("../../Assets/sliderImg.png")}/>
    <Image style={Styles.imageSliderOne} source={require("../../Assets/sliderImg1.png")}/>
    {/* <Image style={Styles.imageSliderOne} source={require("../../Assets/sliderImg.png")}/>
    <Image style={Styles.imageSliderOne} source={require("../../Assets/sliderImg.png")}/>
    <Image style={Styles.imageSliderOne} source={require("../../Assets/sliderImg.png")}/> */}
    </ScrollView>
  </View>
</View>
<View style={Styles.featuredCont}>
<Text style={Styles.featuredText}>
    Featured Collections
  </Text>
  <ScrollView vertical={true}>
  <View style={Styles.cardsContainor}>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>
      </View>
    </View>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadOne.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
  </View>
  <View style={Styles.cardsContainor}>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadTwo.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadThree.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
  </View>
  <View style={Styles.cardsContainor}>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadOne.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
  </View>
  <View style={Styles.cardsContainor}>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadTwo.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
  </View>
  <View style={Styles.cardsContainor}>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
    <View style={Styles.myCard}>
      <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")}/>
      <View style={Styles.headTxtContainer}>
      <Text style={Styles.headTxt}>Dour Darcels</Text>
      </View>
      <View style={Styles.bottomCont}>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Items
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          10K
        </Text>
        </View>
        <View style={Styles.innerContainor}>
        <Text style= {Styles.cardHeadTxt}>
          Owners
        </Text>
        <Text style ={Styles.cardNormalTxt}>
          4.93K
        </Text>
        </View>

      
      </View>
    </View>
  </View>
  </ScrollView>
</View>
</View>
  )
}
const Styles = StyleSheet.create({
    mainBg: {
      height: '100%',
      backgroundColor: '#1C212B',
    },
    searchHeadContainer:{
        marginLeft:20,
        marginTop:50,
    },
    searchHeadTxt:{
        fontSize:34,
        fontWeight:"400",
        color:"#ffffff"
    },
    belowInput:{
      backgroundColor:"#253341",
      width:"90%",
      height:"7%",
      margin:20,
      flexDirection:"row",
      borderRadius:10,
    },
    searchIconImage:{
      marginTop:15, 
      marginLeft:20
    },
    searchInput:{
      fontSize:22,
      alignSelf:"center",
      marginLeft:20
    },
    catView:{
      marginLeft:20,
      marginTop:10,
    },
    catText:{
      color:"#FFFFFF",
      fontSize:28,
      fontFamily:"Rationale"
    },
    featuredText:{
      color:"#FFFFFF",
      fontSize:28,
      fontFamily:"Rationale",
      marginLeft:20
    },
    imageSlider:{
      marginTop:5,
      flexDirection:"row"
    },
    imageSliderOne:{
      marginLeft:5
    },
    featuredCont:{
     
      marginTop:10,
    },
    cardsContainor:{
      flexDirection:"row",
      justifyContent:"space-around"
    },
    myCard:{
      height:170,
      backgroundColor:"#253341",
      width:155,
      marginTop:10,
      borderRadius:10
    },
    headerCardImg:{
      width:"100%"
    },
    headTxtContainer:{
      justifyContent:"center",
      alignItems:"center",
      // backgroundColor:"red"
    },
    headTxt:{
      color:"#F5F8FA",
      marginTop:5
    },
    bottomCont:{
      justifyContent:"space-between",
      flexDirection:"row",
      // borderWidth:1
      margin:5,
      // backgroundColor:"red"
    },
    innerContainor:{
      // borderWidth:1
    },
    cardHeadTxt:{
      color:"#AAB8C2",
      fontWeight:"400",
      padding:5,
      fontSize:16
    },
    cardNormalTxt:{
      padding:5,
      color:"#F5F8FA",
      fontWeight:"400",
      fontSize:22
    }
   
})



// import { StyleSheet, Text, View, ScrollView } from 'react-native'
// import React from 'react'

// export default function SearchPage() {
//   return (
//     <View style={Styles.mainBg}>
//       <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
//         <View Style={Styles.SearchPages}>
//           <Text Style={Styles.SearchPagesText}>Search</Text>
//         </View>

//       </ScrollView>
//     </View>
//   )
// }

// const Styles = StyleSheet.create({
//     mainBg: {
//         height: '100%',
//         backgroundColor: '#1C212B',
//         alignContent: 'center',
//       },
//       SearchPages:{
//         paddingTop: 30,
//         borderWidth: 2
//       },
//       SearchPagesText:{
//         fontSize:35
//       }
// })