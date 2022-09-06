import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { DefaultTheme } from 'react-native-paper';
import TabsBar from './TabsBar';
// import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function StatsPage() {
  

  return (
    <View style={Styles.mainBg}>
      {/* <ScrollView vertical={true} showsVerticalScrollIndicator={false}> */}
        <View style={Styles.StatsPages}>
          <Text style={Styles.StatsPagesText}>Stats</Text>
        </View>
        
      {/* </ScrollView> */}
      <View>
          <TabsBar/>
        </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  mainBg: {
    height: '100%',
    backgroundColor: '#1C212B',
    alignContent: 'center',
  },
  StatsPages: {
    marginTop: 30,
    marginLeft: 30
  },
  StatsPagesText: {
    fontSize: 34,
    color: '#FFFFFF',
    // fontWeight: 'bold'
  }
})