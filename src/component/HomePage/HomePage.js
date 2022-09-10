
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HomePage() {
  return (
    <View style={Styles.mainBg}>
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <View style={Styles.HomePageView}>
          <View style={Styles.HomePageCircle}>
            <View style={{ flexDirection: "row" }}>
              <Image source={require('../../Assets/logos_ethereum.png')} />
              <Text style={[Styles.HomePageText, { paddingLeft: 10 }]}>26,031</Text>
            </View>
            <View
              style={Styles.HomePageBlance}
            >
              <Text style={Styles.HomePageText}
              >Balance</Text>
            </View>
          </View>
          <View>
            <Image source={require('../../Assets/Ellipse17.png')} style={{ width: 70, height: 70 }} />
          </View>
        </View>
        <View style={Styles.HomePageButton}>
          <ScrollView horizontal={true} style={Styles.ScrollViewButton}>
            <View style={Styles.HomePageButtonPending}>
              <Text style={Styles.HomePageButtonPendingText}>Trending</Text>
            </View>
            <View style={Styles.HomePageButtonPendingOne}>
              <Text style={Styles.HomePageButtonPendingText}>Art</Text>
            </View>
            <View style={Styles.HomePageButtonPendingOne}>
              <Text style={Styles.HomePageButtonPendingText}>Gaming</Text>
            </View>
            <View style={Styles.HomePageButtonPendingOne}>
              <Text style={Styles.HomePageButtonPendingText}>Quality</Text>
            </View>
            <View style={{ marginRight: 50 }}>
            </View>
          </ScrollView>
        </View>

        <View >
          <ScrollView horizontal={true}>
            <View style={Styles.CardPage}>
              <View>
                <Image source={require('../../Assets/Rectangle8.png')} style={Styles.CardPageImage} />
                <View style={Styles.CardPageArt}>
                  <View style={Styles.CardPageBox}>
                    <Text style={Styles.CardPageBoxText}>Art</Text>
                  </View>
                  <AntDesign name='hearto' size={30} color={'black'} />
                </View>
              </View>
              <View style={Styles.CardText}>
                <Text style={Styles.CardTextOne}>Mosu #1930</Text>
                <View style={Styles.CardPageOne}>
                  <AntDesign style={Styles.CardTextOne} name={'clockcircleo'} size={18} />
                  {/* <Image source={require('../../Assets/IconTime.png')} style={Styles.CardPageImageOne}/> */}
                  <Text style={Styles.CardTextOne} >102d Left</Text>
                </View>
              </View>

              <View style={Styles.CardText}>
                <View style={Styles.CardPageProfileVerified}>
                  <Image source={require("../../Assets/Profile-Verified.png")} style={{ width: 40, height: 40 }} />
                  <Text style={Styles.CardTextProfileVerifiedOne}>Karafuru</Text>
                </View>
                <View style={Styles.CardPageOneETH}>
                  {/* <AntDesign name={'clockcircleo'} size={18} /> */}
                  <Image source={require('../../Assets/logos_ethereum.png')} />
                  <Text style={Styles.CardTextOne}>2,75 ETH</Text>
                </View>
              </View>
            </View>



            <View style={Styles.CardPage}>
              <View>
                <Image source={require('../../Assets/Rectangle8.png')} style={Styles.CardPageImage} />
                <View style={Styles.CardPageArt}>
                  <View style={Styles.CardPageBox}>
                    <Text style={Styles.CardPageBoxText}>Art</Text>
                  </View>
                  <AntDesign name='hearto' size={30} color={'black'} />
                </View>
              </View>
              <View style={Styles.CardText}>
                <Text style={Styles.CardTextOne}>Mosu #1930</Text>
                <View style={Styles.CardPageOne}>
                  <AntDesign name={'clockcircleo'} size={20} color={"#fff"} />
                  {/* <Image source={require('../../Assets/IconTime.png')} style={Styles.CardPageImageOne}/> */}
                  <Text style={Styles.CardTextOne}>102d Left</Text>
                </View>
              </View>

              <View style={Styles.CardText}>
                <View style={Styles.CardPageProfileVerified}>
                  <Image source={require("../../Assets/Profile-Verified.png")} style={{ width: 40, height: 40 }} />
                  <Text style={Styles.CardTextProfileVerifiedOne}>Karafuru</Text>
                </View>
                <View style={Styles.CardPageOneETH}>
                  {/* <AntDesign name={'clockcircleo'} size={18} /> */}
                  <Image source={require('../../Assets/logos_ethereum.png')} />
                  <Text style={Styles.CardTextOne}>2,75 ETH</Text>
                </View>
              </View>
            </View>
            <View style={{ marginRight: 20 }}>

            </View>
          </ScrollView>
        </View>

        <View style={Styles.TrendingCollections}>
          <Text style={Styles.TrendingCollectionsText}>Trending Collections</Text>
        </View>
        <View style={Styles.HomePageGhozali}>
          <View style={Styles.HomePageGhozaliDown}>
            <Image source={require('../../Assets/CollectionRank.png')} />
            <View style={{
              justifyContent: 'center',
              alignContent: 'center',
              paddingLeft: 20
            }}>
              <Text style={Styles.HomePageGhozaliDownText} >Ghozali Everyday</Text>
              <Text style={Styles.HomePageGhozaliDownTextOne}>Ghozali_Ghozalu</Text>
            </View>
          </View >
          <View style={{
              justifyContent: 'center',
              // alignItems: 'flex-start',
              // paddingLeft: 20
            }}>
            <View style={Styles.HomePageGhozaliBottomDown}>
              <Image source={require('../../Assets/logos_ethereum.png')} style={{marginRight: 10}}/>
              <Text style={Styles.HomePageGhozaliBottomDownText}>4,218</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={Styles.HomePageGhozaliBottomDownTextOne}>+23,00%</Text>
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
  HomePageView: {
    marginTop: 40,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between"
  },
  HomePageCircle: {
    position: "relative",
    borderWidth: 3,
    width: 135,
    height: 60,
    borderColor: "#AAB8C2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  HomePageBlance: {
    position: "absolute",
    top: 40,
    left: 27,

    backgroundColor: "#1C212B",
    borderRadius: 10,

    width: 75,
    height: 36,
    justifyContent: "center",
    alignItems: "center",

  },
  HomePageText: {
    // position: "absolute",
    color: "#F5F8FA",
    fontSize:18,
    fontWeight: "400",
    fontFamily: 'Rationale-Regular',

  },
  HomePageButton: {
    marginTop: 40,
    width: 400,
    //  borderColor: "white",
    //  borderWidth: 1
  },
  HomePageButtonPending: {
    color: "#F9FBFC",
    backgroundColor: "#1D9BF0",
    width: 105,
    height: 51,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,

  },
  HomePageButtonPendingOne: {
    color: "#F9FBFC",
    backgroundColor: "#253341",
    width: 105,
    height: 51,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15
  },
  HomePageButtonPendingText: {
    color: "#F9FBFC",
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Rationale-Regular',

  },
  CardPage: {
    width: 287,
    height: 423,
    backgroundColor: "#253341",
    marginLeft: 30,
    marginTop: 30,
    borderRadius: 15,
    // justifyContent: "center",
    alignItems: "center"
  },
  CardPageOne: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    width: 110

  },
  CardPageImage: {
    position: "relative",
    width: 250,
    height: 280,
    borderRadius: 15,
    marginTop: 20
  },
  CardPageImageCategory: {
    // position: "absolute"
  },
  CardText: {
    flexDirection: "row",
    width: 260,
    marginTop: 20,
    fontFamily: 'Rationale-Regular',

    // justifyContent: "space-between"
    justifyContent: "space-between",
    // borderWidth: 2

  },
  CardTextOne: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Rationale-Regular',

  },
  CardPageImageOne: {
    width: 30,
    height: 30
  },
  CardPageArt: {
    position: "absolute",
    // borderWidth : 1,
    left: 15,
    width: 210,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  CardPageBox: {
    width: 58,
    height: 32,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(49, 59, 69, 0.5)"
  },
  CardPageBoxText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Rationale-Regular',

  },
  CardPageProfileVerified: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardTextProfileVerifiedOne: {
    marginLeft: 10,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Rationale-Regular',

  },
  CardPageOneETH: {
    borderColor: '#1D9BF0',
    borderWidth: 2,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    width: 120,
    justifyContent: "space-evenly",
    alignItems: 'center'
  },
  TrendingCollections: {
    marginTop: 30
  },
  TrendingCollectionsText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '400',
    marginLeft: 20,
    fontFamily: 'Rationale-Regular',

  },
  HomePageGhozali: {
    flexDirection: 'row',
    // borderWidth: 2,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  HomePageGhozaliDown: {
    // borderWidth: 2,
    flexDirection: 'row',
  },
  HomePageGhozaliDownText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: '400',
    fontFamily: 'Rationale-Regular',

  },
  HomePageGhozaliDownTextOne:{
    fontSize: 15,
    color: '#AAB8C2',
    paddingTop: 5,
    fontFamily: 'Rationale-Regular',

    // fontWeight: 'bold'
  },
  HomePageGhozaliBottomDown:{
    flexDirection: 'row'
  },
  HomePageGhozaliBottomDownText:{
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Rationale-Regular',

  },
  HomePageGhozaliBottomDownTextOne:{
    color: "#00CB6A",
    alignItems: 'flex-end',
    paddingTop: 10,
    fontWeight: '500',
    fontFamily: 'Rationale-Regular',

  }

})