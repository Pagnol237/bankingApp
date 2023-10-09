import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';

export default function CurenBalance() {
  return (
    <View style={styles.main}>
      <View style={styles.block1}>
        <Fontisto name="wallet" size={20} color="#ffffff" />
      </View>
      <View>
        <Text style={styles.text1}>Current Balance</Text>
        <Text style={styles.text2}>2 500 350 XFA</Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    main:{
        backgroundColor:'#ccdfef',
        marginTop:30,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:15,
        paddingBottom:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20
    },
    block1:{
        backgroundColor:'#012d64',
        padding:15,
        borderRadius:25,
        marginRight:15
    },
    text1:{
        color:'#1b1c1e'
    },
    text2:{
        color:'#1b1c1e',
        fontWeight:'600',
        fontSize:20
    }
})