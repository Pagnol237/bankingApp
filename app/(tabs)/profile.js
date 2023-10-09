import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function profile() {
  return (
    <View style={styles.main}>
      <Text>profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#787878',
        justifyContent:'center',
        alignItems:'center'
    }
})