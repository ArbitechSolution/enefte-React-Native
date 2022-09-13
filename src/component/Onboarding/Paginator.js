import { View, Text, StyleSheet, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

export default function Paginator({data, scrollX}) {
    const { width } = useWindowDimensions()
  return (
    <View style={{flexDirection: 'row', height: 64}}>
     {data.map((_,i)=>{
        const inputRange = [(i - 1) * width, i * width,(i + 1) * width ];

        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange : [10, 10,10],
            extrapolate: 'clamp',
            backgroundColor: '#fff'
        })
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange : [0.3, 10,0.3],
            extrapolate: 'clamp',

        })
        return <Animated.View style={[Styles.dot, {width: dotWidth, opacity}]} key={i.toString()} />
     })}
    </View>
  )
}
const Styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5, 
        backgroundColor: '#fff',
        marginHorizontal: 8
    }
})