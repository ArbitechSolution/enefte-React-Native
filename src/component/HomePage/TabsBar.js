import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabsRankings from './TabsRankings';
import TabsActivity from './TabsActivity';

const Tab = createMaterialTopTabNavigator();
export default function TabsBar() {
   
  return (
    <View style={Styles.mainBg}>
    
         <Tab.Navigator
      initialRouteName="TabsRankings"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#AAB8C2",
        tabBarLabelStyle: { fontSize: 18, fontWeight: '500', paddingTop: 20},
        tabBarStyle: {
            backgroundColor: '#1C212B',
            
            borderBottomWidth: 1,
            borderColor: "#253341"
          }
      }}
    >
      <Tab.Screen
        name="TabsRankings"
        component={TabsRankings}
        options={{ tabBarLabel: 'Rankings' }}
        
      />
      <Tab.Screen
        name="TabsActivity"
        component={TabsActivity}
        options={{ tabBarLabel: 'Activity' }}
      />
      
    </Tab.Navigator>
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




// import { StyleSheet, Text, View, Dimensions, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// const listTabs = [
//     {
//         states: 'Rankings'
//     },
//     {
//         states: 'Activity'
//     },
// ]
// export default function TabsBar() {
//     const [states, setStates] = useState('Rankings')

//     const setStatesFilter = (states) => {
//         setStates(states)
//     }
//     return (
//         <SafeAreaView style={Styles.TabsBarStyle}>
//             <View style={Styles.listTab}>
//                 {
//                     listTabs.map(e => {
//                         return (
//                             <TouchableOpacity style={[Styles.btnTabs, states === e.states && Styles.btnTabsActive]}
//                                 onPress={() => setStatesFilter(e.states)}
//                             >
//                                 <Text style={[Styles.TabsText, states === e.states && Styles.TabsTextActive]}>
//                                     {e.states}
//                                 </Text>
//                             </TouchableOpacity>
//                         )

//                     })
//                 }

//             </View>
//         </SafeAreaView>

//     )
// }

// const Styles = StyleSheet.create({
//     TabsBarStyle: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     listTab: {
//         flex: 1,
//         borderStartColor: '#fff',
//         padding: 15,
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     btnTabs: {
//         width: Dimensions.get('window').width / 2,
//         flexDirection: 'row',
//         padding: 25,
//         justifyContent: 'center',
//         borderBottomWidth: 1,
//         borderColor: '#253341',
//     },
//     TabsText: {
//         color: '#AAB8C2',
//         fontSize: 20,
//         fontWeight: '500'
//     },
//     btnTabsActive: {
//         borderBottomWidth: 3,
//         borderColor: '#1D9BF0'

//     },
//     TabsTextActive:{
//         color: '#fff'
//     }
// })