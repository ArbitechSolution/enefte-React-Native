// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function HomePage() {
//   return (
//     <View>
//       <Text>HomePage</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})





import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function HomePage() {
  return (
    <View style={Styles.mainBg}>
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
        <View style={Styles.HomePageButtonPending}>
          <Text style={Styles.HomePageButtonPendingText}>Pending</Text>
        </View>
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
    fontWeight: "bold",
  },
  HomePageButtonPending: {
    color: "#F9FBFC",
    backgroundColor: "#1D9BF0",
    width: 105,
    height: 41,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  HomePageButtonPendingText:{
    color: "#F9FBFC",
    fontSize: 15
  }
})