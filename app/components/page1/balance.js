import { SafeAreaView ,View, Text,StyleSheet } from 'react-native'
import React from 'react'




export default function balance() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.texte}>Your Balance</Text>
        <Text style={styles.price}>2 500 350 XFA</Text>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    main:{

        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
       
    },
    texte:{
      color:'red',
      color:'grey'
    },
    price:{
      color:'red',
      fontWeight:'700',
      fontSize:23,
      color:'#3f3f3f',
      marginTop:7
    }

})