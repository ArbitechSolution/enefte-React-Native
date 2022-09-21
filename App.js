import React, { useState } from 'react'
import ConnectWithWallet from './src/component/ConnectWithWallet/ConnectWithWallet'
import Onboarding from "./src/component/Onboarding/Onboarding"
import Startscreen from './src/component/StartScreen/StartScreen'
import Welcome from './src/component/Welcome/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetupProfile from './src/component/SetUp-Profile/SetupProfile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppBars from './src/component/HomePage/AppBars'
import UpdateItem from './src/component/UpdateItem/UpdateItem'
import NFTPreview from './src/component/NFTPreview/NFTPreview'
import ItemReadyForSell from './src/component/ItemReadyForSell/ItemReadyForSell'
import BidFinished from './src/component/BidFinished/BidFinished'
import EditProfile from './src/component/EditProfile/EditProfile'
import SellNft from './src/component/SellNft/SellNft'
import ArtPage from "./src/component/HomePage/ArtPage"
import NftItems from './src/component/NftItems/NftItems'
import UploadItemOne from './src/component/UpdateItem/UploadItemOne'
import UploadItemThree from './src/component/UpdateItem/UploadItemThree'
import UploadItemTwo from './src/component/UpdateItem/UploadItemTwo'
import CollectionItems from './src/component/Collection/CollectionItems'
import BidDetails from './src/component/BidDetails/BidDetails'
import SellNftDetails from './src/component/SellNftDetails/SellNftDetails'
import UpdateItemsFour from './src/component/UpdateItem/UpdateItemsFour'
import NftItesmsDetails from './src/component/NftItesmsDetails/NftItesmsDetails'
import { Provider } from 'react-redux';
import MySwipeCardsComponents from './src/component/Onboarding/swipe'
// import store from './src/component/Redux/index'
export default function App() {
  const [isSubmit, setIsSubmit] = useState(false)
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator();
  const onSubmit = () => {
    setIsSubmit(true)
  }
  
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
        {/* <Stack.Screen name="MySwipeCardsComponents" options={{ headerShown: false }} component={MySwipeCardsComponents} /> */}

        <Stack.Screen name="Startscreen" options={{ headerShown: false }} component={Startscreen} />
        <Stack.Screen name="ConnectWithWallet" options={{ headerShown: false }} component={ConnectWithWallet} />
        <Stack.Screen name="SetupProfile" options={{ headerShown: false }} component={SetupProfile} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} component={Welcome} />
        <Stack.Screen name='AppBars' options={{ headerShown: false }} component={AppBars} />
        <Stack.Screen name='EditProfile' options={{ headerShown: false }} component={EditProfile} />
        <Stack.Screen name='NftItems' options={{ headerShown: false }} component={NftItems} />
        <Stack.Screen name='NftItesmsDetails' options={{ headerShown: false }} component={NftItesmsDetails} /> 
        <Stack.Screen name='NFTPreview' options={{ headerShown: false }} component={NFTPreview} />
        <Stack.Screen name='CollectionItems' options={{ headerShown: false }} component={CollectionItems} />
        <Stack.Screen name='BidDetails' options={{ headerShown: false }} component={BidDetails} />
        <Stack.Screen name='BidFinished' options={{ headerShown: false }} component={BidFinished} />
        <Stack.Screen name='UploadItemOne' options={{ headerShown: false }} component={UploadItemOne} />
        <Stack.Screen name='UploadItemThree' options={{ headerShown: false }} component={UploadItemThree} />
        <Stack.Screen name='UpdateItemsFour' options={{ headerShown: false }} component={UpdateItemsFour} />
        <Stack.Screen name='UploadItemTwo' options={{ headerShown: false }} component={UploadItemTwo} />
        <Stack.Screen name='UpdateItem' options={{ headerShown: false }} component={UpdateItem} />
        <Stack.Screen name="SellNft" options={{ headerShown: false }} component={SellNft} />
        <Stack.Screen name='SellNftDetails' options={{ headerShown: false }} component={SellNftDetails} />
        <Stack.Screen name='ItemReadyForSell' options={{ headerShown: false }} component={ItemReadyForSell} />
        
        <Stack.Screen name='ArtPage' options={{ headerShown: false }} component={ArtPage} />
      
        {/* 
        <
        <Stack.Screen name='SearchPage' options={{ headerShown: false }} component={SearchPage} />
        <Stack.Screen name='TabsBar' options={{ headerShown: false }} component={TabsBar} />
        <Stack.Screen name="ProfileAppBar" options={{ headerShown: false }} component={ProfileAppBar} />

      */}

      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  )
}
