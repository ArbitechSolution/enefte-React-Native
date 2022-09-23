import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Collected from "../../component/HomePage/ProfilePageAppBar/Collected"
import Created from "../../component/HomePage/ProfilePageAppBar/Created";
import Activity from "../../component/HomePage/ProfilePageAppBar/Activity";
import OfferReceived from "../../component/HomePage/ProfilePageAppBar/OffersReceived"
import Favorited from "../../component/HomePage/ProfilePageAppBar/Favorited";
import OfferMade from "../../component/HomePage/ProfilePageAppBar/OffersMade"
// import { ScrollView } from 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();
export default function ProfileAppBar() {
  return (
    <View style={Styles.mainBg}>
      {/* <ScrollView vertical={true}> */}
      {/* <View> */}
         <Tab.Navigator
      initialRouteName="TabsRankings"
      
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#AAB8C2",
          // backgroundColor:'red',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '500', paddingTop: 20,},

        tabBarStyle: {
            backgroundColor: '#1C212B',
            
            // tabBarActiveTintColor:"white",
            // tabBarInactiveTintColor:"red"
            // borderBottomWidth: 1,
            // borderColor: "#253341"
          },
          tabBarIndicatorStyle:{
            backgroundColor: "#138E10",
          }
        
      }}
  
    >
      <Tab.Screen
        name="Collected"
        component={Collected}
        options={{ tabBarLabel: 'Collected' }}
        
      />
      <Tab.Screen
        name="Created"
        component={Created}
        options={{ tabBarLabel: 'Created' }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{ tabBarLabel: 'Activity' }}
      />
       <Tab.Screen
        name="Favorited"
        component={Favorited}
        options={{ tabBarLabel: 'Favorited' }}
      />
      <Tab.Screen

        name="OfferMade"
        component={OfferMade}
        options={{ tabBarLabel: 'Offer Made' }}
      />
      <Tab.Screen
        name="OfferReceived"
        component={OfferReceived}
        options={{ tabBarLabel: 'Offer Received' }}
      />
     
      
    </Tab.Navigator>
    {/* </View> */}
    {/* </ScrollView> */}
     </View>
   
  )
}

const Styles = StyleSheet.create({
    mainBg: {
        
        height: '100%',
        
        backgroundColor: '#1C212B',
        alignContent: 'center',
      },
})