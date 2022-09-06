import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Favorited() {
  return (
    <View style={Styles.mainBg}>
      <Text>Favorited</Text>
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