import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function infos() {
  return (
    <View style={styles.main}>
      <Text>histry</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#B0B0B0',
        justifyContent:'center',
        alignItems:'center'
    }
})