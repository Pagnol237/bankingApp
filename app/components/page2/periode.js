import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'

export default function Periode() {
  return (
    <View style={styles.main}>
      <View style={styles.block1}> 
        <Text>Sept 1, 2023</Text>
      </View>

      <View style={styles.block2}> 
        <Octicons name="horizontal-rule" size={20} color="#3f3f3f" />
      </View>


      <View style={styles.block1}> 
        <Text>sept 30, 2023</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        marginTop:22,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    block1:{
        paddingLeft:25,
        paddingRight:25,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:25,
        borderBlockColor:'#3f3f3f',
        borderWidth:1
    }
})