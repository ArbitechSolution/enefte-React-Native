import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Items from './CollectionsItemsCompnont/Items';
import Activity from './CollectionsItemsCompnont/Activity';
const Tab = createMaterialTopTabNavigator();
export default function CollectionItemsBar() {
  return (
    <View style={Styles.mainBg}>
      {/* <ScrollView vertical={true}> */}
      {/* <View> */}
         <Tab.Navigator
      initialRouteName="Items"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#AAB8C2",
        tabBarLabelStyle: { fontSize: 13, fontWeight: '500', paddingTop: 20},
        tabBarStyle: {
            backgroundColor: '#15202B',
            
            // borderBottomWidth: 1,
            // borderColor: "#253341"
          },
          tabBarIndicatorStyle:{
            backgroundColor: "#138E10",
          }
      }}
    >
         <Tab.Screen
        name="Items"
        component={Items}
        options={{ tabBarLabel: 'Items' }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{ tabBarLabel: 'Activity' }}
        
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