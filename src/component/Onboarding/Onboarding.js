import React, {useState,useRef} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Image, FlatList, Animated } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import Slides from '../../../Slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
// import Swiper from 'react-native-swiper'
export default function Onboardings({navigation} ) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollx = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null)
  // const viewAbleItemsChange = useRef(({viewAbleItems})=>{
  //   setCurrentIndex(viewAbleItems[0].index)
  // }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={Styles.mainBg} > 
      <View style={[{flex: 3},Styles.bottomContainer] }>
    <FlatList data={Slides} renderItem={({item})=> <OnboardingItem item={item}/>}
    horizontal
    showsHorizontalScrollIndicator
    pagingEnabled
    bounces={false}
    keyExtractor={(item)=> item.id}
    onScroll = {Animated.event([{nativeEvent: {contentOffset: {x: scrollx}}}], {
      useNativeDriver: false
    })}
    scrollEventThrottle = {32}
    // onViewableItemsChanged = {viewAbleItemsChange}
    viewabilityConfig= {viewConfig}
    ref={slidesRef}
    />
    <Paginator data={Slides} scrollX={scrollx}/>

    <TouchableOpacity
    onPress={()=>navigation.navigate("Startscreen")}
        style={Styles.belowButton}
          activeOpacity={0.5}
        >
     <Text style={Styles.buttonTextStyle}>NEXT</Text>
        </TouchableOpacity>
    </View>
       </View>
  )
}
const Styles = StyleSheet.create({
    mainBg:{
     
      height:"100%", 
      
      backgroundColor:"#15202B",
      alignContent:"center"
    },bottomContainer: {
      backgroundColor: "#253341",
      // marginTop: 50,
      height: "45%",
      alignItems: "center",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25
  },
     belowButton:{
       backgroundColor: "#1D9BF0",
       width:300,
       height:50,
      height: 40,
      alignItems: "center",
       borderRadius: 10,
     marginLeft: 35,
      marginRight: 35,
      // marginTop: 80,
      marginBottom: 48,
    },
    buttonTextStyle: {
       color: "white",
       paddingVertical: 10,
     fontSize: 16,
     fontWeight: "600",
   },
  })
