import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Collected() {
  const [selectedValue, setSelectedValue] = useState("All Categories");
  return (
    <View style={Styles.mainBg}>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          <View style={{marginBottom: 330}}>
      <View style={Styles.TabsRankingsView}>
      <View style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#253341', overflow: 'hidden'
                        }}>
        <Picker
          selectedValue={selectedValue}
          style={Styles.DropDownpicker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="All Categories" value="All Categories" />
          <Picker.Item label="All Categories" value="All Categories" />
        </Picker>
        </View>
        <View style={Styles.ActivityButton}>
          <Text style={Styles.ActivityButtonText}>Upload</Text>
        </View>
      </View>

      <View style={[Styles.card, ]}>
        <View style={Styles.ActivitCard}>
          <Image source={require('../../../Assets/sellNftMain.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <View style={Styles.ActivitCardDown}>
            <Text style={Styles.ActivityButtonTextOne}>The Invitation</Text>
            <View style={Styles.ActivitCardDownOne}>
              <Ionicons style={Styles.ActivityButtonTextOne}  name='heart-outline' size={20}/>
              <Text style={Styles.ActivityButtonTextOne}>192</Text>
            </View>
          </View>
        </View>
        <View style={Styles.ActivitCard}>
          <Image source={require('../../../Assets/imageactivityOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <View style={Styles.ActivitCardDown}>
            <Text style={Styles.ActivityButtonTextOne}>The Invitation</Text>
            <View style={Styles.ActivitCardDownOne}>
              <Ionicons style={Styles.ActivityButtonTextOne} name='heart-outline' size={20}/>
              <Text style={Styles.ActivityButtonTextOne}>192</Text>
            </View>
          </View>
        </View>
        <View style={[Styles.ActivitCard,]}>
          <Image source={require('../../../Assets/imageactivityOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <View style={Styles.ActivitCardDown}>
            <Text style={Styles.ActivityButtonTextOne}>The Invitation</Text>
            <View style={Styles.ActivitCardDownOne}>
              <Ionicons style={Styles.ActivityButtonTextOne} name='heart-outline' size={20}/>
              <Text style={Styles.ActivityButtonTextOne}>192</Text>
            </View>
          </View>
        </View>
        <View style={[Styles.ActivitCard, ]}>
          <Image source={require('../../../Assets/imageactivityOne.png')} style={{ width: 150, height: 150, borderRadius: 10 }} />
          <View style={Styles.ActivitCardDown}>
            <Text style={Styles.ActivityButtonTextOne}>The Invitation</Text>
            <View style={Styles.ActivitCardDownOne}>
              <Ionicons style={Styles.ActivityButtonTextOne} name='heart-outline' size={20}/>
              <Text style={Styles.ActivityButtonTextOne}>192</Text>
            </View>
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
    backgroundColor: '#1D9BF0',
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ActivityButtonText: {
    color: '#F5F8FA',
    fontSize: 20,
    fontWeight:"400",
    fontFamily: 'Rationale-Regular',
  },
  ActivityButtonTextOne: {
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
    paddingBottom: 10
  },
  ActivitCardDownOne:{
    width: 55,
    // borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
})