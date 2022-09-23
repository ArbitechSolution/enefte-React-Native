import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import Foundation from 'react-native-vector-icons/Foundation';
import Foundation from 'react-native-vector-icons/Foundation';
import SearchPage from './SearchPage';
import StatsPage from './StatsPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function AppBars() {
  const Tab = createBottomTabNavigator();
  
  return (
    <View style={Styles.mainBg}>
      

      {/* <NavigationContainer> */}
      {/* <View style={{backgroundColor: "#253341"}}> */}
        <Tab.Navigator
        
        initialRouteName="HomePage"
        screenOptions={{
          tabBarActiveTintColor: '#138E10',
          tabBarInactiveTintColor: "#AAB8C2",
          tabBarStyle: {
            backgroundColor: "#253341",
            paddingBottom: 40,
            paddingTop: 30,
            borderColor: "#253341"
          }
        }}
        
        >
          

          <Tab.Screen name="HomePage"  component={HomePage} 
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <Image source={require('../../Assets/HomeVector.png')}
                style={[Styles.ImageSize, {tintColor : focused ? "#138E10" : "#AAB8C2"}]}
                />
              )
            }
              
          }}
          />
          <Tab.Screen name="SearchPage"   component={SearchPage} 
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <Image source={require('../../Assets/SearchVector.png')}
                style={[Styles.ImageSize, {tintColor : focused ? "#138E10" : "#AAB8C2"}]}
                />
              )
            }
          }}
          />
          <Tab.Screen name="StatsPage" component={StatsPage} 
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <Image source={require('../../Assets/StatsVector.png')}
                style={[Styles.ImageSize, {tintColor : focused ? "#138E10" : "#AAB8C2"}]}
                />
              )
            }
          }}
          />
          <Tab.Screen name="ProfilePage"  component={ProfilePage} 
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <Image source={require('../../Assets/ProfileGroup.png')}
                style={[Styles.ImageSize, {tintColor : focused ? "#138E10" : "#AAB8C2"}]}
                />
              )
            }
          }}
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
      ImageSize:{
        width: 25,
        height: 25,
        marginTop: 10
        
      },
   
})