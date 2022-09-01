import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ConnectWithWallet from './src/component/ConnectWithWallet/ConnectWithWallet'
import Onboarding from "./src/component/Onboarding/Onboarding"
import Startscreen from './src/component/StartScreen/StartScreen'
import Welcome from './src/component/Welcome/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from '@react-native-material/core'
import SetupProfile from './src/component/SetUp-Profile/SetupProfile'
import HomePage from './src/component/HomePage/HomePage'
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePage from './src/component/HomePage/HomePage'
import ProfilePage from './src/component/HomePage/ProfilePage'
import StatsPage from './src/component/HomePage/StatsPage'
import SearchPage from './src/component/HomePage/SearchPage'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function App() {
  const [isSubmit, setIsSubmit] = useState(true)
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();
  if(isSubmit == true){
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomePage') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'SearchPage') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if(route.name === 'StatsPage') {
              iconName = focused ? 'ios-stats-chart' : 'ios-stats-chart-outline';
            } else {
              iconName = focused ? 'ios-user' : 'ios-user-outline';
            }

           
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        
        >
          <Tab.Screen name="HomePage"  options={{headerShown: false}} component={HomePage} />
          <Tab.Screen name="SearchPage"  options={{headerShown: false}}  component={SearchPage} />
          <Tab.Screen name="StatsPage"  options={{headerShown: false}} component={StatsPage} />
          <Tab.Screen name="ProfilePage"  options={{headerShown: false}} component={ProfilePage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else{
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Onboarding"  options={{headerShown: false}} component={Onboarding} />
        <Stack.Screen name="Startscreen"   options={{headerShown: false}} component={Startscreen} />
        <Stack.Screen  name="welcome"   options={{headerShown: false}} component={Welcome} />
        <Stack.Screen name="ConnectWithWallet"  options={{headerShown: false}} component={ConnectWithWallet} />
        <Stack.Screen name="setupprofile" options={{headerShown: false}} component={SetupProfile}/>
        {/* <Stack.Screen name='homepage' options={{headerShown: false}} component={HomePage}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  
}
