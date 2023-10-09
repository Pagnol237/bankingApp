import { SafeAreaView ,View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Balance from '../components/page1/balance'
import Cart from '../components/page1/cart'
import Service from '../components/page1/service'
import Activity from '../components/page1/activity'




export default function home() {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Balance/>
        <Cart/>
        <Service/>
        <Activity/>
      </View>
    </SafeAreaView>

  )
}

const styles= StyleSheet.create({
  main:{
    backgroundColor:'white',
    flex:1
  }
})


