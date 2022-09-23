import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Favorited() {
  const [selectedValue, setSelectedValue] = useState("All Categories");
  return (
    <View style={Styles.mainBg}>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 330}}>
      <View style={[Styles.card, ]}>
        <View style={Styles.ActivitCard}>
          <Image source={require('../../../Assets/FavoritedImage.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <View style={Styles.ActivitCardDown}>
            <Text  style={Styles.FavoritedText}>Azuki</Text>
            <View style={Styles.ActivitCardDownOne}>
              <Ionicons  style={Styles.FavoritedText} name='heart-outline' size={20}/>
              <Text  style={Styles.FavoritedText}>320</Text>
            </View>
          </View>
          <View style={Styles.FavoritedBox}>
            <Text style={Styles.FavoritedText}>
            Azuki #4092
            </Text>
          </View>
        </View>
        <View style={Styles.ActivitCard}>
          <Image source={require('../../../Assets/FavoritedImageOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <View style={Styles.ActivitCardDown}>
            <Text  style={Styles.FavoritedText} >The Invitation</Text>
            <View style={Styles.ActivitCardDownOne}>
              <Ionicons style={Styles.FavoritedText} name='heart-outline' size={20}/>
              <Text style={Styles.FavoritedText}>192</Text>
            </View>
          </View>
          <View style={Styles.FavoritedBox}>
            <Text style={Styles.FavoritedText}>
            Young Lex
            </Text>
          </View>
        </View>
        <View style={[Styles.ActivitCard,]}>
          <Image source={require('../../../Assets/FavoritedImage.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <View style={Styles.ActivitCardDown}>
            <Text style={Styles.FavoritedText}>Azuki</Text>
            <View style={Styles.ActivitCardDownOne}>
              <Ionicons style={Styles.FavoritedText} name='heart-outline' size={20}/>
              <Text style={Styles.FavoritedText}>192</Text>
            </View>
          </View>
          <View style={Styles.FavoritedBox}>
            <Text style={Styles.FavoritedText}>
            Azuki #4092
            </Text>
          </View>
        </View>
        <View style={[Styles.ActivitCard, ]}>
          <Image source={require('../../../Assets/FavoritedImageOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <View style={Styles.ActivitCardDown}>
            <Text style={Styles.FavoritedText}>The Invitation</Text>
            <View style={Styles.ActivitCardDownOne}>
              <Ionicons style={Styles.FavoritedText} name='heart-outline' size={20}/>
              <Text style={Styles.FavoritedText}>192</Text>
            </View>
          </View>
          <View style={Styles.FavoritedBox}>
            <Text style={Styles.FavoritedText}>
            Young Lex
            </Text>
          </View>
        </View>
      </View>
      </View>
      </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
  mainBg: {
    height: '100%',
    backgroundColor: '#1C212B',
    alignContent: 'center',
  },
  TabsRankingsView: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  DropDownpicker: {
    backgroundColor: '#253341',
    width: 188,
    borderRadius: 10,
    color:"#fff"
  },
  ActivityButton: {
    backgroundColor: '#138E10',
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ActivityButtonText: {
    color: '#F5F8FA',
    fontSize: 18,
    fontWeight:"400",
    fontFamily: 'Rationale-Regular',
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 100
  },
  ActivitCard: {
    // height:170,
    backgroundColor: "#253341",
    width: 165,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  ActivitCardDown:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 155,
    // borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 5
  },
  ActivitCardDownOne:{
    width: 55,
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  FavoritedText:{
    justifyContent:'flex-start',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
    color: '#F5F8FA',
    paddingBottom: 10,
    fontWeight:"400",
    fontFamily: 'Rationale-Regular',
  },
  FavoritedBox:{
    // borderWidth: 1,
    width: 155,
    justifyContent: 'flex-start'
  }
})