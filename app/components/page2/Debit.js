import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Debit() {
  return (
    <View style={styles.main}>
      <View style={styles.block1}>
        <Text style={styles.text1}>Total Credit</Text>
        <Text style={styles.text2}>5 043 350 XFA</Text>
      </View>

      <View style={styles.block2}>
        <Text style={styles.text1}>Total Debit</Text>
        <Text  style={styles.text2}>2 543 000 XFA</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20
    },
    block1:{
        width:'50%',
        display:'flex',
        justifyContent:'center',
        borderRightWidth:1,
    },
    block2:{
        width:'50%',
        display:'flex',
        justifyContent:'center',
        borderLeftWidth:1
    },
    text1:{
        textAlign:'center',
        fontWeight:'200'
    },
    text2:{
        textAlign:'center',
        fontWeight:'600',
        fontSize:17,
        marginTop:5
    }
})