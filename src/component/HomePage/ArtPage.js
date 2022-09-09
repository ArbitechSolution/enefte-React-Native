import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
export default function ArtPage({ navigation }) {
  return (
    <View style={Styles.mainBg}>
      <View>
        <Image source={require("../../Assets/searchbannerphoto.png")} />
      </View>
      <View style={Styles.iconsCont}>
        <View style={Styles.iconbox}>
          <TouchableOpacity onPress={() => navigation.navigate('AppBars')}>
            <AntDesign name='left'
              size={30} color={"white"} />
          </TouchableOpacity>

        </View>
        <View style={Styles.iconbox}>
          <Entypo name='share' size={25} color={'#F5F8FA'} />
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('AppBars')}><Image source={require("../../Assets/IconArrow.png")} /></TouchableOpacity>
        <Image source={require("../../Assets/share.png")} /> */}
      </View>
      <View style={Styles.headerTxtCont}>
        <Text style={Styles.headerTxt}>
          Art
        </Text>
        <Text style={Styles.commonTxt}>
          Karafuru is home to 5,555 generative arts where colors reign supreme.
          Leave the drab reality and enter the world of Karafuru by Museum of Toys.
        </Text>
      </View>
      <View style={Styles.featuredCont}>
        <Text style={Styles.featuredText}>
          Featured Collections
        </Text>
        <ScrollView vertical={true}>
          <View style={Styles.cardsContainor}>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadOne.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
          </View>
          <View style={Styles.cardsContainor}>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadTwo.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadThree.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
          </View>
          <View style={Styles.cardsContainor}>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadOne.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
          </View>
          <View style={Styles.cardsContainor}>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadTwo.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHeadThree.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
          </View>
          <View style={Styles.cardsContainor}>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
            <View style={Styles.myCard}>
              <Image style={Styles.headerCardImg} source={require("../../Assets/cardHead.png")} />
              <View style={Styles.headTxtContainer}>
                <Text style={Styles.headTxt}>Dour Darcels</Text>
              </View>
              <View style={Styles.bottomCont}>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Items
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    10K
                  </Text>
                </View>
                <View style={Styles.innerContainor}>
                  <Text style={Styles.cardHeadTxt}>
                    Owners
                  </Text>
                  <Text style={Styles.cardNormalTxt}>
                    4.93K
                  </Text>
                </View>


              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    </View>
  )
}
const Styles = StyleSheet.create({
  mainBg: {
    height: '100%',
    backgroundColor: '#1C212B',
  },
  iconbox: {
    backgroundColor: "#253341",
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconsCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginTop: -150
  },
  headerTxtCont: {
    marginTop: 110,
    marginLeft: 20
  },
  headerTxt: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 34,
    fontFamily: "Rationale"
  },
  commonTxt: {
    color: "#AAB8C2",
    fontWeight: "400",
    fontSize: 12,
    fontFamily: "Rationale"
  },
  featContainor: {
    marginLeft: 20,
    marginTop: 20
  },
  featuredCont: {

    marginTop: 10,
  },
  cardsContainor: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  myCard: {
    height: 170,
    backgroundColor: "#253341",
    width: 155,
    marginTop: 10,
    borderRadius: 10
  },
  headerCardImg: {
    width: "100%"
  },
  headTxtContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"red"
  },
  headTxt: {
    color: "#F5F8FA",
    marginTop: 5
  },
  bottomCont: {
    justifyContent: "space-between",
    flexDirection: "row",
    // borderWidth:1
    margin: 5,
    // backgroundColor:"red"
  }, featuredText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontFamily: "Rationale",
    marginLeft: 20
  },
  innerContainor: {
    // borderWidth:1
  },
  cardHeadTxt: {
    color: "#AAB8C2",
    fontWeight: "400",
    padding: 5,
    fontSize: 16
  },
  cardNormalTxt: {
    padding: 5,
    color: "#F5F8FA",
    fontWeight: "400",
    fontSize: 22
  }

})