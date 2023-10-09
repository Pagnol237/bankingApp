import { View, Text, ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function activity() {
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}>Crypto exchange</Text>

      <View style={styles.waletContainer}>
        <View style={styles.block1}>
            <FontAwesome5 name="bitcoin" size={35} color="orange" />
            <View style={styles.subBlock1}>
                <Text style={styles.text1}>Bitcoin</Text>
                <Text style={styles.text2}>0.06064</Text>
            </View>
        </View>
            
        <View style={styles.block2}>
            <Text style={styles.text3}>$53,345 11</Text>
            <Text style={styles.text4}>+7.50%</Text>
        </View>
      </View>

      <View style={styles.waletContainer}>
        <View style={styles.block1}>
            <FontAwesome5 name="ethereum" size={35} color="black" />
            <View style={styles.subBlock1}>
                <Text style={styles.text1}>ethereum</Text>
                <Text style={styles.text2}>0.1080</Text>
            </View>
        </View>
            
        <View style={styles.block2}>
            <Text style={styles.text3}>$3,451 5</Text>
            <Text style={styles.text4}>+7.50%</Text>
        </View>
      </View>

      <View style={styles.waletContainer}>
        <View style={styles.block1}>
            <FontAwesome5 name="viacoin" size={35} color="blue" />
            <View style={styles.subBlock1}>
                <Text style={styles.text1}>viacoin</Text>
                <Text style={styles.text2}>0.2680</Text>
            </View>
        </View>
            
        <View style={styles.block2}>
            <Text style={styles.text3}>$1,451</Text>
            <Text style={styles.text4}>+2.59%</Text>
        </View>
      </View>

      

    </ScrollView>
  )
}


const styles = StyleSheet.create({
   main:{
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:15
   },
   title:{
    fontWeight:'700',
    color:'#3f3f3f'
},
waletContainer:{
    shadowColor: '#171717',
    shadowOffset:{width:0, height:4},
    shadowOpacity:0.1,
    shadowRadius:3,
    backgroundColor:'white',
    marginTop:15,
    borderRadius:10,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:10,
    paddingBottom:10,
    display:'flex',
    flexDirection:'row',

},
block1:{
  width:'50%',
  display:'flex',
  flexDirection:'row'
},
block2:{
  width:'50%',
  display:'flex',
  justifyContent:'center',
},
subBlock1:{
  marginLeft:10,
  display:'flex',
  justifyContent:'center'
  
},
text1:{
  fontWeight:'700'
},
text2:{
  fontSize:11
},
text3:{
  fontWeight:'700',
  textAlign:'right'
},
text4:{
  textAlign:'right',
  color:'green',
  fontSize:11
}
})
